<template>
  <slot name="slot-date">
    <section class="slot-date">
      <label for="slot-date">输入日期，例:（20210814）</label>
      <input id="slot-date" name="" type="search"
             @change="getDateVal($event)"
      />
      <label for="slot-date-select">或：选择日期</label>

      <input id="slot-date-select" v-model="defaultDate" name="slot-date-select"
             type="date"
             @change="getDateVal($event)"
      />
      {{ defaultDate }}
      {{ toggleDate }}
    </section>
  </slot>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"
import { SLOT_DATE } from "../../store/type.mjs"

export default {
  name: "slotDate",
  setup() {
    const defaultDate = new Date ().toLocaleDateString ('zh-mo')
    console.log (defaultDate)
    const toggleDate = computed (() => {
      if ( defaultDate < 10 ) {
        return `0${ defaultDate }`
      }
      else {
        return defaultDate
      }
    })
    console.log (toggleDate)

    const store = useStore ()
    const getDateVal = e => {
      console.log (e.target.value)
      store.commit (SLOT_DATE, {
        value: e.target.value,
      })
    }
    return {
      defaultDate,
      toggleDate,
      getDateVal,

    }
  },
}
</script>

<style lang="scss" scoped>

</style>
