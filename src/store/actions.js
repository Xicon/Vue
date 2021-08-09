import {HOME_INFO, LOCATION_CITY_INFO, LOCATION_HOT_CITY} from "@/store/type.mjs";
import {getCityInfo,getHotCity} from "@/api/https";

const actions = {
    // [HOME_INFO]: getHomeInfo,
    [LOCATION_CITY_INFO]:getCityInfo,
    [LOCATION_HOT_CITY]:getHotCity,
}

export default actions