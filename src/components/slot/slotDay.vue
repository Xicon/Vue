<template>
  <slot>
    <section class="slot-day">
      <label for="slot-day-select">未来天数预报</label>
      <select id="slot-day-select" v-model="select_day"
              name="slot-day-select"
              @change="dayHandleVal($event)"
              @keyup.enter="dayHandleVal($event)"
      >
        <option
            v-for="day in selectDay"
            :key="day.id"
            :disabled="day.disabled"
            :value="day.value"
            v-text="day.text"
        />
      </select>
    </section>
  </slot>
</template>

<script>
import { ref } from "vue"
import { useStore } from "vuex"
import { SLOT_DAY } from "../../store/type.mjs"

export default {
  name: "slotDay",
  setup() {
    const store = useStore ()
    const select_day = ref ('url_3day')

    const selectDay = [
      {
        id: 'selectDay_hint',
        value: 'hint',
        text: '请选择未来天数预报',
        disabled: "disabled",
      }, {
        id: 'url_3day',
        value: 'url_3day',
        text: '3天',
      }, {
        id: 'url_7day',
        value: 'url_7day',
        text: '7天',
      },
    ]

    const dayHandleVal = () => {
      store.commit (
          {
            type: SLOT_DAY,
            value: select_day.value,
          },
      )
    }

    return {
      select_day,
      selectDay,
      dayHandleVal,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
