import yaml from 'js-yaml';
import fs1 from 'fs';

export function loadYAML(fileName, encode = 'utf8') {
  try {
    const doc = yaml.safeLoad(fs1.readFileSync(fileName, encode));
    // console.log(doc['Domain_A']);
    // console.log(doc['Domain_A'][0]['Capacity_API_1']);

    return doc['Domain_A'];
  } catch (e) {
    console.log(e);
  }
}
