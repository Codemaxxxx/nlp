const validUrl = require('valid-url');
const isValidUrl = (url) => Boolean(validUrl.isWebUri(`${url}`));

const myValidURL = (url) => {
    //console.log(isValidUrl(url))
    return isValidUrl(url)
}


export { myValidURL }