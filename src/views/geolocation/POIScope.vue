<template>
  <div class="geolocation-poi-scope">
    <div class="poi-scope-cite">
      <cite>POI范围搜索</cite>
    </div>

    <div class="poi-scope-location">
      <label for="scope-location">输入城市/地区</label>
      <input type="search" name="poi-scope" id="scope-location"
             @change="poiScopeLocation($event)"
      />
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
import {LOCATION_CITY_LOCATION, LOCATION_POI_SCOPE} from "@/store/type.mjs";
import slotType from '@/components/slot/slotType';
import slotRadius from '@/components/slot/slotRadius';
import slotNumber from '@/components/slot/slotNumber';
import slotLang from '@/components/slot/slotLang';

export default {
  name: "POIScope.vue",
  methods: {
    poiScopeLocation(e) {
      return this.$store.commit({
        type: LOCATION_CITY_LOCATION,
        value: e.target.value
      })
    },
    poiScope() {
      return this.$store.dispatch({
        type: LOCATION_POI_SCOPE
      })
    }
  },
  components: {
    slotType,
    slotRadius,
    slotNumber,
    slotLang
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