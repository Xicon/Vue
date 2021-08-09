<template>
  <WeatherNow></WeatherNow>
  <WeatherDay></WeatherDay>
  <WeatherHour></WeatherHour>
</template>

<script>
const WeatherNow = require("@/views/cityWeather/WeatherNow")
    , WeatherDay = require("@/views/cityWeather/WeatherDay")
    , WeatherHour = require("@/views/cityWeather/WeatherHour")

export default {
  name: "CityWeather",
  components: {
    WeatherNow,
    WeatherDay,
    WeatherHour,
  }
}
</script>

<style scoped>

</style>