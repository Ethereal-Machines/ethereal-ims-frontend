/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import axios from '../axios/axios';

const refreshToken = (callback, data, token) => {
    axios.post('/user/refresh/token', data, {headers:{"x-auth": token}})
        .then((res) => {
            callback(res)
        }).catch((err) => callback(err));
}

export default refreshToken