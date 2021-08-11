<template>
  <slot name="slot-range">
    <section class="slot-range">
      <label for="range">搜索范围，输入<a href="https://www.iso.org/obp/ui/#search">ISO 3166</a>国家代码查询</label>
      <input list="range" type="search" name="range"
             @change="rangeChangVal($event)"
      />

      <datalist id="range">
        <option value="world">全球</option>
        <option value="cn">中国</option>
        <option value="us">美国</option>
        <option value="fr">法国</option>
        <option value="uk">英国</option>
        <option value="ru">俄罗斯</option>
      </datalist>
    </section>
  </slot>
</template>

<script>
import {SLOT_RANGE} from "@/store/type.mjs";

export default {
  name: "Range",
  methods: {
    rangeChangVal(e) {
      return this.$store.commit({
        type: SLOT_RANGE,
        value: e.target.value
      })
    }
  }
}
</script>

<style scoped>

</style>