import axios from "axios";
import { myValidURL } from "./checkURL";

const input = document.getElementById('URI');
const form = document.getElementById('form-id');
const responseError = document.getElementById('error');

const agreement = document.getElementById("agreement");
    const subjectitvity = document.getElementById("subjectivity");
    const confidence = document.getElementById("confidence");
    const irony = document.getElementById("irony");
    const score_tag = document.getElementById("score_tag");
    const heading = document.querySelector('#analysis h2');
    const analysis = document.querySelectorAll('#analysis');



    document.addEventListener("DOMContentLoaded", event => {
        event.preventDefault();
        responseError.style.display = "none";
        heading.style.display = "none";
    })

const formHandler = async (event) => {
    event.preventDefault();
    if (!myValidURL(input.value)) {
        show_error("Please enter a valid URL")
        return;
    }
        const {data} = await axios.post('http://localhost:8000/', form, {
            headers: {
            'Content-Type': 'application/json'
         }
     })

    //console.log(data);

    const {msg, sample} = data
    if(msg) {
        show_error(msg)
        return;
    }
    show_results(sample)
}

const show_error = (msg) => {
    responseError.style.display = "block";
    analysis.forEach(analysis => {
        analysis.style.display = "none";
        heading.style.display = "none";
    });
    responseError.innerHTML = msg
}

const show_results = (sample) => {
    responseError.style.display = "none";
    analysis.forEach(analysis => {
        analysis.style.display = "block"
        heading.style.display = "block";
    });

    agreement.innerHTML = `Agreement: ${sample.agreement}`;
    subjectitvity.innerHTML = `Subjectivity: ${sample.subjectivity}`;
    confidence.innerHTML = `Confidence: ${sample.confidence}`;
    irony.innerHTML = `Irony: ${sample.irony}`;
    score_tag.innerHTML = `Score Tag: ${sample.score_tag}`;
}


export { formHandler }