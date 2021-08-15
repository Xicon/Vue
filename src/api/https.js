import { request } from '@/network/request'
import b from '@/store/modules/cityWeather.mjs'
import d from '@/store/modules/disasterWarn.mjs'
import a from '@/store/modules/geolocation.mjs'
import c from '@/store/modules/weatherIndex.mjs'
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

export const getLocationID = ( { state: { publicState }, commit }, { value: { value } } ) => {
	request (
			{
				baseURL: a.state.baseURL,
				url: a.state.cityInfo.url,
				params: {
					location: value,
					key: publicState.key,
					number: 1,
				},
			},
	)
	.then (res => {
		commit (SLOT_LOCATION_ID, {
			locationID: res.location[0].id,
			COORDINATE: `${ res.location[0].lat },${ res.location[0].lon }`,
		})
	})
	.catch (err => {
		console.error (err)
	})
}

export const getCityInfo = ( { state: { publicState }, commit } ) => {
	request ({
		         baseURL: a.state.baseURL,
		         url: a.state.cityInfo.url,
		         params: {
			         location: publicState.location,
			         key: publicState.key,
			         adm: publicState.adm,
			         range: publicState.range,
			         number: publicState.number,
			         lang: publicState.lang,
		         },
	         }).then (res => {
		// console.table ({ res })
		console.log (res)
		commit (LOCATION_CITY_INFO, res)
	}).catch (err => {
		return Promise.reject (err)
	})
}

export const getHotCity = ( { state: { publicState }, commit } ) => {
	request ({
		         baseURL: a.state.baseURL,
		         url: a.state.hotCity.url,
		         params: {
			         key: publicState.key,
			         range: publicState.range,
			         number: publicState.number,
			         lang: publicState.lang,
		         },
	         }).then (res => {
		console.table (res.topCityList)
		commit (LOCATION_HOT_CITY, res.topCityList)
	}).catch (err => {
		return Promise.reject (err)
	})
}

export const getPOIInfo = ( { state: { publicState }, commit } ) => {
	request ({
		         baseURL: a.state.baseURL,
		         url: a.state.poiInfo.url,
		         params: {
			         location: publicState.location,
			         type: publicState.type,
			         key: publicState.key,
			         city: publicState.city,
			         number: publicState.number,
			         lang: publicState.lang,
		         },
	         }).then (res => {
		console.table (res)
		commit (LOCATION_POI_INFO)
	}).catch (err => {
		return Promise.reject (err)
	})
}

export const getPOIScope = ( { state: { publicState }, commit } ) => {
	request ({
		         baseURL: a.state.baseURL,
		         url: a.state.cityInfo.url,
		         params: {
			         location: publicState.location,
			         key: publicState.key,
			         adm: publicState.adm,
			         range: publicState.range,
			         number: publicState.number,
			         lang: publicState.lang,
		         },
	         }).then (res => {

		publicState.lat = res.location[0].lat
		publicState.lon = res.location[0].lon
		publicState.COORDINATE = `${ res.location[0].lat },${ res.location[0].lon }`
		return publicState.locationID
	}).then (() => {
		request (
				{
					baseURL: a.state.baseURL,
					url: a.state.poiScope.url,
					params: {
						// location: publicState.COORDINATE, //经纬度
						location: "116.41,39.92", //经纬度
						type: publicState.type,
						key: publicState.key,
						radius: publicState.radius,
						number: publicState.number,
						lang: publicState.lang,
					},
				})
		.then (res => {
			console.log ('https' + res)
			console.log (res)
			commit (LOCATION_POI_SCOPE)
		})
	}).catch (err => {
		console.error (err)
	})
}

export const getWeatherNow = ( { state: { publicState }, commit } ) => {
	request (
			{
				baseURL: b.state.baseURL,
				url: b.state.now.url,
				params: {
					location: publicState.location,
					key: publicState.key,
					lang: publicState.lang,
					unit: publicState.unit,
				},
			})
	.then (res => {
		console.table (res)
		commit (CITY_WEATHER_NOW)
	})
	.catch (err => {
		console.error (err)
	})
}

export const getWeatherDay = ( { state: { publicState }, commit } ) => {
	request ({
		         baseURL: b.state.baseURL,
		         url: b.state.day.url_3day === publicState.day
				         ? b.state.day.url_3day  //3天天气预报
				         : b.state.day.url_7day, //7天天气预报
		         params: {
			         location: publicState.locationID,
			         key: publicState.key,
			         lang: publicState.lang,
			         unit: publicState.unit,
		         },
	         })
	.then (res => {
		commit (CITY_WEATHER_DAY, res)
	})
	.catch (err => {
		console.error (err)
	})
}

export const getWeatherHour = ( { state: { publicState }, commit } ) => {
	request (
			{
				baseURL: b.state.baseURL,
				url: b.state.hour.url,
				params: {
					key: publicState.key,
					location: publicState.locationID,
					lang: publicState.lang,
					unit: publicState.unit,
				},
			},
	)
	.then (res => {
		commit (CITY_WEATHER_HOUR, res.hourly)
	})
	.catch (err => {
		console.error (err)
	})
}

export const getWeatherLifeIndex = ( { state: { publicState }, commit } ) => {
	request (
			{
				baseURL: c.state.baseURL,
				url: c.state.life.url,
				params: {
					key: publicState.key,
					location: publicState.locationID,
					type: publicState.indexType,
					lang: publicState.lang,
				},
			},
	)
	.then (res => {
		console.table (res)
		commit (WEATHER_LIFE_INDEX, res)
	})
	.catch (err => {
		console.error (err)
	})
}

export const getWeatherDisasterWarn = ( { state: { publicState }, commit } ) => {
	request (
			{
				baseURL: d.state.baseURL,
				url: d.state.now.url,
				params: {
					key: publicState.key,
					location: publicState.locationID,
					lang: publicState.lang,
				},
			},
	)
	.then (res => {
		commit (DISASTER_WARN_WEATHER, res)
	})
	.catch (err => {
		console.error (err)
	})
}

export const getWeatherWarnList = ( { state: { publicState }, commit } ) => {
	request (
			{
				baseURL: d.state.baseURL,
				url: d.state.list.url,
				params: {
					key: publicState.key,
					range: 'cn',
				},

			},
	).then (res => {
		console.log (res)
		commit (DISASTER_WARN_CITY_LIST, res)
	}).catch (err => {
		console.error (err)
	})
}
