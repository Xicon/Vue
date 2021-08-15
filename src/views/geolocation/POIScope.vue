<template>
  <div class="geolocation-poi-scope">
    <div class="poi-scope-cite">
      <cite>POI范围搜索</cite>
    </div>

    <div class="poi-scope-location">
      <slot-location/>
    </div>

    <div class="poi-scope-type">
      <slot-type/>
    </div>

    <div class="poi-scope-radius">
      <slot-radius/>
    </div>

    <div class="poi-scope-number">
      <slot-number/>
    </div>

    <div class="scope-lang">
      <slot-lang/>
    </div>

    <button type="submit" @click="poiScope()">submit</button>
  </div>
</template>

<script>
import slotLang from '@/components/slot/slotLang'
import slotLocation from '@/components/slot/slotLocation'
import slotNumber from '@/components/slot/slotNumber'
import slotRadius from '@/components/slot/slotRadius'
import slotType from '@/components/slot/slotType'
import { LOCATION_POI_SCOPE, SLOT_LOCATION } from "@/store/type.mjs"

export default {
  name: "POIScope.vue",
  methods: {
    poiScopeLocation( e ) {
      return this.$store.commit ({
                                   type: SLOT_LOCATION,
                                   value: e.target.value,
                                 })
    },
    poiScope() {
      return this.$store.dispatch ({
                                     type: LOCATION_POI_SCOPE,
                                   })
    },
  },
  components: {
    slotType,
    slotRadius,
    slotNumber,
    slotLang,
    slotLocation,
  }
}
</script>

<style lang="scss" scoped>
.geolocation-poi-scope {
  background-color: #12a182;

  .poi-scope-cite {
    cite {
      font-style: normal;
      font-size: large;
    }
  }
}

</style>
