'use strict'

/*
 * 以 SLOT * 开头的常量类型为公共组件类型 可复用的插槽
 * 以 LOCATION * 开头的常量属于geolocation 地理位置API组件
 * 以 CITY * 开头的常量属于cityWeather 城市天气API组件
 * 以 WEATHER 开头的常量属于 weatherIndex 天气指数API组件
 * 以 DISASTER 开头的常量属于disasterWarn 灾害预警预警API组件
 * 以 HISTORICAL 开头的常量属于historicalData 历史数据API组件
 */

import {
	CITY_WEATHER_DAY,
	CITY_WEATHER_HOUR,
	CITY_WEATHER_NOW,
	DISASTER_WARN_CITY_LIST,
	DISASTER_WARN_WEATHER,
	INDEX_TYPE,
	LOCATION_CITY_INFO,
	LOCATION_HOT_CITY,
	LOCATION_POI_INFO,
	SLOT_ADM,
	SLOT_CITY,
	SLOT_DATE,
	SLOT_DAY,
	SLOT_LANG,
	SLOT_LOCATION,
	SLOT_LOCATION_ID,
	SLOT_NUMBER,
	SLOT_RADIUS,
	SLOT_RANGE,
	SLOT_TYPE,
	SLOT_UNIT,
	WEATHER_LIFE_INDEX,
} from "@/store/type.mjs"

const mutations = {

	//运行cityInfo的ajaj请求 得到地区id与经纬度 将地区id与经纬度返回到此 并 提交到vuex公共变量中
	[SLOT_LOCATION_ID]: ( state, payload ) => {
		state.publicState.locationID = payload.locationID
		state.publicState.COORDINATE = payload.COORDINATE
	},

	//slot 提交更新到公共变量publicState的 state中
	[SLOT_LOCATION]: ( state, { value } ) => state.publicState.location = value,
	[SLOT_ADM]: ( state, { value } ) => state.publicState.adm = value,
	[SLOT_RANGE]: ( state, { value } ) => state.publicState.range = value,
	[SLOT_NUMBER]: ( state, { value } ) => state.publicState.number = value,
	[SLOT_LANG]: ( state, { value } ) => state.publicState.lang = value,
	[SLOT_TYPE]: ( state, { value } ) => state.publicState.type = value,
	[SLOT_CITY]: ( state, { value } ) => state.publicState.city = value,
	[SLOT_RADIUS]: ( state, { value } ) => state.publicState.radius = value,
	[SLOT_DAY]: ( state, { value } ) => state.publicState.day = value,
	[SLOT_UNIT]: ( state, value ) => state.publicState.unit = value,
	[SLOT_DATE]: ( state, { value } ) => state.publicState.date = value,

	// geoLocation ajax请求 将请求到的data保存到对应模块的data中
	[LOCATION_HOT_CITY]: ( state, value ) => state.a.hotCity.data = value,
	[LOCATION_POI_INFO]: ( state, value ) => state.a.poiInfo.data = value,
	[LOCATION_CITY_INFO]: ( state, value ) => state.a.cityInfo.data = value,

	//cityWeather ajax请求 将请求到的data保存到对应模块的data中
	[CITY_WEATHER_NOW]: ( state, value ) => state.b.now.data = value,
	[CITY_WEATHER_DAY]: ( state, { value } ) => state.b.day.data = value,
	[CITY_WEATHER_HOUR]: ( state, { value } ) => state.b.hour.data = value,

	//weatherLifeIndex 根据用户的选择进行对应的url
	[INDEX_TYPE]: ( state, { value: { value } } ) => {
		const val = value.filter (el => el)
		val.indexOf ('0', 0) !== -1
				? state.publicState.indexType = '0'
				: state.publicState.indexType = val.toString ()
	},

	//weatherLifeIndex ajax请求 将请求到的data保存到对应模块的data中
	[WEATHER_LIFE_INDEX]: ( state, value ) => state.c.life.data = value,

	// disasterWarn ajax请求
	[DISASTER_WARN_WEATHER]: ( state, value ) => {
		console.log (value)
		value.warning === ''
				? state.d.now.data = '查询的地区当前没有灾害预警信息'
				: state.d.now.data = value
	},

	[DISASTER_WARN_CITY_LIST]: ( state, value ) => {
		// console.log (value)
		state.d.list.data.warningLocList = value.warningLocList
		state.d.list.data.updateTime = value.updateTime

	},
}
export default mutations
