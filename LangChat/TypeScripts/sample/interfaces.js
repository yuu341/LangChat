//インライン定義？
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "this is test" };
printLabel(myObj);
function printLabel2(labelledObj) {
    console.log(labelledObj.label);
    printLabel(labelledObj);
}
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result != -1;
};
var mySearch2 = function (src, sub) {
    return src.search(sub) != -1;
};
var myArray;
myArray = ["Bob", "Fred"];
myArray[0] = "hello";
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
})();
//# sourceMappingURL=interfaces.js.map