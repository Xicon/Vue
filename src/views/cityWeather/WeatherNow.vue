<template>
<div class="weather-now">

  <div class="weather-location">
    <slot-location/>
  </div>

</div>
</template>

<script>
export default {
  name: "WeatherNow.vue"
}
</script>

<style scoped>

</style>