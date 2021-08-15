const cityWeather = {
	state: {
		baseURL: 'https://devapi.qweather.com/v7',
		now: {
			url: 'weather/now',
			params: {
				key: String,
				location: String,
				lang: 'zh',
				unit: '',//度量衡单位参数选择，例如温度选摄氏度或华氏度、公里或英里
				gzip: 'y',
			},
			data: {
				code: 'API状态码，具体含义请参考状态码',
				updateTime: '当前API的最近更新时间',
				fxLink: '当前数据的响应式页面，便于嵌入网站或应用',
				now: {
					obsTime: '数据观测时间',
					temp: '温度，默认单位：摄氏度',
					feelsLike: '体感温度，默认单位：摄氏度',
					icon: '天气状况和图标的代码，图标可通过天气状况和图标下载',
					text: '天气状况的文字描述，包括阴晴雨雪等天气状态的描述',
					wind360: '风向360角度',
					windDir: '风向',
					windScale: '风力等级',
					windSpeed: '风速，公里 / 小时',
					humidity: '相对湿度，百分比数值',
					precip: '当前小时累计降水量，默认单位：毫米',
					pressure: '大气压强，默认单位：百帕',
					vis: '能见度，默认单位：公里',
					cloud: '云量，百分比数值',
					dew: '露点温度',
				},
			},
		},
		day: {
			url_3day: 'weather/3d',
			url_7day: 'weather/7d',
			params: {
				key: String,
				location: String,
				lang: 'zh',
				unit: '',//度量衡单位参数选择，例如温度选摄氏度或华氏度、公里或英里
				gzip: 'y',
			},
			data: {},
		},
		hour: {
			url: 'weather/24h',
			params: {
				key: String,
				location: String,
				lang: 'zh',
				unit: 'm',//度量衡单位参数选择，例如温度选摄氏度或华氏度、公里或英里
			},
			data: {
				key: String,
				location: String,
				lang: 'zh',
				unit: '',//度量衡单位参数选择，例如温度选摄氏度或华氏度、公里或英里
			},
		},

	},
	getters: {}
	,
	mutations: {}
	,
	actions: {},
}

export default cityWeather
