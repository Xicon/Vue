<template>
  <div class="city-weather-now">
    <div class="city-weather-now-cite">
      <cite>实时天气</cite>
    </div>

    <div class="weather-now-location">
      <slot-location/>
    </div>

    <div class="weather-now-lang">
      <slot-lang/>
    </div>

    <div class="weather-now-unit">
      <slot-unit/>
    </div>

    <button type="submit" @click="getWeatherNow()">submit</button>
  </div>

  <div class="city-weather-now-show">
    <ol>
      <li v-for="item in weatherNowData">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
import slotLang from '@/components/slot/slotLang'
import slotLocation from '@/components/slot/slotLocation'
import slotUnit from '@/components/slot/slotUnit'
import { CITY_WEATHER_NOW } from "@/store/type.mjs"
import { computed } from "vue"
import { useStore } from "vuex"

export default {
  name: "WeatherNow.vue",
  components: { slotLocation, slotLang, slotUnit },
  setup() {
    const store = useStore ()

    const getWeatherNow = () => {
      store.dispatch (
          {
            type: CITY_WEATHER_NOW,
          },
      )
    }

    return {
      getWeatherNow,
      weatherNowData: computed (() => store.state.b.now.data),
    }
  },
}
</script>

<style scoped>

</style>
