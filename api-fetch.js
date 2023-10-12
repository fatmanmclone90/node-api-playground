import fetch from 'node-fetch';
import { Build } from './ObjectFactory.js';
import 'dotenv/config'

const numberOfItems = 10;

let body = Build(numberOfItems)
console.log("Request Body " + JSON.stringify(body));

const response = await fetch(process.env.url, {
    method: 'POST', body: body, headers: {
        'x-test-context': process.env.x_test_context,
        'x-testing-id': process.env.x_testing_id,
        'api-key': process.env.api_key,
        'Content-Type': 'application/json'
    }
});

const status = await response.status;
console.log("Response Code:" + status);

