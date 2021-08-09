<template>
  <header>
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/geolocation">地理位置API</router-link>
      <router-link to="/cityWeather">城市天气API</router-link>
      <router-link to="/weatherIndex">天气指数API</router-link>
      <router-link to="/disasterWarn">灾害预警API</router-link>
      <router-link to="/historicalData">历史数据API</router-link>
    </nav>
    <router-view/>

    <div class="weather-cityName">
      <h3></h3>
    </div>
  </header>

</template>

<script>
import {HOME_INFO} from "@/store/type.mjs";

export default {
  created() {
    // this.getIndexInfo()
  },
  methods: {
    // getIndexInfo() {
    //   return this.$store.dispatch(HOME_INFO)
    // }
  }
}
</script>

<style lang="scss">
@import "assets/style/base.css";
@import "assets/style/public.css";
@import "assets/style/app.css";
</style>
