<template>
  <div class="geolocation-poi-info">
    <div class="poi-info-cite">
      <cite>POI信息查询</cite>
    </div>

    <div class="poi-info-location">
      <label for="poi-info-location">输入城市/地区名称</label>
      <input type="search" name="poi-info-scope" id="poi-info-location"
             @change="poiInfoLocation($event)"
      />
    </div>

    <div class="poi-info-type">
      <slot-type/>
    </div>

    <div class="poi-info-city">
      <slot-city/>
    </div>

    <div class="poi-info-number">
      <div class="poi-number">
        <slot-number/>
      </div>

      <div class="poi-city-lang">
        <slot-lang/>
      </div>
    </div>

    <button type="submit" @click="getPOIInfo()">getPOIInfo</button>
  </div>
</template>

<script>
import slotNumber from '@/components/slot/slotNumber'
import slotLang from '@/components/slot/slotLang'
import slotType from '@/components/slot/slotType'
import slotCity from '@/components/slot/slotCity'
import {LOCATION_CITY_LOCATION, LOCATION_POI_INFO} from "@/store/type.mjs"

export default {
  name: "POIInfo",
  methods: {
    poiInfoLocation(e) {
      return this.$store.commit({
        type: LOCATION_CITY_LOCATION,
        value: e.target.value
      })
    },
    getPOIInfo() {
      return this.$store.dispatch({
        type: LOCATION_POI_INFO
      })
    }
  },
  components: {
    slotNumber,
    slotLang,
    slotType,
    slotCity
  }
}
</script>

<style lang="scss" scoped>
.geolocation-poi-info {

  background-color: #12aa9c;

  .poi-info-cite {
    cite {
      font-style: normal;
    }
  }
}
</style>