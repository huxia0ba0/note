// d3.select('body')
//   .selectAll('p')
//   .text('123')
//   .style('color', 'red')


// datum， data 绑定数据
// var str = "China";

// d3.select('body')
//   .selectAll('p')
//   .datum(str)
//   .text((d, i) => {
//     return "第 "+ i + " 个元素绑定的数据是 " + d;
//   })


// var dataset = ["I like dogs","I like cats","I like snakes"];
// var body = d3.select("body");
// var p = body.selectAll("p");

// p.data(dataset)
//   .text(function(d, i){
//       return d;
//   });



// #id选择器
// .class选择器
// d3.select('body')
//   .select('p')
//   .style('color', 'red')

// d3.select('#pear')
//   .style('color', 'gold')


// append()：在选择集末尾插入元素
// insert()：在选择集前面插入元素
// remove()：删除选中元素


// d3.select('body')
//   .append('p')
//   .text('我是尾部添加')

// d3.select('body')
//   .insert('p', '#pear')
//   .text('我是头部添加')


// d3.select("#pear")
//   .remove()