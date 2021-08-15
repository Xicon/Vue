<template>
  <div class="cityWeather-link">
    <router-link to="/cityWeather/now">实时天气</router-link>
    |
    <router-link to="/cityWeather/day">逐天天气预报</router-link>
    |
    <router-link to="/cityWeather/hour">逐小时天气预报</router-link>
  </div>
  <router-view/>
</template>

<script>

export default {
  name: "CityWeather",
}
</script>

<style scoped>

</style>
