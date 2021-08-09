<template>
  <Weather-disaster-warn></Weather-disaster-warn>
  <Weather-warn-city-list></Weather-warn-city-list>
</template>

<script>
const WeatherDisasterWarn = require('@/views/disasterWarn/WeatherDisasterWarn')
const WeatherWarnCityList = require('@/views/disasterWarn/WeatherWarnCityList')

export default {
  name: "DisasterWarn",
  components: {
    WeatherDisasterWarn,
    WeatherWarnCityList
  }
}
</script>

<style scoped>

</style>