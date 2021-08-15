<template>
  <div class="geolocation-link">
    <router-link to="/geolocation/info">城市信息查询</router-link>
    |
    <router-link to="/geolocation/city">热门城市查询</router-link>
    |
    <router-link to="/geolocation/poiInfo">POI信息搜索</router-link>
    |
    <router-link to="/geolocation/poiScope">POI范围搜索</router-link>
  </div>
  <router-view/>
</template>

<script>


export default {
  name: "Geolocation",
}
</script>

<style lang="scss">
.geolocation-link {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #add5a2;
}


</style>
