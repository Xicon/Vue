<template>
  <slot name="slot-type">
    <section class="type">
      <label for="type">选择景点类型</label>
      <select id="type" name="slot_type"
              @change="typeChangVal($event)"
              @keyup.enter="typeChangVal($event)"
      >
        <option
            v-for="type in typeList"
            :disabled="type.disabled"
            :value="type.value"
            v-text="type.text"
        />
      </select>
    </section>
  </slot>
</template>

<script>
import { SLOT_TYPE } from "@/store/type.mjs"
import { ref } from "vue"
import { useStore } from "vuex"

export default {
  name: "slotType",
  setup() {
    const store = useStore ()
    const defaultType = ref ('scenic')
    const typeList = [
      {
        id: 'type_hint',
        value: 'type_hint',
        text: '请选择景点类型',
        disabled: 'disabled',
      },
      {
        id: 'type_scenic',
        value: 'scenic',
        text: '景点',
      },
      {
        id: 'type_CSTA',
        value: 'CSTA',
        text: '潮流站点',
      },
      {
        id: 'type_TSTA',
        value: 'TSTA',
        text: '潮汐站点',
      },
    ]
    const typeChangVal = e => {
      store.commit (
          {
            type: SLOT_TYPE,
            value: e.target.value,
          },
      )
    }
    return {
      defaultType,
      typeList,
      typeChangVal,
    }
  },
}
</script>

<style scoped>

</style>
