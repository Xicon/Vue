<template>
  <div class="historical-air">
    <div class="historical-air-cite">
      <cite>历史空气质量</cite>
    </div>

    <div class="historical-air-location">
      <slot-location-id/>
    </div>

    <div class="historical-air-date">
      <slot-date/>
    </div>

    <div class="historical-air-lang">
      <slot-lang/>
    </div>
  </div>

</template>

<script>
import slotDate from '@/components/slot/slotDate.vue'
import slotLang from '@/components/slot/slotLang.vue'
import slotLocationId from '@/components/slot/slotLocationID.vue'

export default {
  name: "HistoricalAir",
  components: { slotLocationId, slotDate, slotLang },
}
</script>

<style scoped>

</style>
