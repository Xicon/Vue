'use strict'

const geolocation = {
	state: {
		baseURL: 'https://geoapi.qweather.com/v2',
		cityInfo: {
			url: 'city/lookup',
			params: {
				adm: '',
				range: 'world',
				number: '10',
				lang: 'zh',
			},
			data: {
				// name: String,
				// id: String,
				// lat: String,
				// lon: String,
				// adm1: String,
				// adm2: String,
				// counter: String,
				// tz: String,
				// utcOffset: Date,
				// type: String,
				// rank: Number,
			},
		},
		hotCity: {
			url: 'city/top',
			data: {},
		},
		poiInfo: {
			url: 'poi/lookup',
			params: {},
			data: {},
		},
		poiScope: {
			url: 'poi/range',
			params: {},
			data: {},
		},

	},
	getters: {},
	mutations: {},
	actions: {},
}
export default geolocation
