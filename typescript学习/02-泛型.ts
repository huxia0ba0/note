// "类型变量"和"泛型"
// 变量的概念我们都知道, 可以表示任意数据, 类型变量也一样, 可以表示任意类型:
// 泛型 =>  用动态的类型(类型变量)描述函数和类的方式.

// 在函数名后面用"<>"声明一个类型变量
function convert<T>(input:T):T{
  return input;
}

// convert中参数我们标记为类型T, 返回值也标记为T,
//  从而表示了: 函数的输入和输出的类型一致. 
//  这样使用了"类型变量"的函数叫做泛型函数


// 泛型类 

class Person<U> {
  who: U;
  
  constructor(who: U) {
      this.who = who;
  }

  say(code:U): string {
      return this.who + ' :i am ' + code;
  }
}
// 在类名后面通过"<>"声明一个类型变量U, 类的方法和属性都可以用这个U, 接下来我们使用下泛型类:
// U的类型必须一致
let a = new Person<string>('abc');
a.say('hellow');



// 我们可以用类型变量去描述一个类型(类型范围), 
// ts的数组类型Array本身就是一个泛型类型, 
// 他需要传递具体的类型才能变的精准:

let arr1 : Array<number>;
arr = [1, 2, 3];

let arr2 : Array<number | string>;
arr2 = [1, 2, 3, 'aca', 2];



// 定义泛型类型
interface Convert {
  <T>(input:T):T
}

function convertb<T>(input:T):T{
  return input;
}

let convert2:Convert = convertb;



// 泛型接口

interface Goods<T>{
  id:number;
  title: string;
  size: T;
}
let apple:Goods<string> = {id:1,title: '苹果', size: 'large'};
let shoes:Goods<number> = {id:1,title: '苹果', size: 43};

// 扩展类型变量(泛型约束)
// function echo<T>(input: T): T {
//   console.log(input.name); // 报错, T上不确定是否由name属性
//   return input;
// }

//  T可以代表任意类型, 但对应的都是基础类型,
//  所以当我们操作input.name的时候就需要标记input上有name属性, 
//  这样就相当于我们缩小了类型变量的范围, 对泛型进行了约束:

// 现在T是个有name属性的类型
function echo<T extends {name:string}>(input: T): T {
  console.log(input.name); // 正确
  return input;
}

