//  ts可以自动类型推断
let n = 1; // ts会自动推断出n是number类型
n+=3 // 不报错,因为已知类型

let ary = []; // 类型为: any[]
ary.push(1, '2', {a: '3'});

let array = [1]; // 内部要有数字, 才能推断出正确类型
arr.push(2);


// 自动阅读if条件判断
let numb: number | null = 0.5 > Math.random() ? 1 : null;
if(null !== numb){
  numb+=3 // ts知道现在n不是null是number
}


// typeof
let numb1 :number|string = 0.5 < Math.random()? 1:'1';

// 如果没有typeof, n*=2会报错, 提示没法推断出当前是number类型, 不能进行乘法运算
if('number' === typeof numb1) {
   numb1*= 2;
} else  {
   numb1= '2';
}

// instanceof

let obj1 = 0.5 < Math.random() ? new String(1) : new Array(1);
if(obj1 instanceof String){
    // obj推断为String类型
    obj1+= '123'
} else {
    // obj为any[]类型
    obj1.push(123);
}


// 类型断言(你告诉ts是什么类型, 他都信)
// 有些情况下系统没办法自动推断出正确的类型, 
// 就需要我们标记下, 断言有2种语法, 
// 一种是通过"<>", 
// 一种通过"as", 举例说明:

let obj3 = 0.5 < Math.random() ? 1 : [1]; // number|number[]
// 断言, 告诉ts, obj为数组
(<number[]>obj3).push(1);
//等价
(obj3 as number[]).push(1);
