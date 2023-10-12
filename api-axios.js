import axios from 'axios';
import { Build } from './ObjectFactory.js';
import 'dotenv/config'

const numberOfItems = 5;

const config = {
    headers: {
        'x-test-context': process.env.x_test_context,
        'x-testing-id': process.env.x_testing_id,
        'api-key': process.env.api_key,
        'Content-Type': 'application/json'
    }
};

let body = Build(numberOfItems)

axios.interceptors.request.use(request => {
    console.log('Starting Request', JSON.stringify(request.data))
    return request
})

axios
    .post(
        process.env.url,
        body,
        config)
    .then(function (response) {
        console.log("Response Code: " + response.statusText);
    })
    .catch(function (error) {
        console.log(error);
    });