<template>
  <div class="geolocation-poi-info">
    <div class="poi-info-cite">
      <cite>POI信息查询</cite>
    </div>

    <div class="poi-info-location">
      <slot-location/>
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

  <div class="geolocation-poi-info-show">
    <ol>
      <li v-for="item in poiInfo">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
import slotCity from '@/components/slot/slotCity'
import slotLang from '@/components/slot/slotLang'
import slotLocation from '@/components/slot/slotLocation'
import slotNumber from '@/components/slot/slotNumber'
import slotType from '@/components/slot/slotType'
import { LOCATION_POI_INFO, SLOT_LOCATION } from "@/store/type.mjs"
import { computed } from "vue"
import { useStore } from 'vuex'

export default {
  name: "POIInfo",
  components: { slotNumber, slotLang, slotType, slotCity, slotLocation },
  setup() {
    const store = useStore ()
    const poiInfoLocation = e => {
      store.commit (
          {
            type: SLOT_LOCATION,
            value: e.target.value,
          },
      )
    }

    const getPOIInfo = () => {
      store.dispatch (
          {
            type: LOCATION_POI_INFO,
          },
      )
    }

    return {
      poiInfoLocation,
      getPOIInfo,
      poiInfo: computed (() => store.state.a.poiInfo.data),
    }
  },

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
