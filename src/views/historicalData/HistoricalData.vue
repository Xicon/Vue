<template>
  <div class="historicalAir-link">
    <router-link to="/historicalData/weather">历史天气数据</router-link>
    <router-link to="/historicalData/air">历史空气质量</router-link>
  </div>
  <router-view/>

</template>

<script>

export default {
  name: "HistoricalData",
}
</script>

<style scoped>

</style>
