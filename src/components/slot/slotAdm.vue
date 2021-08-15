<template>
  <slot name="slot-adm">
    <section class="slot-adm">
      <label for="cityInfo-adm">行政区域规划</label>
      <input type="search" name="geolocation-cityInfo-adm" id="cityInfo-adm"
             @change="slotAdm($event)"
             v-model="defaultAdm"
             placeholder="输入限定的行政区域"
             @focus="clearDefaultAdm($event)"
             @keyup.enter="slotAdm($event)"
      />
    </section>
  </slot>
</template>

<script>
import { SLOT_ADM } from "@/store/type.mjs"
import { ref } from "vue"
import { useStore } from "vuex"

export default {
  name: "Adm",
  setup() {
    const defaultAdm = ref ('不限制')
    const store = useStore ()
    const clearDefaultAdm = e => {
      e.target.value = ''
    }
    const slotAdm = e => {
      store.commit ({ type: SLOT_ADM, value: e.target.value })
    }
    return {
      defaultAdm,
      clearDefaultAdm,
      slotAdm,
    }
  },
}
</script>

<style scoped>

</style>
