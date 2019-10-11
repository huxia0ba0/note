// 类型别名(type)
type A1 = 'top'|'right'|'bottom'|'left'; // 表示值可能是其中的任意一个
type B1 = 1|2|3;
type C1 = '红'|'绿'|'黄';
type D1 = 150;

let ncm:A1 = 'top'; 

// 组合
interface A2{
  a:number;
}
type B = A2 | {b:string};
type C = A1 & {b:string};

// 与泛型组合
type D<T> = A2 | T[];



// 索引类型(keyof)
// js中的Object.keys取对象的键值, 
// ts中的keyof和他类似, 可以用来获取对象类型的键值:
type AA = keyof {a:1,b:'123'} // 'a'|'b'
type BB = keyof [1,2] // '0'|'1'|'push'... ,

// 可以获得键值, 也可以获取对象类型的值的类型:
type AAA = {a:1,b:'123'};
type CCC = AAA['a'] // 等于type C = 1;
// let c:CCC = 2 // 错误, 值只能是1



// 映射类型(Readonly, Pick, Record等...)