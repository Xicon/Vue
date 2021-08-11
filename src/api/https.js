import {HOME_INFO, LOCATION_CITY_INFO, LOCATION_HOT_CITY, LOCATION_POI_INFO} from "@/store/type.mjs"
import a from '@/store/modules/geolocation.mjs'
import {request} from '@/network/request'
import axios from "axios";

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

export const getPOIInfo = ({state: {publicState}, commit}) => {
    request({
        baseURL: a.state.baseURL,
        url: a.state.poiInfo.url,
        params: {
            location: publicState.location,
            type: publicState.type,
            key: publicState.key,
            city: publicState.city,
            number: publicState.number,
            lang: publicState.lang,
        }
    }).then(res => {
        console.log(res);
        commit(LOCATION_POI_INFO)
    }).catch(err => {
        return Promise.reject(err)
    })
}

export const getPOIScope = ({state: {publicState}, commit}) => {
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

        publicState.lat = res.location[0].lat
        publicState.lon = res.location[0].lon
        publicState.COORDINATE = `${res.location[0].lat},${res.location[0].lon}`
        return publicState.locationID
    }).then(res => {
        request({
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
            }
        }).then(res => {
            console.log('https'+res)
            console.log(res)
        })
    }).catch(err => {
        console.error(err)
    })
}