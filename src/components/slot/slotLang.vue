<template>
  <slot name="slot-lang">
    <section class="slot-lang">
      <label for="lang">语言选择，输入<a href="https://www.iso.org/obp/ui/#search">ISO 3166</a>代码查询</label>
      <input list="lang" type="search" name="lang"
             @change="langChangVal($event)"
      />

      <datalist id="lang">
        <option value="cn">中文</option>
        <option value="en">英语</option>
        <option value="fr">法语</option>
        <option value="es">西班牙语</option>
        <option value="ja">日语</option>
        <option value="ko">韩语</option>
      </datalist>
    </section>
  </slot>
</template>

<script>
import {SLOT_LANG} from "@/store/type.mjs";

export default {
  name: "Lang",
  methods: {
    langChangVal(e) {
      return this.$store.commit({
        type: SLOT_LANG,
        value: e.target.value
      })
    }
  }
}
</script>

<style scoped>

</style>