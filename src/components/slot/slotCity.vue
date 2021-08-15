<template>
  <slot name="slot-city">
    <section class="city">
      <label></label>
      <input list="slot-city" type="search" name="city" placeholder="输入或选择提供的城市"
             v-model="cityActive"
             @change="cityChangVal($event)"
             @keyup.enter="cityChangVal($event)"
      />

      <datalist id="slot-city">
        <option
            v-for="city in cityList"
            v-text="city.text"
            :value="city.text"
            :disabled="city.disabled"
            :key="city.id"
        />
      </datalist>
    </section>
  </slot>
</template>

<script>
import { SLOT_CITY } from "@/store/type.mjs"
import { useStore } from "vuex"

export default {
  name: "slotCity",
  setup() {
    const store = useStore ()
    const cityActive = '澳门'
    const cityList = [
      {
        id: 'city_hint',
        value: 'city_hint',
        text: '选择城市',
        disabled: 'disabled',
      }, {
        id: 1,
        value: 'beijing',
        text: '北京',
      }, {
        id: 2,
        value: 'shanghai',
        text: '上海',
      }, {
        id: 3,
        value: 'guangdong',
        text: '广东',
      }, {
        id: 4,
        value: 'shenzhen',
        text: '深圳',
      }, {
        id: 5,
        value: 'amen',
        text: '澳门',
      }]

    const cityChangVal = e => {
      store.commit (
          {
            type: SLOT_CITY,
            value: e.target.value,
          },
      )
    }

    return {
      cityActive,
      cityList,
      cityChangVal,
    }
  },
}
</script>

<style scoped>

</style>
