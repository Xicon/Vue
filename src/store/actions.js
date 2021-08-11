import {LOCATION_CITY_INFO, LOCATION_HOT_CITY, LOCATION_POI_INFO, LOCATION_POI_SCOPE} from "@/store/type.mjs";
import {getCityInfo, getHotCity, getPOIInfo,getPOIScope} from "@/api/https";

const actions = {
    [LOCATION_CITY_INFO]: getCityInfo,
    [LOCATION_HOT_CITY]: getHotCity,
    [LOCATION_POI_INFO]: getPOIInfo,
    [LOCATION_POI_SCOPE]: getPOIScope,
}

export default actions