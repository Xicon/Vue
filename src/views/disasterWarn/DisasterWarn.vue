<template>
  <Weather-disaster-warn></Weather-disaster-warn>
  <Weather-warn-city-list></Weather-warn-city-list>
</template>

<script>
import WeatherDisasterWarn from '@/views/disasterWarn/WeatherDisasterWarn'
import WeatherWarnCityList from '@/views/disasterWarn/WeatherWarnCityList'

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