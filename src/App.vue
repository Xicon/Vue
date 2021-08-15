<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/geolocation">地理位置API</router-link>
      <router-link to="/cityWeather">城市天气API</router-link>
      <router-link to="/weatherIndex">天气指数API</router-link>
      <router-link to="/disasterWarn">灾害预警API</router-link>
      <router-link to="/historicalData">历史数据API</router-link>
    </nav>
  </header>
  <router-view/>
</template>

<script>

export default {}
</script>

<style lang="scss">
@import "assets/style/base.css";
@import "assets/style/public.css";
@import "assets/style/app.css";
</style>
