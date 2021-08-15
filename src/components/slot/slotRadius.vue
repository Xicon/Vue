<template>
  <!--  搜索范围 -->
  <slot name="slot-radius">
    <section class="slot-radius">
      <label for="slot-radius">搜索範圍，可設置搜索半徑：1-50KM</label>
      <input
          list="slot-radius-select"
          type="search"
          name="slot-radius-select"
          id="slot-radius"
          @change="radiusChangVal($event)"
          @keyup.enter="radiusChangVal($event)"
      />
      <datalist id="slot-radius-select">
        <option
            v-for="key in radius"
            v-text="key.text"
            :value="key.value"
            :key="key.id"
        />
      </datalist>
    </section>
  </slot>
</template>

<script>
import { SLOT_RADIUS } from "@/store/type.mjs"
import { useStore } from "vuex"

export default {
  name: "slotRadius",
  setup() {
    const store = useStore ()
    const radius = [
      {
        id: 'radius_hint',
        text: '选择范围',
        value: 'radius_hint',
        disabled: 'disabled',
      }, {
        id: 1,
        text: 1,
        value: 1,
      }, {
        id: 2,
        text: 5,
        value: 5,
      }, {
        id: 3,
        text: 10,
        value: 10,
      }, {
        id: 4,
        text: 20,
        value: 20,
      }, {
        id: 4,
        text: 25,
        value: 25,
      }, {
        id: 5,
        text: 30,
        value: 30,
      }, {
        id: 6,
        text: 35,
        value: 35,
      }, {
        id: 7,
        text: 40,
        value: 40,
      }, {
        id: 8,
        text: 45,
        value: 45,
      }, {
        id: 9,
        text: 50,
        value: 50,
      }]
    const radiusChangVal = e => {
      store.commit (
          {
            type: SLOT_RADIUS,
            value: e.target.value,
          },
      )
    }
    return {
      radius,
      radiusChangVal,
    }
  },
}
</script>

<style scoped>

</style>
