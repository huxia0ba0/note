// -------------------------------------------------------
// 如果你发现自己写的功能(函数/类/接口等...)越来越多,
// 你想对他们进行分组管理就可以用命名空间, 下面先用"类"举例:
namespace Tools {
  const TIMEOUT = 100;

  export class Ftp {
      constructor() {
          setTimeout(() => {
              console.log('Ftp');
          }, TIMEOUT)
      }
  }

  export class Http {
      constructor() {
          console.log('Http');
      }
  }

  export function parseURL(){
      console.log('parseURL');
  }
}
// Tools.TIMEOUT // 报错, Tools上没有这个属性
Tools.parseURL() // 'parseURL'


// 引入写好的命名空间
// 有2种方式, 一种/// <reference path="xxx.ts" />, 还有就是import:

// 1.0
// 通过reference进行导入相当于xxx.ts文件内的命名空间和当前文件进行了合并:

// xxx.ts
namespace Food {
  export interface Fruits{
      taste: string;
      hardness: number;
  }
}

// yyy.ts
// <reference path="xxx.ts" />

// let meat: Food.Meat;
// let fruits: Food.Fruits;



// 2.0
// 通过import导入
// 如果命名空间是用export导出的, 
// 那么使用的时候就不可以用 <reference/>了, 要用import导入:


// xxx.ts

// 使用export导出
export interface Fruits{
  taste: string;
  hardness: number;
}

export interface Meat{
  taste: string;
  heat: number;
}

// yyy.ts
// import {Food} from './xxx'; // 使用import导入
// let meat: Food.Meat;
// let fruits: Food.Fruits;


// -------------------------------------------------------

//最后得总结，es6得export就分出了模块，不建议用命名空间
