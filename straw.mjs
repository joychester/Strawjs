import axios from 'axios';
import {loadYAML} from './modules/loadYaml.mjs'

const httpclient = axios.create({
  baseURL: 'http://localhost:4567',
  headers: {'content-type': 'application/json', 'user-agent': 'axios-node' }
});

async function fetchData(path) {
  try {
    const resp = await httpclient.get(path);
    return resp;
  } catch(err) {
    console.error(err);
  }
}

// load from YML file defined by domain teams
let config_file = process.argv.splice(2)[0].trim();
let subscribed_path = loadYAML(config_file);

// return [fetchData('/path/1'), fetchData('/path/2'), fetchData('/path/3')]
let req_func_list = subscribed_path.map( path => {
  let url = Object.values(path)[0];
  return fetchData(url);
});


axios.all(req_func_list)
     .then(axios.spread((...theResps) => {

       // Both requests are now complete
       theResps.map( resp => console.log(resp.data));

       //Sink json response to Kafaka Topic
     }));
