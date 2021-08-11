<template>
  <slot name="slot-city">
    <section class="city">
      <label></label>
      <input list="slot-city" type="search" name="city" placeholder="输入或选择提供的城市"
             v-model="cityActive"
             @change="cityChangVal($event)"
      />

      <datalist id="slot-city">
        <option disabled value="">请选择</option>
        <option
            v-for="city in cityList"
            v-text="city.text"
            :value="city.text"
            :key="city.id"
        />
      </datalist>

    </section>
  </slot>
</template>

<script>
import {SLOT_CITY} from "@/store/type.mjs";

export default {
  name: "slotCity",
  data() {
    return {
      cityActive: '澳门',
      cityList: [{
        id: 1,
        value: 'beijing',
        text: '北京',
      }, {
        id: 2,
        value: 'shanghai',
        text: '上海'
      }, {
        id: 3,
        value: 'guangdong',
        text: '广东'
      }, {
        id: 4,
        value: 'shenzhen',
        text: '深圳'
      }, {
        id: 5,
        value: 'aomen',
        text: '澳门'
      }]
    }
  },

  methods: {
    cityChangVal(e) {
      return this.$store.commit({
        type: SLOT_CITY,
        value: e.target.value
      })
    },

  }
}
</script>

<style scoped>

</style>