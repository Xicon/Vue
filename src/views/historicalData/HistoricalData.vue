<template>
  <HistoricalAir></HistoricalAir>
  <HistoricalWeather></HistoricalWeather>
</template>

<script>
import HistoricalAir from '@/views/historicalData/HistoricalAir'
import HistoricalWeather from '@/views/historicalData/HistoricalWeather'

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