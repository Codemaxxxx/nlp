const axios = require("axios");
const meaningCloud = "https://api.meaningcloud.com/sentiment-2.1";

const analyse = async (url, key) => {
    // the URL=`${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`

    const analysis = await axios.get(`${meaningCloud}?key=${key}&url=${url}&lang=en`)
    .then(response => {
        const { code } = response.data.status
        const { msg } = response.data.status
        if (code == 100) {
            return handleError(code, "Please enter a valid URL")
        }
        else if (code == 212) {
            return handleError(code, msg)
        }

        return handleValid(response.data, code)
    });


    return analysis
    //console.log(analysis);
    //console.log("I am getting the information you need")
    //console.log(`url: ${url}, key: ${key}`)
};

const handleError = (code, msg) => {
    const error = {
        code,
        msg
    }
    return error
}

const handleValid = (data, code) => {
    const { agreement, subjectivity, confidence, score_tag, irony }  = data
    const sample = {
        agreement, 
        subjectivity, 
        confidence, 
        score_tag, 
        irony 
    }

    const result = {
        sample,
        code
    }

    return result
}

module.exports = { analyse }