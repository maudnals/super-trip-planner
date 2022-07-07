<script lang="ts">
import TripInfoPoint from './TripInfoPoint.vue';

export default {
  props: ['trip'],
  components: {
    TripInfoPoint,
  },
  mounted() {
    initMap();
  },
};

function initMap(): void {
  const styledMapType = new google.maps.StyledMapType(
    [
      { elementType: 'geometry', stylers: [{ color: '#FFF2ED' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#586162' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#00000' }] },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#00000' }],
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#dcd2be' }],
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#ae9e90' }],
      },
      {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [{ color: '#FFE8E0' }],
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{ color: '#dfd2ae' }],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#93817c' }],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [{ color: '#B7CE89' }],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#447530' }],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#f5f1e6' }],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{ color: '#fdfcf8' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#f8c967' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#e9bc62' }],
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry',
        stylers: [{ color: '#FFA78B' }],
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#db8555' }],
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#806b63' }],
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{ color: '#dfd2ae' }],
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#8f7d77' }],
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#ebe3cd' }],
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{ color: '#dfd2ae' }],
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [{ color: '#5CB8C2' }],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#005F66' }],
      },
    ],
    { name: 'Styled Map' }
  );
  const location = { lat: 52.52, lng: 13.405 };

  const map = new google.maps.Map(
    document.getElementById('mapEl') as HTMLElement,
    {
      center: location,
      zoom: 6,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map'],
      },
    }
  );
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}
</script>

<template>
  <h1>{{ trip?.title }}</h1>
  <TripInfoPoint :label="'to'" :info="trip?.location" />
  <TripInfoPoint :label="'from'" :info="trip?.dates?.startDate" />
  <TripInfoPoint :label="'until'" :info="trip?.dates?.endDate" />
  <TripInfoPoint
    :label="'weather at these dates'"
    :info="
      trip?.weather?.averagePrecipitationProbability > 40
        ? '🌧 Rainy'
        : '🌞 Sunny'
    "
  />
  <TripInfoPoint
    :label="'average temperature'"
    :info="trip?.weather?.averageTemperature.toString().substring(0, 3) + '°C'"
  />
  <div id="mapEl"></div>
</template>

<style scoped>
#mapEl {
  height: 500px;
  width: 500px;
}
</style>
