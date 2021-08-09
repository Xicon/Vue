<template>
  <HistoricalAir></HistoricalAir>
  <HistoricalWeather></HistoricalWeather>
</template>

<script>
const HistoricalAir = require('@/views/historicalData/HistoricalAir')
const HistoricalWeather = require('@/views/historicalData/HistoricalWeather')
export default {
  name: "HistoricalData",
  components: {
    HistoricalAir,
    HistoricalWeather
  }
}
</script>

<style scoped>

</style>