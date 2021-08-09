<template>

  <div class="poi-type">
    <slot-type/>
  </div>

  <div class="poi-city">
    <slot-city/>
  </div>

  <div class="poi-info">
    <div class="poi-number">
      <slot-number/>
    </div>

    <div class="poi-lang">
      <slot-lang/>
    </div>
  </div>
</template>

<script>
import slotNumber from '@/components/slot/slotNumber'
import slotLang from '@/components/slot/slotLang'
import slotType from '@/components/slot/slotType'
import slotCity from '@/components/slot/slotCity'

export default {
  name: "POIInfo",
  components: {
    slotNumber,
    slotLang,
    slotType,
    slotCity
  }
}
</script>

<style scoped>

</style>