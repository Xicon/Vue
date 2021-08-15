<template>
  <div class="geolocation-city-info">
    <div class="city-cite">
      <cite>城市信息查询</cite>
    </div>

    <div class="cityInfo-location">
      <slot-location/>
    </div>

    <div class="cityInfo-adm">
      <slot-adm/>
    </div>

    <div class="cityInfo-range">
      <slot-range/>
    </div>

    <div class="cityInfo-number">
      <slot-number/>
    </div>

    <div class="cityInfo-lang">
      <slot-lang/>
    </div>

  </div>

  <button @click="getCityInfo()">getCityInfo</button>

  <div class="geolocation-cityInfo-show">
    <ol v-for="location in cityInfo">
      <li>地区/城市名称：{{ location.name }}</li>
      <li>地区/城市ID：{{ location.id }}</li>
      <li>地区/城市纬度：{{ location.lat }}</li>
      <li>地区/城市经度：{{ location.lon }}</li>
      <li>地区/城市的上级行政区划名称：{{ location.adm2 }}</li>
      <li>地区/城市所属一级行政区域：{{ location.adm1 }}</li>
      <li>地区/城市所属国家名称{{ location.counter }}</li>
      <li>地区/城市所在时区:{{ location.tz }}</li>
      <li>地区/城市目前与UTC时间偏移的小时数，{{ location.utcOffset }}</li>
      <li>地区/城市的属性:{{ location.type }}</li>
      <li>地区评分:{{ location.rank }}</li>
    </ol>
  </div>
</template>

<script>

import slotAdm from '@/components/slot/slotAdm'
import slotLang from '@/components/slot/slotLang'
import slotLocation from '@/components/slot/slotLocation'
import slotNumber from '@/components/slot/slotNumber'
import slotRange from '@/components/slot/slotRange'
import { LOCATION_CITY_INFO } from "@/store/type.mjs"
import { computed } from "vue"
import { useStore } from 'vuex'

export default {
  components: { slotLocation, slotAdm, slotRange, slotNumber, slotLang }, // computed: mapState(
  setup() {
    const store = useStore ()

    function getCityInfo() {
      store.dispatch (
          {
            type: LOCATION_CITY_INFO,
          },
      )
    }

    return {
      getCityInfo,
      cityInfo: computed (() => store.state.a.cityInfo.data),
    }
  },
}

</script>

<style lang="scss">
.geolocation-city-info {

  background-color: #428675;

  .city-cite {
    cite {
      font-style: normal;
      font-size: large;
    }
  }
}
</style>
