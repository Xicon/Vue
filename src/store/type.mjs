export const
		HOME_INFO = 'HOME_INFO'

		, SLOT_LOCATION = 'SLOT_LOCATION' //公共可复用插槽组件 location公共变量 cityInfo/hotCity/weatherNow
		, SLOT_LOCATION_ID = 'SLOT_LOCATION_ID' //公共可复用插槽组件 location公共变量 cityInfo/hotCity/weatherNow
		, SLOT_ADM = 'SLOT_ADM'//公共可复用插槽组件 range公共变量 cityInfo/hotCity
		, SLOT_RANGE = 'SLOT_RANGE' //公共可复用插槽组件 range公共变量 cityInfo/hotCity
		, SLOT_NUMBER = 'SLOT_NUMBER' //公共可复用插槽组件 range公共变量 cityInfo/hotCity
		, SLOT_LANG = 'SLOT_LANG' //公共可复用插槽组件 range公共变量 cityInfo/hotCity
		, SLOT_TYPE = 'SLOT_TYPE'
		, SLOT_CITY = 'SLOT_CITY'
		, SLOT_RADIUS = 'SLOT_RADIUS'
		, SLOT_DAY = 'SLOT_DAY'
		, SLOT_UNIT = 'SLOT_UNIT'
		, SLOT_DATE = 'SLOT_DATE'


		//geoLocation 地理位置API
		, LOCATION_CITY_INFO = 'LOCATION_CITY_INFO' //城市信息查询组件 请求常量 cityInfo
		, LOCATION_HOT_CITY = 'LOCATION_HOT_CITY' // 热门城市搜索组件 请求常量 hotCity
		, LOCATION_POI_INFO = 'LOCATION_POI_INFO' //poi信息搜索 ajax请求
		, LOCATION_POI_SCOPE = 'LOCATION_POI_SCOPE' //poi范围搜索 ajax请求

		//cityWeather 城市天气API
		, CITY_WEATHER_NOW = 'CITY_WEATHER_NOW' //实时天气 ajax请求
		, CITY_WEATHER_DAY = 'CITY_WEATHER_DAY' // 逐天天气预报 ajax请求
		, CITY_WEATHER_HOUR = 'CITY_WEATHER_HOUR' // 逐天天气预报 ajax请求

		//weatherLifeIndex 天气生活指数API
		, INDEX_TYPE = 'INDEX_TYPE'//weatherLifeIndex
		, WEATHER_LIFE_INDEX = 'WEATHER_LIFE_INDEX' // 逐天天气预报 ajax请求

		// disasterWarn 灾害预警API
		, DISASTER_WARN_WEATHER = 'DISASTER_WARN_WEATHER'
		, DISASTER_WARN_CITY_LIST = 'DISASTER_WARN_CITY_LIST'
