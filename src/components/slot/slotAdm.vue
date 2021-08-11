<template>
  <slot name="slot-adm">
    <section class="slot-adm">
      <label for="cityInfo-adm">行政区域规划</label>
      <input type="search" name="geolocation-cityInfo-adm" id="cityInfo-adm"
             @change="slotAdm($event)"
      />
    </section>
  </slot>
</template>

<script>
import {SLOT_ADM} from "@/store/type.mjs";

export default {
  name: "Adm",
  methods: {
    slotAdm(e) {
      return this.$store.commit({type: SLOT_ADM, value: e.target.value})
    },
  }
}
</script>

<style scoped>

</style>