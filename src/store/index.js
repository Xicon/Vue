'use strict'

import actions from '@/store/actions'
import getters from '@/store/getters'
import b from '@/store/modules/cityWeather.mjs'
import d from '@/store/modules/disasterWarn.mjs'
import a from '@/store/modules/geolocation.mjs'
import e from '@/store/modules/historicalData.mjs'
import c from '@/store/modules/weatherIndex.mjs'
import mutations from '@/store/mutations'
import { createStore } from 'vuex'

const state = {
	publicState: {
		location: '广西',
		locationID: '101300101',
		lat: '116.41', //经度
		lon: '39.92', //纬度
		COORDINATE: '116.41,39.92', // 经纬度
		key: '7bae28cc0bd946f39c1875c3f8874ae4',
		adm: '',
		range: 'world',
		number: 1,
		lang: 'zh',
		type: 'scenic', //poiInfo/poiRange
		city: '', //poiInfo/poiRange
		radius: 5, //poiInfo/poiRange
		day: 'url_7day', //weatherDay
		unit: 'm', //weatherDay
		indexType: '0', //weatherLifeIndex
		date: '20210814',
	},
	home: {
		location: '', //搜索的地区名称
		locationID: '', //搜索的地区id
		cityName: String, //城市名称
		timeupdate: '', //更新时间
		temperature: String,//温度
		warnMessage: String, //预警信息
		sevenDays: {},//7天温度 图表
		sevenWeather: {},//7天天气情况
		sevenWeatherIcon: {},//7天天气情况图标
		YesterdayWeather: {},//昨日天气
		weatherHour: {},// 逐小时天气预报
		air: {},//空气质量
		windAndTemperature: {},//风和温度
		FutureWeatherForecast: {},// 未来7-15天天气预报
		sunriseAndSunset: {},//日出日落 图表
		indexOfLiving: {}, //生活指数
	},
}

export default createStore (
		{
			state,
			getters,
			mutations,
			actions,
			modules: {
				a,
				b,
				c,
				d,
				e,
			},
		},
)

