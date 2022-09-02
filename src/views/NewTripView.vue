<script lang="ts">
import Datepicker from '@vuepic/vue-datepicker';
import { ref } from 'vue';
import '@vuepic/vue-datepicker/dist/main.css';
import { defineComponent } from 'vue';
import { getTrips, setTrips } from '../utils/utils.localStorage.js';

export default defineComponent({
  components: { Datepicker },
  data() {
    return {
      date: null,
    };
  },
  methods: {
    async getWeatherData(
      formattedStartDate: string,
      formattedEndDate: string,
      location: string
    ) {
      const weatherData = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${formattedStartDate}/${formattedEndDate}?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Cname%2Caddress%2CresolvedAddress%2Ctemp%2Cprecipprob&include=days&key=7649LKZDXGTWTK2HGWMLDTUVA&contentType=json`
      );
      // TODO catch error
      return weatherData.json();
    },
    getAverageWeatherFeatureOverDays(featureName: string, days: any) {
      return (
        days.reduce((sum: Number, day: any) => sum + day[featureName], 0) /
        days.length
      );
    },
    getAverageTemperatureAndPrecipitationOverDays(days: any) {
      return {
        averageTemperature: this.getAverageWeatherFeatureOverDays('temp', days),
        averagePrecipitationProbability: this.getAverageWeatherFeatureOverDays(
          'precipprob',
          days
        ),
      };
    },
    formatDate(date: any) {
      return new Date(date).toISOString().substring(0, 10);
    },
    async createNewTrip() {
      // 2022-07-06/2022-07-19
      const formData = new FormData(
        document.querySelector('form') as HTMLFormElement
      );

      const formattedStartDate = this.formatDate(this?.$data?.date?.[0]);
      const formattedEndDate = this.formatDate(this?.$data?.date?.[1]);

      let newTrip = {
        dates: {
          startDate: formattedStartDate,
          endDate: formattedEndDate,
        },
        location: '',
        weather: {
          averageTemperature: 0,
          averagePrecipitationProbability: 0,
        },
      };
      for (const entry of formData.entries()) {
        newTrip = {
          ...newTrip,
          [entry[0]]: entry[1],
        };
      }
      const weatherData = await this.getWeatherData(
        formattedStartDate,
        formattedEndDate,
        newTrip.location
      );

      newTrip.weather = this.getAverageTemperatureAndPrecipitationOverDays(
        weatherData.days
      );

      const newTripId = self.crypto.randomUUID();
      return {
        trip: newTrip,
        id: newTripId,
      };
    },
    async save(event: any) {
      const { id: newTripId, trip: newTrip } = await this.createNewTrip();
      const trips = getTrips();
      const updatedTripsList = JSON.stringify({
        ...trips,
        [newTripId]: newTrip,
      });
      setTrips(updatedTripsList);
      // Navigate to new trip page
      this.$router.push({ name: 'trip', query: { id: newTripId } });
    },
  },
});
</script>

<template>
  <h1>New trip</h1>
  <form @submit.prevent>
    <div class="entry">
      <label for="title">Trip title</label>
      <div class="input-wrapper">
        <input type="text" id="title" name="title" required />
      </div>
    </div>
    <div class="entry">
      <label for="location">Where to?</label>
      <div class="input-wrapper">
        <input type="text" id="location" name="location" required />
      </div>
    </div>
    <div class="entry">
      <label for="dates">When?</label>
      <div class="input-wrapper">
        <Datepicker
          range
          v-model="date"
          inputClassName="dp-custom-input"
          :enableTimePicker="false"
        ></Datepicker>
      </div>
    </div>
    <button type="submit" class="primary" @click="save">Save</button>
  </form>
</template>

<style>
.dp__menu {
  font-family: 'Roboto';
}
.dp__theme_light {
  --dp-background-color: #ffffff;
  --dp-text-color: #212121;
  --dp-hover-color: #f3f3f3;
  --dp-hover-text-color: #212121;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: var(--color-primary);
  --dp-primary-text-color: #f8f5f5;
  --dp-secondary-color: #c0c4cc;
  --dp-border-color: #ddd;
  --dp-menu-border-color: #ddd;
  --dp-border-color-hover: #aaaeb7;
  --dp-disabled-color: #f6f6f6;
  --dp-scroll-bar-background: #f3f3f3;
  --dp-scroll-bar-color: #959595;
  --dp-success-color: var(--color-primary);
  --dp-success-color-disabled: #a3d9b1;
  --dp-icon-color: #959595;
  --dp-danger-color: #ff6f60;
}

input,
.dp-custom-input {
  width: 100%;
  border: solid 2px whitesmoke;
  border-radius: 3px;
  font-family: 'Roboto';
  font-size: 1rem;
  transition: background-color 0.2s linear, border-color 0.2s linear;
}

.dp-custom-input {
  padding: 0.6rem 0.6rem 0.6rem 2.6rem;
}

input {
  padding: 0.6rem;
}

input:hover,
.dp-custom-input:hover {
  background: var(--color-secondary-x-light);
  border: solid 2px whitesmoke !important;
}

input:active,
input:focus,
.dp-custom-input.dp__input_focus:active,
.dp-custom-input.dp__input_focus:focus {
  border: solid 2px var(--color-secondary) !important;
  background: var(--color-secondary-x-light);
  outline: none;
}
</style>

<style scoped>
form {
  max-width: 60rem;
}

.entry {
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.input-wrapper {
  flex: 2;
}

label {
  padding-right: 1rem;
  flex: 1;
  display: block;
}

button {
  margin-top: 1rem;
}
</style>
