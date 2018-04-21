import yaml from 'js-yaml';
import fs1 from 'fs';

export function getUrlPath(fileName, encode = 'utf8') {
  try {
    const doc = yaml.safeLoad(fs1.readFileSync(fileName, encode));

    return Object.values(doc)[0];
  } catch (e) {
    console.log(e);
  }
}
