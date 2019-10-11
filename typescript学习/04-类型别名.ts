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

// 射类型比较像修改类型的工具函数, 
// 比如Readonly可以把每个属性都变成只读:
type A12  = {a:number, b:string}
type A123 = Readonly<A12> // {readonly a: number;readonly b: string;}


// Partial<T>, 让属性都变成可选的(非必填)
type B12  = {a:number, b:string}
type B123 = Partial<B12> // { a?: number; b?: string;}

// Required<T>, 让属性都变成必选(必填))
type C12  = {a?:number, b?:string}
type C123 = Required<C12> // { a: number; b: string;}

// Pick<T,K>, 只保留自己选择的属性, K代表属性集合
type D12  = {a:number, b:string}
type D123 = Pick<D12, 'a'> //  {a:number}

// Omit<T,K> 实现排除已选的属性
type E12  = {a:number, b:string}
type E123 = Omit<A, 'a'> // {b:string}

// Record<T,K>, 创建一个类型,T代表键值的类型, k代表值的类型
type F1 = Record<string, number> // 等价{[k:string]:number}
let a123:F1 = {'acs' : 1};

// Exclude<T,U>, 过滤T中和U相同(或兼容)的类型
type G  = {a:number, b:string}
type G1 = Exclude<number|string, string|number[]> // number

// 兼容
type G2 = Exclude<number|string, any|number[]> // never , 因为any兼容number, 所以number被过滤掉

// Extract<T,U>, 提取T中和U相同(或兼容)的类型
type H  = {a:number, b:string}
type H1 = Extract<number|string, string|number[]> // string

// NonNullable, 剔除T中的undefined和null
type I1 = NonNullable<number|string|null|undefined> // number|string

// ReturnType, 获取T的返回值的类型
type J1= ReturnType<()=>number> // number

// InstanceType, 返回T的实例类型
// ts中类有2种类型, 静态部分的类型和实例的类型, 
// 所以T如果是构造函数类型, 那么InstanceType可以返回他的实例类型:
interface K{
  a:HTMLElement;
}

interface AConstructor{
  new():K;
}

function create (KClass:AConstructor):InstanceType<AConstructor>{
  return new KClass();
}

// Parameters 获取函数参数类型
// 返回类型为元祖, 元素顺序同参数顺序.
interface L{
  (a:number, b:string):string[];
}
type L1 = Parameters<L> // [number, string]

// ConstructorParameters 获取构造函数的参数类型
// 和Parameters类似, 只是T这里是构造函数类型.
interface MConstructor{
  new(a:number):string[];
}

type M1 = ConstructorParameters<MConstructor> // [number]



// extends(条件类型)
// T extends U ? X : Y
// 用来表示类型是不确定的, 如果U的类型可以表示T, 那么返回X, 否则Y. 举几个例子:
type N1 =  string extends '123' ? string :'123' // '123'
type N2 =  '123' extends string ? string :123 // string
// 明显string的范围更大, '123'可以被string表示, 反之不可.

// infer(类型推断)
// 利用infer来实现"删除元祖类型中第一个元素",
export type Tail<Tuple extends any[]> = ((...args: Tuple) => void) extends ((a: any, ...args: infer T) => void) ? T : never;