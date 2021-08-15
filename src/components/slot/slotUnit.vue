<template>
  <slot name="slot-unit">
    <section class="slot-unit">
      <label for="slot-unit">unit?</label>
      <select id="slot-unit" v-model="unit_hint.value"
              name="slot-unit"
              @change="unitHandleVal($event)"
              @keyup.enter="unitHandleVal($event)"
      >
        <option
            v-for="unit in units"
            :key="unit.id"
            :disabled="unit.disabled"
            :value="unit.value"
            v-text="unit.text"
        />

      </select>

      <h3> unit_hint：{{ unit_hint }}</h3>
    </section>
  </slot>
</template>

<script>
import { reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { SLOT_UNIT } from "../../store/type.mjs"

export default {
  name: "slotUnit",
  setup() {
    const store = useStore ()
    const unit_hint = reactive ({ value: 'm' })
    const { value } = toRefs (unit_hint)
    const units = [
      {
        id: 'units-hint',
        value: 'units-hint',
        text: 'select unit',
        disabled: 'disabled',
      },
      {
        id: 'units-m',
        value: 'm',
        text: ' metric unit',
      }, {
        id: 'units-i',
        value: 'i',
        text: 'imperial unit',
      }]
    const unitHandleVal = () => store.commit (SLOT_UNIT, value)
    return {
      unit_hint,
      units,
      unitHandleVal,
    }
  },
}
</script>

<style scoped>

</style>
