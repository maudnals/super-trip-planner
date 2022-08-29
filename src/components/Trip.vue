<script lang="ts">
import TripInfoPoint from './TripInfoPoint.vue';

export default {
  props: ['trip'],
  components: {
    TripInfoPoint,
  },
  methods: {
    getTripLocation() {
      return this.$props.trip.location;
    },
    initMap() {
      const address = this.getTripLocation();
      const map = new google.maps.Map(
        document.getElementById('mapEl') as HTMLElement,
        {
          zoom: 8,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite'],
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
          },
        }
      );
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: address }, function (results, status) {
        if (status == 'OK') {
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          });
        } else {
          alert(
            'Geocode was not successful for the following reason: ' + status
          );
        }
      });
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>

<template>
  <h1>{{ trip?.title }}</h1>
  <TripInfoPoint :label="'to'" :info="trip?.location" />
  <TripInfoPoint :label="'from'" :info="trip?.dates?.startDate" />
  <TripInfoPoint :label="'until'" :info="trip?.dates?.endDate" />
  <TripInfoPoint
    :label="'weather at these dates'"
    :info="
      trip?.weather?.averagePrecipitationProbability > 50
        ? '🌧 Rainy'
        : '🌞 Sunny'
    "
  />
  <TripInfoPoint
    :label="'average temperature'"
    :info="trip?.weather?.averageTemperature.toFixed(1) + '°C'"
  />
  <div id="mapEl"></div>
</template>

<style scoped>
#mapEl {
  height: 500px;
  width: 500px;
}
</style>
