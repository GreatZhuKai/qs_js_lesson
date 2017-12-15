// 小吃店 pizza
// 常量 es6 先考虑const let(安全) var(基本不用)
//const 限制类型不能变，除了基本类型外，值是可变的
//constant variable. 变了会报错
// const name = '朱凯';
// name = 'ZK';
const featured = ['Deep Dish','Pepperoni','Hawaiian'];
featured.push('芝士');
// console.log(featured);
// featured = {'haha':'123'}
const specialty = ['Meatzza','Spicy Mama','Marghrite'];
//... 展开一个数组
const pizzas = [...featured,'veg',...specialty]
// console.log(pizzas);
const fridypizzas = [...pizzas];
console.log(fridypizzas);