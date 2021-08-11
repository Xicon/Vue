import {
    LOCATION_CITY_LOCATION,
    LOCATION_CITY_INFO,
    SLOT_ADM,
    SLOT_RANGE,
    SLOT_LANG,
    SLOT_NUMBER,
    LOCATION_HOT_CITY,
    SLOT_TYPE,
    SLOT_CITY,
    LOCATION_POI_INFO,
    SLOT_RADIUS
} from "@/store/type.mjs";

const mutations = {
    [LOCATION_CITY_LOCATION]: (state, {value}) => state.publicState.location = value,
    [SLOT_ADM]: (state, {value}) => state.publicState.adm = value,
    [SLOT_RANGE]: (state, {value}) => state.publicState.range = value,
    [SLOT_NUMBER]: (state, {value}) => state.publicState.number = value,
    [SLOT_LANG]: (state, {value}) => state.publicState.lang = value,
    [LOCATION_CITY_INFO]: (state, value) => state.a.cityInfo.data = value,
    [LOCATION_HOT_CITY]: (state, value) => state.a.hotCity.data = value,
    [SLOT_TYPE]: (state, {value}) => state.publicState.type = value,
    [SLOT_CITY]: (state, {value}) => state.publicState.city = value,
    [SLOT_RADIUS]: (state, {value}) => state.publicState.radius = value,
    [LOCATION_POI_INFO]: (state, value) => state.a.poiInfo.data = value,
}
export default mutations