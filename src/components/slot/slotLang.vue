<template>
  <slot name="slot-lang">
    <section class="slot-lang">
      <label for="lang">语言选择，输入<a href="https://www.iso.org/obp/ui/#search">ISO 3166</a>代码查询 或选择</label>
      <input v-model="defaultLang" list="lang" name="lang"
             type="text"
             @change="langChangVal($event)"
             @focus="clearText($event)"
             @keyup.enter="langChangVal($event)"
      />

      <datalist id="lang">
        <option
            v-for="lang in langList"
            :key="lang.id"
            :disabled="lang.disabled"
            :value="lang.value"
            v-text="lang.text"
        />
      </datalist>
    </section>
  </slot>
</template>

<script>
import { SLOT_LANG } from "@/store/type.mjs"
import { ref } from "vue"
import { useStore } from "vuex"

export default {
  name: "Lang",
  setup() {
    const store = useStore ()
    const defaultLang = ref ('zh')
    const langList = [
      {
        id: 'lang_hint',
        value: 'disabled',
        text: '请选择语言',
        disabled: 'disabled',
      }, {
        id: 'lang_cn',
        value: 'cn',
        text: '中文',
      },
      {
        id: 'lang_en',
        value: 'en',
        text: '英语',
      },
      {
        id: 'lang_fr',
        value: 'fr',
        text: '法语',
      },
      {
        id: 'lang_es',
        value: 'es',
        text: '西班牙语',
      },
      {
        id: 'lang_ja',
        value: 'ja',
        text: '日语',
      },
      {
        id: 'lang_ko',
        value: 'ko',
        text: '韩语',
      },
    ]
    const clearText = e => {
      e.target.value = ''
    }
    const langChangVal = e => {
      store.commit (
          {
            type: SLOT_LANG,
            value: e.target.value,
          },
      )
    }
    return {
      defaultLang,
      langList,
      clearText,
      langChangVal,
    }
  },
}
</script>

<style scoped>

</style>
