<template>
  <div class="weather-index">
    <div class="weather-index-cite">
      <cite>天气生活指数</cite>
    </div>

    <div class="weather-index-location">
      <slot-location/>
    </div>

    <form class="weather-index-type">
      <label for="indexTypeList">生活指数</label>
      <button type="reset">重置</button>
      <button type="submit" @click="allIndexType()">全选</button>

      <select
          id="indexTypeList"
          v-model="defaultIndexType.value"
          multiple="multiple"
          name="weather-index-type-list"
          size="10"
          @change="getIndexType($event)"
      >
        <option
            v-for="(type,index) in indexTypeList"
            :key="index"
            :autofocus="type.autofocus"
            :disabled="type.disabled"
            :selected="type.selected"
            :value="type.type"
            v-text="type.text"
        />

      </select>
    </form>

    <div class="weather-index-lang">
      <slot-lang>
        <template #slot-lang>
          <label for="weather-index-lang">多语言设置，本数据仅支持中文和英文。</label>
          <select id="weather-index-lang" name="weather-index-lang"
                  @change="getIndexLang($event)"
          >
            <option selected="selected" value="zh">中文</option>
            <option value="en">英文</option>
          </select>
        </template>
      </slot-lang>
    </div>
    <button type="submit" @click="getWeatherLifeIndex()">submit</button>

    <div class="weather-index-show">
      <!--      {{ $store.state.c.life.data }}-->
      <table v-for="data in weatherLifeIndexData.daily">
        <thead>
        <tr>
          <th>名称：{{ data.name }}</th>
        </tr>
        </thead>

        <tbody>
        <tr>
          <td>预报等级：{{ data.level }}</td>
          <td>预报级别：{{ data.category }}</td>
          <td>详细描述：{{ data.text }}</td>
          <td>类型ID：{{ data.type }}</td>
          <td>预报日期：{{ data.date }}</td>
        </tr>
        </tbody>

        <tfoot>
        <tr>
          <td>原始数据来源:{{ data.sources || '空' }}</td>
          <td>数据许可或版权声明:{{ data.license || '空' }}</td>
        </tr>
        </tfoot>
      </table>
      <small>最近更新时间：{{ weatherLifeIndexData.updateTime || '请先获取数据' }}</small>
    </div>
  </div>


</template>
<script>
import { computed, reactive, toRefs } from "vue"
import { useStore } from "vuex"
import slotLang from "../../components/slot/slotLang.vue"
import slotLocation from "../../components/slot/slotLocation.vue"
import { INDEX_TYPE, SLOT_LANG, WEATHER_LIFE_INDEX } from "../../store/type.mjs"

export default {
  name: "WeatherLifeIndex",
  components: { slotLocation, slotLang },
  setup() {
    const store = useStore ()
    const defaultIndexType = reactive ({ value: '0' })
    const indexTypeList = reactive ([
                                      {
                                        value: 'index_type',
                                        text: '单选或Ctrl键+鼠标点击进行多选',
                                        disabled: 'disabled',
                                      },
                                      {
                                        type: '0',
                                        text: '全部生活指数',
                                        autofocus: 'autofocus',
                                        selected: 'selected',
                                      },
                                      {
                                        type: '1',
                                        text: '运动指数',
                                      },
                                      {
                                        type: '2',
                                        text: '洗车指数',
                                      },
                                      {
                                        type: '3',
                                        text: '穿衣指数',
                                      },
                                      {
                                        type: '4',
                                        text: '钓鱼指数',
                                      },
                                      {
                                        type: '5',
                                        text: '紫外线指数',
                                      },
                                      {
                                        type: '6',
                                        text: '旅游指数',
                                      },
                                      {
                                        type: '7',
                                        text: '花粉过敏指数',
                                      },
                                      {
                                        type: '8',
                                        text: '舒适度指数',
                                      },
                                      {
                                        type: '9',
                                        text: '感冒指数',
                                      },
                                      {
                                        type: '10',
                                        text: '空气污染扩散条件指数',
                                      },
                                      {
                                        type: '11',
                                        text: '空调开启指数',
                                      },
                                      {
                                        type: '12',
                                        text: '太阳镜指数',
                                      },
                                      {
                                        type: '13',
                                        text: '化妆指数',
                                      },
                                      {
                                        type: '14',
                                        text: '晾晒指数',
                                      },
                                      {
                                        type: '15',
                                        text: '交通指数',
                                      },
                                      {
                                        type: '16',
                                        text: '防晒指数',
                                      }])
    const indexTypeListStyle = reactive ({
                                           top: '5vh',
                                           width: '30vw',
                                           height: '40vh',
                                           color: '#66c18c',
                                         })

    const getIndexType = ( e ) => {
      console.table (e.target.value)
      // console.table (defaultIndexType.value)
      store.commit (
          {
            type: INDEX_TYPE,
            value: defaultIndexType,
          },
      )
    }
    const getIndexLang = e => {
      store.commit (
          {
            type: SLOT_LANG,
            value: e.target.value,
          },
      )
    }

    const getWeatherLifeIndex = () => {
      store.dispatch (
          {
            type: WEATHER_LIFE_INDEX,
          },
      )
    }
    return {
      defaultIndexType,
      indexTypeList,
      ...toRefs (indexTypeListStyle),
      getIndexType,
      getIndexLang,
      getWeatherLifeIndex,
      weatherLifeIndexData: computed (() => store.state.c.life.data),
    }
  },
}
</script>

<style lang="sass" scoped>
.weather-index-top
  margin-top: 10px

.weather-index
  margin-top: v-bind(top)

  form
    select
      width: v-bind(width)
      height: v-bind(height)
      color: v-bind(color)

.weather-index-show
  @extend .weather-index-top
  display: grid
  grid-template-columns: repeat(2, 1fr)
  grid-template-rows: repeat(1, 1fr)

  table td,
  table th
    text-align: center
    min-height: 30px

  tbody tr,
  tfoot tr
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column

  table
    $dw: 50vw
    $dh: 20vh
    $theadH: 5vh
    $tbodyH: 15vh
    $tfootH: 10vh

    display: grid
    grid-template-columns: repeat(1, 1fr)
    grid-template-rows: repeat(2, 1fr)
    width: $dw
    height: $dh

    thead
      width: $dw
      height: $theadH
      background-color: #e9ecef

      tr
        th
          width: $dw
          height: $theadH

    tbody
      width: $dw
      height: $tbodyH

      tr
        td
          width: $dw
          height: ($tbodyH / 5)
          line-height: ($tbodyH / 5)
          overflow-x: hidden
          text-overflow: ellipsis
          white-space: nowrap

          &:nth-child(odd)
            background-color: #cad3c3

          &:nth-child(even)
            background-color: #e2e7bf

    tfoot
      width: $dw
      height: $tfootH

      tr
        td
          width: $dw
          height: $tfootH

      small
        background-color: #ccc
</style>
