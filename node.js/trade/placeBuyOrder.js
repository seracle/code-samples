const axios = require('axios');

const options = {
    data: {
        currency_pair:'BTC_USDT',
        quantity:0.1,
        rate:42000
    },
    headers: {
        'S-API-KEY': 'bc8f08b0-bd56-4ff8-b27a-f8a8a2b3d375',
        'S-NONCE': 1628241037000,
        'S-RECV-WINDOW': 10000,
        'S-SIGNATURE': '4c4ce25b09e4fbbdde28d311e176447f65b4d1cdd2f4afdc49ddd2f188c993ff'
    },
    method: 'post',
    url: 'https://api.seracle.com/trade/limit/placeBuyOrder'
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
