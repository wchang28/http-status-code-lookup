import * as http from "http";

let lookupMapping : {[status: string]: number} = {};

for (let code in http.STATUS_CODES) {
    let status = http.STATUS_CODES[code];
    let cd = parseInt(code);
    lookupMapping[status.toLowerCase().replace(/ /gi, '-')] = cd;
}

export function lookup(status: string, defaultCode: number = 400) : number {
    status = status.toLowerCase().replace(/ /gi, '-');
    let code = lookupMapping[status];
    return (code ? code : defaultCode);
}

export {lookupMapping};