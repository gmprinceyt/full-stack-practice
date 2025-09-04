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
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Created"] = 201] = "Created";
    StatusCode[StatusCode["Error"] = 500] = "Error";
})(StatusCode || (StatusCode = {}));
function getRequest(statusCode) {
    console.log(StatusCode);
    return statusCode;
}
function firstElement(arr) {
    return arr[0];
}
;
const f = firstElement(["Prince", 1]);
function firstEl(arr) {
    return arr[0];
}
;
let name = firstEl(["Prince", "Hello"]);
name = name.toUpperCase();
console.log(name);
