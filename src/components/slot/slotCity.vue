<template>
  <slot name="slot-city">
    <section class="city">
      <label></label>
      <input list="city" type="search" name="city" placeholder="输入或选择提供的城市"
             @change="cityChangVal($event)"
      />
      <details>
        <summary>选择POI所在城市，可设定只搜索在特定城市内的POI信息。城市名称可以是文字或城市的LocationID</summary>
        <select name="slot-city" id="city"
                v-model="cityActive"
        >
          <option disabled value="">请选择</option>
          <option
              v-for="city of cityList"
              v-text="city.text"
              :value="city.value"
              :key="city.id"
          />
        </select>
      </details>
    </section>
  </slot>
</template>

<script>
import {SLOT_CITY} from "@/store/type.mjs";

export default {
  name: "slotCity",
  data() {
    return {
      cityActive: 'C',
      cityList: [{
        id: 1,
        value: 'A',
        text: '北京',
      }, {
        id: 2,
        value: 'B',
        text: '上海'
      }, {
        id: 3,
        value: 'C',
        text: '广东'
      }, {
        id: 4,
        value: 'D',
        text: '深圳'
      }, {
        id: 5,
        value: 'E',
        text: '澳门'
      }]
    }
  },

  methods: {
    cityChangVal(e) {
      console.log(e.target.value)
      return this.$store.commit({
        type: SLOT_CITY,
        value: e.target.value
      })
    },
    citySelectVal(e) {
      console.log(e.target.value);
      // return this.$store.commit({
      //   type: SLOT_CITY,
      //   value:
      // })
    }
  }
}
</script>

<style scoped>

</style>