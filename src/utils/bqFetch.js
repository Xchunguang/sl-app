/**
 * Created by admin on 2017/8/9.
 */
function headers(options) {
    options = options || {}
    options.headers = options.headers || {}
    options.headers['X-Requested-With'] = 'XMLHttpRequest'
    //自定义header
    if (options.header) {
        Object.assign(options.headers, options.header)
    }
    return options
}

function credentials(options) {
    if (options == null) {
        options = {}
    }
    if (options.credentials == null) {
        options.credentials = 'include'
    }
    return options
}


const bqFetch = function (url, options) {
    options = headers(credentials(options))
    return fetch(url, options)
}
bqFetch.prototype.isAuth = true;

export default bqFetch