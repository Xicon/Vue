<template>
  <WeatherNow></WeatherNow>
  <WeatherDay></WeatherDay>
  <WeatherHour></WeatherHour>
</template>

<script>
import WeatherNow from "@/views/cityWeather/WeatherNow"
import WeatherDay from "@/views/cityWeather/WeatherDay"
import WeatherHour from "@/views/cityWeather/WeatherHour"

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