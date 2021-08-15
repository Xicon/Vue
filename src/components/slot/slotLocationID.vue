<template>
  <slot name="slotLocationID">
    <section class="slot-location-id">
      <label for="slot-location-id">输入城市名称</label>
      <input v-model="locationID.value" name="slot-location-id"
             type="search"
             @change="getLocationID($event)"
             @keyup.enter="getLocationID($event)"
      />

      <datalist id="slot-location-id"

      >
        <option
            v-for="city in locationList"
            :key="city.id"
            :disabled="city.disabled"
            :value="city.value"
            v-text="city.text"
        />
      </datalist>
    </section>
  </slot>
</template>

<script>
import { reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { SLOT_LOCATION_ID } from "../../store/type.mjs"

export default {
  name: "slotLocationID",
  setup() {
    const locationID = reactive ({ value: '广西' })
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
    const store = useStore ()
    const getLocationID = () => {

      const { value } = toRefs (locationID)
      store.dispatch (
          {
            type: SLOT_LOCATION_ID,
            value: value,
          },
      )
    }
    return {
      locationID,
      locationList,
      getLocationID,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
