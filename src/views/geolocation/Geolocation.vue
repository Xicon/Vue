<template>
  <div class="geolocation">
    <CityInfo></CityInfo>
    <HotCity></HotCity>
    <POIInfo></POIInfo>
    <POIScope></POIScope>
  </div>

</template>

<script>
import CityInfo from "@/views/geolocation/CityInfo"
import HotCity from "@/views/geolocation/HotCity"
import POIInfo from "@/views/geolocation/POIInfo"
import POIScope from "@/views/geolocation/POIScope"

export default {
  name: "Geolocation",
  components: {
    CityInfo,
    HotCity,
    POIInfo,
    POIScope
  }
}
</script>

<style lang="scss">
.geolocation {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>