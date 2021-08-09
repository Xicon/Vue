<template>
  <slot name="slot-number">
    <section class="slot-number">
      <label for="slot-number">输入搜索的数量</label>
      <input type="tel" name="slot-number" id="slot-number"
             @change="number($event)"
      />
    </section>

  </slot>
</template>

<script>
import {SLOT_NUMBER} from "@/store/type.mjs";

export default {
  name: "Number",
  methods: {
    number(e) {
      return this.$store.commit({
        type: SLOT_NUMBER,
        value: e.target.value
      })
    }
  }
}
</script>

<style scoped>

</style>