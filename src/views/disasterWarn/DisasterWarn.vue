<template>
  <div class="disasterWarn-link">
    <router-link to="/disasterWarn/weather">天气灾害预警</router-link>
    <router-link to="/disasterWarn/cityList">天气预警城市列表</router-link>
  </div>
  <router-view/>

</template>

<script>

export default {
  name: "DisasterWarn",
}
</script>

<style scoped>

</style>
