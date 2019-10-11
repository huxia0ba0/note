let marride: boolean = true;
let firestString: string = '1';
let age: number = 1;
let arr: number[] = [1, 2, 3];
let abc: number | null | string = null;



// 布尔
let isFlag: boolean = false;

//数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 字符串
let str1:string = '123';
let numStr:number = 12;
let str2:string = `我是数字${numStr}`; // 模板字符串


// any
// any代表任意类型
let awsy: any = [];

// 数组
let num1: number[] = [1, 2, 3];
let num: (number | string)[] = [1, 2, 3, '1'];
let num2: Array<number> = [1, 2, 3, 4];

// 元组
// 元组类型表示一个已知元素数量和类型的数组, 数量和类型要相等
let list1: [number, string] = [1, '23'];
let list2: [boolean, number, string] = [true, 1, '23'];

// 枚举
// 枚举是ts中有而js中没有的类型, 编译后会被转化成对象, 
// 枚举默认是从0开始，Color { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
enum ccolor {red, green, blue}
let c1: ccolor = ccolor.green;  // 1
let c2: ccolor = ccolor['0'];  // red
console.log(c2, 'c2') 

// 非默认
enum yesterday {hour = 1, time = 3,  uo = 4};
let yes1:yesterday = yesterday.hour; // 1
let yes2:yesterday = yesterday['0']; //undefind

console.log(yes1, yes2)


// void
// void 表示不是任何类型一般出现在函数中, 用来标记函数没有返回值
  // 可以是null 和 undefined
function getName(name: string): void {
  console.log(name)
}
let n1: void = null;
let n2: void = undefined;


// null 和 undefined
const n23:null = null;
const n24:undefined = undefined;

// never
// 总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
  }
}

// object
// object表示非原始类型, 也就是除number/ string/ boolean/ symbol/ null/ undefined之外的类型
let o1:object = [];
let o2:object = {a:1,b:2};


// 接口
interface A {
  title: number,
  age: number,
  type: string
}

let obj: A = {
  title: 1,
  age: 1,
  type: '11'
}

// 非必填(?)
interface Article {
  title: string;
  count: number;
  content:string;
  fromSite?: string; // 非必填
}
let myArt:Article = {
  title: 'str',
  count: 123,
  content: '21'
}

// 用接口定义函数
interface Core {
  (n:number, s:string):[number,string]
}

// 声明函数遵循接口定义
const core:Core = (a,b)=>{
  return [a,b];
}

// 交叉类型(&)
// 交叉类型是将多个类型合并为一个类型, 表示"并且"的关系,用&连接多个类型, 常用于对象合并:
interface A2 {a:number};
interface B2 {b:string};
let obja:A2 = {a: 1};
let objb:B2 = {b: '1'};
let objeAB: A2&B2 = {...obja, ...objb};

// 联合类型(|)
// 联合类型也是将多个类型合并为一个类型, 表示"或"的关系,用|连接多个类型:
let ace1: string | number = "1";
let ace2: string | number = 1;


