"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Drection;
(function (Drection) {
    Drection[Drection["Up"] = 0] = "Up";
    Drection[Drection["Down"] = 1] = "Down";
    Drection[Drection["Right"] = 2] = "Right";
    Drection[Drection["Left"] = 3] = "Left";
})(Drection || (Drection = {}));
function keyPress(keyword) {
    if (keyword === Drection.Up) {
        console.log(Drection);
    }
    return 0;
}
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Created"] = 201] = "Created";
    StatusCode[StatusCode["Error"] = 500] = "Error";
})(StatusCode || (StatusCode = {}));
;
function getRequest(statusCode) {
    console.log(StatusCode);
    return statusCode;
}
;
var Some;
(function (Some) {
    Some[Some["Left"] = 1] = "Left";
    Some[Some["Right"] = 2] = "Right";
    Some[Some["bottom"] = 3] = "bottom";
})(Some || (Some = {}));
var Some1;
(function (Some1) {
    Some1[Some1["Left"] = 10] = "Left";
    Some1[Some1["Right"] = 11] = "Right";
    Some1[Some1["bottom"] = 12] = "bottom";
})(Some1 || (Some1 = {}));
;
console.log(Some);
