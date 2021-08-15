// 城市天气 主入口
import CityWeather from '@/views/cityWeather/CityWeather'
import WeatherDay from '@/views/cityWeather/WeatherDay.vue' // 逐天天气预报api
import WeatherHour from '@/views/cityWeather/WeatherHour.vue' // 逐小时天气预报api
// 城市天气  子列表
import WeatherNow from '@/views/cityWeather/WeatherNow.vue' // 实时天气api
// 灾害预警 主入口
import DisasterWarn from '@/views/disasterWarn/DisasterWarn'
// 灾害预警 子列表
import WeatherDisasterWarn from '@/views/disasterWarn/WeatherDisasterWarn' //天气灾害预警api
import WeatherWarnCityList from '@/views/disasterWarn/WeatherWarnCityList' // 天气预警城市列表api
// 地理位置 子列表
import CityInfo from "@/views/geolocation/CityInfo" //城市信息搜索api
//地理位置 主入口
import Geolocation from '@/views/geolocation/Geolocation'
import HotCity from "@/views/geolocation/HotCity" //热门城市查询api
import POIInfo from "@/views/geolocation/POIInfo" // POI信息查询
import POIScope from "@/views/geolocation/POIScope" // POI范围查询
//历史数据 子列表
import HistoricalAir from '@/views/historicalData/HistoricalAir' // 历史空气质量api
//历史数据 主入口
import HistoricalData from '@/views/historicalData/HistoricalData'
import HistoricalWeather from '@/views/historicalData/HistoricalWeather' //历史天气数据
// 天气指数 主入口
import WeatherIndex from '@/views/weatherIndex/WeatherIndex'
// 天气指数 子列表
import WeatherLifeIndex from "@/views/weatherIndex/WeatherLifeIndex" //天气生活指数api
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		alias: '/home',
	},
	{
		path: '/geolocation',
		name: '地理位置api',
		redirect: { name: '城市信息' },
		children: [
			{
				path: 'info',
				name: '城市信息',
				component: CityInfo,
			}, {
				path: 'city',
				name: '热门城市',
				component: HotCity,
			}, {
				path: 'poiInfo',
				name: 'POI信息搜索',
				component: POIInfo,
			}, {
				path: 'poiScope',
				name: 'POI范围搜索',
				component: POIScope,
			},
		],
		component: Geolocation,
	},
	{
		path: '/cityWeather',
		name: '城市天气api',
		redirect: { name: '实时天气api' },
		children: [
			{
				path: 'now',
				name: '实时天气api',
				component: WeatherNow,
			},
			{
				path: 'day',
				name: '逐天天气预报api',
				component: WeatherDay,
			},
			{
				path: 'hour',
				name: '逐小时天气预报api',
				component: WeatherHour,
			},
		],
		component: CityWeather,
	},
	{
		path: '/weatherIndex',
		name: '天气指数api',
		redirect: { name: '天气生活指数' },
		children: [
			{
				path: 'life',
				name: '天气生活指数',
				component: WeatherLifeIndex,
			},
		],
		component: WeatherIndex,
	},
	{
		path: '/disasterWarn',
		name: '灾害预警api',
		redirect: { name: '天气灾害预警' },
		children: [
			{
				path: 'weather',
				name: '天气灾害预警',
				component: WeatherDisasterWarn,
			},
			{
				path: 'cityList',
				name: '天气预警城市列表',
				component: WeatherWarnCityList,
			}],
		component: DisasterWarn,
	},
	{
		path: '/historicalData',
		name: '历史数据API',
		redirect: { name: '历史空气质量api' },
		children: [
			{
				path: 'air',
				name: '历史空气质量api',
				component: HistoricalAir,
			},
			{
				path: 'weather',
				name: '历史天气数据api',
				component: HistoricalWeather,
			},
		],
		component: HistoricalData,
	},
]

const router = createRouter ({
	                             history: createWebHistory (),
	                             linkExactActiveClass: 'active',
	                             linkActiveClass: 'all_active',
	                             routes,
                             })

export default router
