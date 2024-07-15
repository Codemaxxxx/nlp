const axios = require("axios");
const meaningCloud = "https://api.meaningcloud.com/sentiment-2.1";

const analyse = async (url, key) => {
    // the URL=`${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`

    const analysis = await axios.get(`${meaningCloud}?key=${key}&url=${url}&lang=en`)
    .then(response => {
        const { code } = response.data.status
        console.log(code);
    });

    console.log(analysis);
    //console.log("I am getting the information you need")
    //console.log(`url: ${url}, key: ${key}`)
};

module.exports = { analyse }