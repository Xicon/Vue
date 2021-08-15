<template>
  <div class="city-weather-hour">
    <div class="weather-hour-cite">
      <cite>未来天气预报</cite>
    </div>

    <div class="weather-hour-location">
      <slot-location/>
    </div>

    <div class="weather-hour-lang">
      <slot-lang/>
    </div>

    <div class="weather-hour-unit">
      <slot-unit/>
    </div>
  </div>

  <button type="submit" @click="getWeatherHour()">submit</button>

  <div class="city-weather-hour-show">
    <ol>
      <li
          v-for="(day,index) in weatherHourData"
          :key="index"
          v-text="day"
      ></li>
    </ol>
  </div>
</template>

<script>
import slotLang from "@/components/slot/slotLang.vue"

import slotLocation from "@/components/slot/slotLocation.vue"
import slotUnit from "@/components/slot/slotUnit.vue"
import { computed } from "vue"
import { useStore } from "vuex"

import { CITY_WEATHER_HOUR } from "../../store/type.mjs"

export default {
  name: "WeatherHour",
  components: { slotLocation, slotLang, slotUnit },
  setup() {
    const store = useStore ()
    const getWeatherHour = () => {
      store.dispatch (
          {
            type: CITY_WEATHER_HOUR,
          },
      )
    }

    return {
      getWeatherHour,
      weatherHourData: computed (() => store.state.b.hour.data),
    }
  },
}
</script>

<style scoped>

</style>
