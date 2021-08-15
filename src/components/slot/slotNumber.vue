<template>
  <slot name="slot-number">
    <section class="slot-number">
      <label for="slot-number">输入搜索的数量</label>
      <input type="tel" name="slot-number" id="slot-number"
             @change="slotNumber($event)"
             v-model="defaultNumber.value"
             @keyup.enter="slotNumber($event)"
      />
    </section>
  </slot>
</template>

<script>
import { SLOT_NUMBER } from "@/store/type.mjs"
import { reactive } from "vue"
import { useStore } from "vuex"

export default {
  name: "Number",
  setup() {
    const defaultNumber = reactive ({ value: '10' })
    const store = useStore ()
    const slotNumber = e => {
      store.commit (
          {
            type: SLOT_NUMBER,
            value: e.target.value,
          },
      )
    }
    return {
      defaultNumber,
      slotNumber,
    }
  },
}
</script>

<style scoped>

</style>
