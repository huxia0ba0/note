var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var marride = true;
var firestString = '1';
var age = 1;
var arr = [1, 2, 3];
var abc = null;
// 布尔
var isFlag = false;
//数字
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// 字符串
var str1 = '123';
var numStr = 12;
var str2 = "\u6211\u662F\u6570\u5B57" + numStr; // 模板字符串
// any
// any代表任意类型
var awsy = [];
// 数组
var num1 = [1, 2, 3];
var num = [1, 2, 3, '1'];
var num2 = [1, 2, 3, 4];
// 元组
// 元组类型表示一个已知元素数量和类型的数组, 数量和类型要相等
var list1 = [1, '23'];
var list2 = [true, 1, '23'];
// 枚举
// 枚举是ts中有而js中没有的类型, 编译后会被转化成对象, 
// 枚举默认是从0开始，Color { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
var ccolor;
(function (ccolor) {
    ccolor[ccolor["red"] = 0] = "red";
    ccolor[ccolor["green"] = 1] = "green";
    ccolor[ccolor["blue"] = 2] = "blue";
})(ccolor || (ccolor = {}));
var c1 = ccolor.green; // 1
var c2 = ccolor['0']; // red
console.log(c2, 'c2');
var yesterday;
(function (yesterday) {
    yesterday[yesterday["hour"] = 1] = "hour";
    yesterday[yesterday["time"] = 3] = "time";
    yesterday[yesterday["uo"] = 4] = "uo";
})(yesterday || (yesterday = {}));
;
var yes1 = yesterday.hour;
var yes2 = yesterday['0'];
console.log(yes1, yes2);
// void
// void 表示不是任何类型一般出现在函数中, 用来标记函数没有返回值
// 可以是null 和 undefined
function getName(name) {
    console.log(name);
}
var n1 = null;
var n2 = undefined;
// null 和 undefined
var n23 = null;
var n24 = undefined;
// never
// 总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
    }
}
// object
// object表示非原始类型, 也就是除number/ string/ boolean/ symbol/ null/ undefined之外的类型
var o1 = [];
var o2 = { a: 1, b: 2 };
var obj = {
    title: 1,
    age: 1,
    type: '11'
};
var myArt = {
    title: 'str',
    count: 123,
    content: '21'
};
// 声明函数遵循接口定义
var core = function (a, b) {
    return [a, b];
};
;
;
var obja = { a: 1 };
var objb = { b: '1' };
var objeAB = __assign(__assign({}, obja), objb);
// 联合类型(|)
// 联合类型也是将多个类型合并为一个类型, 表示"或"的关系,用|连接多个类型:
var ace1 = "1";
var ace2 = 1;
