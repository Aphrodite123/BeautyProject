export const httpMethod = {
    GET: 'GET',
    POST: 'POST'
}

export async function request(api) {
    let url = api.host;
    if (api.path) {
        url += api.path;
    }
    let urlParams = {};
    let bodyParams = [];
    let res = { method: api.method };

    switch (api.method) {
        case httpMethod.GET:
            urlParams = api.params;
            break;
        case httpMethod.POST:
            break;
        default:
            break;
    }

    let paramsList = [];
    if (urlParams) {
        Object.keys(urlParams)
            .forEach(key => paramsList
                .push(key + '/' + urlParams[key]));
        url += '/' + paramsList.join('/')
    }

    console.warn(url);
    let response = await fetch(url, res);
    return parseResponse(response, api.ignoreParse);
}

/**
 * 解析返回的数据
 * @param {*} response 
 * @param {*} ignoreParse 
 */
async function parseResponse(response, ignoreParse = false) {
    if (response.ok && 200 === response.status) {
        let json = await response.json();
        let code = parseInt(json.code);
        let msg = json.msg;
        let data = json.data;
        if (ignoreParse) {
            return {
                code: code,
                msg: msg,
                data: data
            }
        } else {
            return data;
        }
    }

}