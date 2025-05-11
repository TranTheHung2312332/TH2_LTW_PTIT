/**
 * fetchModel - Fetch a model from the web server.
 *
 * @param {string} url      The URL to issue the GET request.
 *
 */
async function fetchModel(url, callback, option) {
    option = option || {}

    const response = await fetch(url, option)    

    const data = (await response.json())?.data
    
    if(response.status === 200){        
        callback && callback(data)
    }

    return data
}

export default fetchModel;
