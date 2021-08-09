import {createStore} from 'vuex'
import getters from "@/store/getters";
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import a from '@/store/modules/geolocation.mjs'
import b from '@/store/modules/cityWeather.mjs'
import c from '@/store/modules/weatherIndex.mjs'
import d from '@/store/modules/disasterWarn.mjs'
import e from '@/store/modules/historicalData.mjs'

const state = {
    publicState: {
        location: '',
        key: '7bae28cc0bd946f39c1875c3f8874ae4',
        adm: '',
        range: 'world',
        number: 1,
        lang: 'zh',
        type: '', //poiInfo/poiRange
        city: '', //poiInfo/poiRange
    },
    home: {
        location: '', //搜索的地区名称
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
    }
}

export default createStore({
    state,
    getters,
    mutations,
    actions,
    modules: {
        a,
        b,
        c,
        d,
        e
    },
})
