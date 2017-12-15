// const name = 'Snickers';
// const age = 2;
// const dog = `My dog is ${name},
//   ${age} years old.
//   she is marride,and I still single`;
//   console.log(dog)


// const beer = {
//     name: 'Belgian Wit',
//     brewery:'Steam Whistle Brewery',
//     keywords:['pale','cloudy','spiced','crisp']
// };
// function renderKeywords(keywords) {
//     return `
//       <ul>
//        ${keywords.map(keyword => `<li>${keyword}</li>`).join()}
//       </ul>
//     `
// }
// //字符串模板
// const marKup = `
//   <div class="beer">
//     <h2>${beer.name}</h2>
//     <p class="brewery">${beer.brewery}</p>
//     ${renderKeywords(beer.keywords)}
//   </div>
// `;
// //可申明的HTML标记 运行JS
// document.body.innerHTML = marKup;

const dogs = [
    {name:'小白',age:2},
    {name:'小黑',age:3},
    {name:'曽阳',age:1},
];
// map 函数，属于dogs 数组
//iterator
document.body.innerHTML = dogs.map( dog => 
`
   <li>${dog.name} is ${dog.age} years old</li>
`
).join('');
