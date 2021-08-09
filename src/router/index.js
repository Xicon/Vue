import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Geolocation from '@/views/geolocation/Geolocation'
import CityWeather from '@/views/cityWeather/CityWeather'
import WeatherIndex from '@/views/weatherIndex/WeatherIndex'
import DisasterWarn from '@/views/disasterWarn/DisasterWarn'
import HistoricalData from '@/views/historicalData/HistoricalData'

const routes = [
    {
        path: '/',
        redirect: Home
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/geolocation',
        name: '地理位置api',
        component: Geolocation
    },
    {
        path: '/cityWeather',
        name: '城市天气api',
        component: CityWeather
    },
    {
        path: '/weatherIndex',
        name: '天气生活指数api',
        component: WeatherIndex
    },
    {

        path: '/disasterWarn',
        name: '灾害预警api',
        component: DisasterWarn
    },
    {
        path: '/historicalData',
        name: '历史数据api',
        component: HistoricalData
    },
]

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'ex_active',
    linkActiveClass: 'active',
    routes
})

export default router
