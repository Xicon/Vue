import {
	getCityInfo,
	getHotCity,
	getLocationID,
	getPOIInfo,
	getPOIScope,
	getWeatherDay,
	getWeatherDisasterWarn,
	getWeatherHour,
	getWeatherLifeIndex,
	getWeatherNow,
	getWeatherWarnList,
} from "@/api/https"
import {
	CITY_WEATHER_DAY,
	CITY_WEATHER_HOUR,
	CITY_WEATHER_NOW,
	DISASTER_WARN_CITY_LIST,
	DISASTER_WARN_WEATHER,
	LOCATION_CITY_INFO,
	LOCATION_HOT_CITY,
	LOCATION_POI_INFO,
	LOCATION_POI_SCOPE,
	SLOT_LOCATION_ID,
	WEATHER_LIFE_INDEX,
} from "@/store/type.mjs"

const actions = {
	[SLOT_LOCATION_ID]: getLocationID,

	//geoLocation ajax请求
	[LOCATION_CITY_INFO]: getCityInfo,
	[LOCATION_HOT_CITY]: getHotCity,
	[LOCATION_POI_INFO]: getPOIInfo,
	[LOCATION_POI_SCOPE]: getPOIScope,

	//cityWeather ajax请求
	[CITY_WEATHER_NOW]: getWeatherNow,
	[CITY_WEATHER_DAY]: getWeatherDay,
	[CITY_WEATHER_HOUR]: getWeatherHour,

	//weatherLifeIndex 天气生活指数 ajax请求
	[WEATHER_LIFE_INDEX]: getWeatherLifeIndex,

	// disasterWarn ajax请求
	[DISASTER_WARN_WEATHER]: getWeatherDisasterWarn,
	[DISASTER_WARN_CITY_LIST]: getWeatherWarnList,
}

export default actions
