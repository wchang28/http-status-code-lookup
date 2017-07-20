"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var lookupMapping = {};
exports.lookupMapping = lookupMapping;
for (var code in http.STATUS_CODES) {
    var status_1 = http.STATUS_CODES[code];
    var cd = parseInt(code);
    lookupMapping[status_1.toLowerCase().replace(/ /gi, '-')] = cd;
}
function lookup(status, defaultCode) {
    if (defaultCode === void 0) { defaultCode = 400; }
    status = status.toLowerCase().replace(/ /gi, '-');
    var code = lookupMapping[status];
    return (code ? code : defaultCode);
}
exports.lookup = lookup;
