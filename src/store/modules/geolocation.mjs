const geolocation = {
    state: {
        baseURL: 'https://geoapi.qweather.com/v2',
        cityInfo: {
            url: 'city/lookup',
            params: {
                adm: '',
                range: 'world',
                number: '10',
                lang: 'zh'
            },
            data: {}
        },
        hotCity: {
            url: 'city/top?',
            data: {}
        },
        poiInfo: {},
        poiScope: {}

    },
    getters: {},
    mutations: {},
    actions: {}
}
export default geolocation