<template>
  <div class="city-weather-day">
    <div class="weather-day-cite">
      <cite>逐天天气预报</cite>
    </div>

    <div class="weather-day-location">
      <slot-location/>
    </div>

    <div class="weather-day-select">
      <slot-day/>
    </div>

    <div class="weather-day-lang">
      <slot-lang/>
    </div>

    <div class="weather-day-unit">
      <slot-unit/>
    </div>
  </div>

  <button type="submit" @click="getWeatherDay()">submit</button>

  <div class="city-weather-day-show">
    <ol>
      <li
          v-for="(day,index) in weatherDayData"
          :key="index"
          v-text="day"
      ></li>
    </ol>
  </div>
</template>

<script>
import slotDay from "@/components/slot/slotDay.vue"
import slotLang from "@/components/slot/slotLang.vue"

import slotLocation from "@/components/slot/slotLocation.vue"
import slotUnit from "@/components/slot/slotUnit.vue"
import { computed } from "vue"
import { useStore } from "vuex"

import { CITY_WEATHER_DAY } from "../../store/type.mjs"

export default {
  name: "WeatherDay",
  components: { slotLocation, slotLang, slotDay, slotUnit },
  setup() {
    const store = useStore ()
    const getWeatherDay = () => {
      store.dispatch (
          {
            type: CITY_WEATHER_DAY,
          },
      )
    }

    return {
      getWeatherDay,
      weatherDayData: computed (() => store.state.b.day.data),
    }
  },
}
</script>

<style scoped>

</style>
