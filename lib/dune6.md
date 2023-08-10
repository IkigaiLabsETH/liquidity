import { Headers } from 'node-fetch';
import fetch from 'node-fetch';

// Add the API key to an header object
const meta = {
    "x-dune-api-key": "YOUR_API_KEY"
};
const header = new Headers(meta);

export const queryID = 1299312

export const parameters = [
  ];

// Add parameters we would pass to the query
var params = { "query_parameters" : { "collectors": "2225509" }};
var params = { "query_parameters" : { "volume eth": "2225507" }};
var params = { "query_parameters" : { "sales usd": "2225508" }};
var body = JSON.stringify(params);

//  Call the Dune API
const response = fetch('https://api.dune.com/api/v1/query/{{queryID}}/execute', {
    method: 'POST',
    headers: header,
    body: body // This is where we pass the parameters
});
const response_object = await response.text();

//Log the returned response
console.log(response_object);
