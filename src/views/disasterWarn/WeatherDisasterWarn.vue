<template>
  <div class="disasterWarn-weather">
    <div class="disasterWarn-weather-cite">
      <cite>天气灾害预警</cite>
    </div>

    <div class="disasterWarn-weather-location">
      <slot-location-id/>
    </div>

    <div class="disasterWarn-weather-lang">
      <slot-lang/>
    </div>

    <button type="submit" @click="getWeatherDisasterWarn()">submit</button>
  </div>

  <div class="disasterWarn-weather-show">
    <table v-for="warning in weatherDisasterWarnData.warning">
      <thead>
      <tr>
        <th>唯一ID：{{ warning.id }}</th>
        <th>标题：{{ warning.title }}</th>
        <td>类型：{{ warning.typeName }}</td>
        <th>发布时间：{{ warning.pubTime }}</th>
        <th>开始时间：{{ warning.startTime || '空' }}</th>
        <th>结束时间：{{ warning.endTime || '空' }}</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>详细描述：{{ warning.text }}</td>
        <td>预警状态：{{ warning.status }}</td>
        <td>预警等级：{{ warning.level }}</td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td>相关联:{{ warning.related || '空' }}</td>
        <td>类型ID：{{ warning.type }}</td>
        <td>发布单位：{{ warning.sender }}</td>
        <td>原始数据：{{ weatherDisasterWarnData.refer.sources }}</td>
        <td>数据许可：{{ weatherDisasterWarnData.refer.sources }}</td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>

import { computed } from "vue"
import { useStore } from "vuex"
import slotLang from "../../components/slot/slotLang.vue"
import slotLocationId from "../../components/slot/slotLocationID.vue"
import { DISASTER_WARN_WEATHER } from "../../store/type.mjs"

export default {
  name: "WeatherDisasterWarn",
  components: { slotLocationId, slotLang },
  setup() {
    const sotre = useStore ()
    const getWeatherDisasterWarn = () => {
      sotre.dispatch (
          {
            type: DISASTER_WARN_WEATHER,
          },
      )
    }

    return {
      getWeatherDisasterWarn,
      weatherDisasterWarnData: computed (() => sotre.state.d.now.data),
    }
  },
}
</script>

<style lang="scss" scoped>
.disasterWarn-weather-show {
  table {
    thead > tr,
    tbody > tr,
    tfoot > tr {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      td {
        height: 5vh;
        min-height: 35px;
      }
    }

    thead {
      tr {

        td {

        }
      }
    }

    tbody {
      tr {

      }
    }

    tfoot {
      tr {

      }
    }
  }

}
</style>
