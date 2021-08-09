import {HOME_INFO, LOCATION_CITY_INFO, LOCATION_HOT_CITY} from "@/store/type.mjs"
import a from '@/store/modules/geolocation.mjs'
import {request} from '@/network/request'

// export const getHomeInfo = ({state: {publicState}, commit}) => {
//     request({
//         baseURL: a.state.baseURL,
//         url: a.state.cityInfo.url,
//         params: {
//             key: publicState.key,
//             location: '广西'
//         }
//     }).then(res => {
//         console.log(res)
//         commit(HOME_INFO, res)
//     }).catch(err => {
//         return Promise.reject(err)
//     })
// }

export const getCityInfo = ({state: {publicState}, commit}) => {
    request({
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
    }).then(res => {
        console.log(res.location)
        commit(LOCATION_CITY_INFO, res.location)
    }).catch(err => {
        return Promise.reject(err)
    })
}

export const getHotCity = ({state: {publicState}, commit}) => {
    request({
        baseURL: a.state.baseURL,
        url: a.state.hotCity.url,
        params: {
            key: publicState.key,
            range: publicState.range,
            number: publicState.number,
            lang: publicState.lang,
        },
    }).then(res => {
        console.log(res.topCityList)
        commit(LOCATION_HOT_CITY, res.topCityList)
    }).catch(err => {
        return Promise.reject(err)
    })
}