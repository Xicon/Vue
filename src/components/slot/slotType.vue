<template>
  <slot name="slot-type">
    <section class="type">
      <label></label>
      <input list="type" type="search" name="type" placeholder="POI类型，可选择搜索某一类型的POI"
             @change="typeChangVal($event)"
      />
      <datalist id="type">
        <option value="scenic">景点</option>
        <option value="CSTA">潮流站点</option>
        <option value="TSTA">潮汐站点</option>
      </datalist>
    </section>
  </slot>
</template>

<script>
import {SLOT_TYPE} from "@/store/type.mjs";

export default {
  name: "slotType",
  methods: {
    typeChangVal(e) {
      return this.$store.commit({
        type: SLOT_TYPE,
        value: e.target.value
      })
    }
  }
}
</script>

<style scoped>

</style>