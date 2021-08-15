<template>
  <section>
    <slot name="slot-location">
      <label for="slot-location">输入城市名称/城市ID</label>
      <input v-model="defaultLocation.value" list="slot-location" name="slot-location"
             type="text"
             @change="slotLocationVal($event)"
             @focus="clearText($event)"
             @keyup.enter="slotLocationVal($event)"
      />
    </slot>
    <datalist id="slot-location">
      <option
          v-for="loc in locationList"
          :key="loc.id"
          :disabled="loc.disabled"
          :value="loc.value"
          v-text="loc.text"
      />
    </datalist>
  </section>
</template>

<script>
import { SLOT_LOCATION } from "@/store/type.mjs"
import { reactive } from "vue"
import { useStore } from "vuex"

export default {
  name: "slotLocation",
  setup() {
    const store = useStore ()
    const defaultLocation = reactive ({ value: '广西' })
    const locationList = [
      {
        id: 'loc_bj',
        value: 'loc_hint',
        text: '选择一个城市',
        disabled: 'disabled',
      },
      {
        id: 'loc_bj',
        value: 'beijing',
        text: '北京',
      },
      {
        id: 'loc_sh',
        value: 'shanghai',
        text: '上海',
      },
      {
        id: 'loc_gd',
        value: 'guangdong',
        text: '广东',
      },
      {
        id: 'loc_ma',
        value: 'macau',
        text: '澳门',
      },
      {
        id: 'loc_tw',
        value: 'taiwan',
        text: '台湾',
      },
    ]
    const clearText = e => {
      e.target.value = ''
    }
    const slotLocationVal = () => {
      store.commit (
          {
            type: SLOT_LOCATION,
            value: defaultLocation.value,
          },
      )
    }
    return {
      defaultLocation,
      locationList,
      clearText,
      slotLocationVal,
    }
  },
}
</script>

<style scoped>

</style>
