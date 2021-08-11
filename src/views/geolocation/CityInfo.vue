<template>
  <div class="geolocation-city-info">
    <div class="city-cite">
      <cite>城市信息查询</cite>
    </div>

    <div class="cityInfo-location">
      <label for="cityInfo-location">输入想搜索的城市/地区</label>
      <input type="search" name="geolocation-cityInfo-location" id="cityInfo-location" checked="checked"
             @change="cityLocation($event)"
      />
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

    <button @click="getCityInfo()">getCityInfo</button>
  </div>

  <div class="geolocation-cityInfo-show">
    <ol v-for="location in $store.state.a.cityInfo.data">
      <li>地区/城市名称：{{ location.name }}</li>
      <li>地区/城市ID：{{ location.id }}</li>
      <li>地区/城市纬度：{{ location.lat }}</li>
      <li>地区/城市经度：{{ location.lon }}</li>
      <li>地区/城市的上级行政区划名称：{{ location.lon }}</li>
      <li>地区/城市所属一级行政区域：{{ location.lon }}</li>
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
import slotRange from '@/components/slot/slotRange'
import slotNumber from '@/components/slot/slotNumber'
import slotLang from '@/components/slot/slotLang'
import {LOCATION_CITY_INFO, LOCATION_CITY_LOCATION, SLOT_ADM} from "@/store/type.mjs";

export default {
  name: "CityInfo",
  methods: {
    cityLocation(e) {
      return this.$store.commit({
        type: LOCATION_CITY_LOCATION,
        value: e.target.value
      })
    },

    getCityInfo() {
      return this.$store.dispatch({
        type: LOCATION_CITY_INFO,
      })
    },

  },
  components: {
    slotAdm,
    slotRange,
    slotNumber,
    slotLang
  }
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