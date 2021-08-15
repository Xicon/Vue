<template>
  <div class="weather-warn-list">
    <div class="weather-warn-list-cite">
      <cite>天气预警城市列表</cite>
      <p>获取当前中国发生天气预警的城市列表</p>
    </div>

    <button type="submit" @click="getWeatherWarnList()">submit</button>
  </div>

  <div class="weather-warn-list-show">
    <table>
      <thead>
      <tr>
        <th>当前国家预警的LocationID列表</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td v-for="data in warningLocList">{{ data.locationId }}</td>
      </tr>
      </tbody>
    </table>
  </div>
  <small>当前API的最近更新时间:{{ updateTime || '请先获取数据' }}</small>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"
import { DISASTER_WARN_CITY_LIST } from "../../store/type.mjs"

export default {
  name: "WeatherWarnCityList",
  setup() {
    const store = useStore ()
    const getWeatherWarnList = () => {
      store.dispatch (DISASTER_WARN_CITY_LIST)
    }
    return {
      getWeatherWarnList,
      warningLocList: computed (() => store.state.d.list.data.warningLocList),
      updateTime: computed (() => store.state.d.list.data.updateTime),
    }
  },
}
</script>

<style lang="scss" scoped>
.weather-warn-list-show {
  table {
    tbody {
      width: 100vw;
      height: 30vh;

      tr {
        width: 100vw;
        height: 30vh;
        display: grid;
        overflow: auto;
        grid-template-columns: repeat(auto-fill, 100px);
        grid-template-rows: repeat(auto-fill, 30px);
        justify-content: space-evenly;
        align-items: center;

        td {
          height: 5vh;
          min-height: 30px;
          text-align: center;
          line-height: 5vh;
        }
      }
    }
  }
}
</style>
