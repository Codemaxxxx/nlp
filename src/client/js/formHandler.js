import axios from "axios";

const input = document.getElementById('URI');
const form = document.getElementById('form-id');
const formHandler = async (event) => {
    event.preventDefault()
    const {data} = await axios.post('http://localhost:8000/', form, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

    console.log(data.msg);
}


export { formHandler }