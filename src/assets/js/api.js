const axios = require('axios');

export const newsData = {
    ac: 'wap',
    count: 20,
    format: 'json_raw',
    as: 'A125A8CEDCF8987',
    cp: '58EC18F948F79E1',
    min_behot_time: parseInt(new Date().getTime() / 1000)
};

export const getNews = function(params) {
    const url = '/api/getNews';
    const data = Object.assign({}, params, {
        ac: 'wap',
        count: 20,
        format: 'json_raw',
        as: 'A125A8CEDCF8987',
        cp: '58EC18F948F79E1',
        min_behot_time: parseInt(new Date().getTime() / 1000)
    })
    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res, data)
    })
}
