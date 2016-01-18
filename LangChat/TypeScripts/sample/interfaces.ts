//インライン定義？
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

var myObj = { size: 10, label: "this is test" };
printLabel(myObj);

interface LabelledValue {
    label: string;
}

function printLabel2(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
    printLabel(labelledObj);
}



//オプショナルプロパティ
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number }{
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

//ファンクションタイプ
interface SearchFunc {
    (source: string, subString: string): boolean;
}

var mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    var result = source.search(subString);
    return result != -1;
}

var mySearch2: SearchFunc =
    function (src: string, sub: string) {
        return src.search(sub) != -1;
    }

//Arrayタイプ
interface StringArray {
    [index: number]: string;
}

var myArray: StringArray;
myArray = ["Bob", "Fred"];
myArray[0] = "hello";

interface Dictionary {
    [index: string]: string;
    length: string;
    //length: number; //エラー　インデクサーのタイプじゃない
}

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}