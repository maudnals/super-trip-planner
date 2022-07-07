<script>
import Datepicker from '@vuepic/vue-datepicker';
import { ref } from 'vue';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  components: { Datepicker },
  data() {
    return {
      date: null,
    };
  },
  methods: {
    getTrips() {
      return localStorage.getItem('trips')
        ? JSON.parse(localStorage.getItem('trips'))
        : {};
    },
    setTrips(trips) {
      localStorage.setItem('trips', trips);
    },
    async getWeatherData(formattedStartDate, formattedEndDate) {
      const weatherData = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Berlin/${formattedStartDate}/${formattedEndDate}?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Cname%2Caddress%2CresolvedAddress%2Ctemp%2Cprecipprob&include=days&key=7649LKZDXGTWTK2HGWMLDTUVA&contentType=json`
      );
      // TODO catch error
      return weatherData.json();
    },
    getAverageWeatherFeatureOverDays(featureName, days) {
      return days.reduce((sum, day) => sum + day[featureName], 0) / days.length;
    },
    getAverageTemperatureAndPrecipitationOverDays(days) {
      return {
        averageTemperature: this.getAverageWeatherFeatureOverDays('temp', days),
        averagePrecipitationProbability: this.getAverageWeatherFeatureOverDays(
          'preciprob',
          days
        ),
      };
    },
    formatDate(date) {
      return new Date(date).toISOString().substring(0, 10);
    },
    async createNewTrip() {
      // 2022-07-06/2022-07-19
      const formData = new FormData(document.querySelector('form'));
      const formattedStartDate = this.formatDate(this.$data.date[0]);
      const formattedEndDate = this.formatDate(this.$data.date[1]);
      const weatherData = await this.getWeatherData(
        formattedStartDate,
        formattedEndDate
      );

      let newTrip = {
        dates: {
          startDate: formattedStartDate,
          endDate: formattedEndDate,
        },
        weather: this.getAverageTemperatureAndPrecipitationOverDays(
          weatherData.days
        ),
      };
      for (const entry of formData.entries()) {
        newTrip = {
          ...newTrip,
          [entry[0]]: entry[1],
        };
      }
      const newTripID = self.crypto.randomUUID();
      return {
        trip: newTrip,
        id: newTripID,
      };
    },
    async save(event) {
      const { id: newTripID, trip: newTrip } = await this.createNewTrip();
      const trips = this.getTrips();
      const newTrips = JSON.stringify({ ...trips, [newTripID]: newTrip });
      this.setTrips(newTrips);
      console.log('New trips: ', this.getTrips());
      // Navigate to new trip page
      location.href = `/trip?id=${newTripID}`;
    },
  },
};
</script>

<template>
  <h1>New trip</h1>
  <form @submit.prevent>
    <label for="location">When?</label>
    <Datepicker range v-model="date"></Datepicker>
    <label for="title">Trip title:</label>
    <input type="text" id="title" name="title" required />
    <label for="location">Where to?</label>
    <input type="text" id="location" name="location" required />
    <button type="submit" @click="save">Save</button>
  </form>
</template>

<style scoped></style>
