<template>
  <slot name="slot-range">
    <section class="slot-range">
      <label for="range">搜索范围，输入<a href="https://www.iso.org/obp/ui/#search">ISO 3166</a>国家代码查询</label>
      <input list="range" type="search" name="range"
             @change="rangeChangVal($event)"
             v-model="defaultRange"
             @keyup.enter="rangeChangVal($event)"
      />

      <datalist id="range">
        <option
            v-for="range in rangeList"
            :key="range.id"
            :disabled="range.disabled"
            :value="range"
            v-text="range.text"
        />
      </datalist>
    </section>
  </slot>
</template>

<script>
import { SLOT_RANGE } from "@/store/type.mjs"
import { useStore } from "vuex"

export default {
  name: "Range",
  setup() {
    const store = useStore ()
    const defaultRange = 'world'
    const rangeList = [
      {
        id: 'range_world',
        value: 'world',
        text: '全球',
        disabled: 'disabled',
      },
      {
        id: 'range_cn',
        value: 'cn',
        text: '中国',
      },
      {
        id: 'range_us',
        value: 'us',
        text: '美国',
      },
      {
        id: 'range_fr',
        value: 'fr',
        text: '法国',
      },
      {
        id: 'range_uk',
        value: 'uk',
        text: '英国',
      },
      {
        id: 'range_ru',
        value: 'ru',
        text: '俄罗斯',
      },
    ]
    const rangeChangVal = e => {
      store.commit (
          {
            type: SLOT_RANGE,
            value: e.target.value,
          },
      )
    }
    return {
      defaultRange,
      rangeList,
      rangeChangVal,
    }
  },
}
</script>

<style scoped>

</style>
