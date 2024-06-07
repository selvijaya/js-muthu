//javascript array methods

// 1.Array.prototype.forEach

// const fruit=['apple','banana','mango','orange','kiwi']

// fruit.forEach((fruits)=>{
//     console.log(fruits.toUpperCase());
//     //console.log(fruits);
// })

// // 2.Array.prototype.map

// fruit.map((fruits)=>{
//     console.log('fruits map',fruits,fruits.toUpperCase());
// })
// //three line
// const modifirdfruit=fruit.map((fruits)=>{
//     console.log(fruits);
//     return fruits.toUpperCase()
// })

// console.log(modifirdfruit);

// // One line method

// const modifiedfruits=fruit.map((fruits)=>fruits.toUpperCase())
// console.log(modifiedfruits);

// const number=[1, 2, 3, 4]
// console.log(number);

// //three line

// number.map((num)=>{
//     console.log(num*2)
// })

// //one line

// const doublenum=number.map((num)=>num*2)
// console.log(number,doublenum);


// // 3. Array prototype.at() --- indexing

// const characters=['a', 'b', 'c', 'd', 'e']
// console.log(characters[1]);
// console.log(characters.at(1));
// console.log(characters.at(-1));

// 4. Array prototype.copywithin

// const fruits=['apple','mango', 'orange', 'kiwi', 'watermelan', 'papaya']
// //console.log(fruits.copyWithin(0,1,2));
// // console.log(fruits.copyWithin(3,0,1));
// // console.log('kiwi',fruits.copyWithin(0,1,1));
// console.log(fruits.copyWithin(0,1));
// // let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// // console.log(fruits.copyWithin(0, 3));


// // 5. Array prototype.entries()

// const fruits=['apple','mango', 'orange', 'kiwi', 'watermelan', 'papaya']

// const fruitentries=fruits.entries()
// console.log(fruitentries);

// for (let fruits of fruitentries){
   
//     console.log(fruits);
// }
// console.log(fruitentries);

// 6. Array prototype.values()

// const frooti=['banana','orange','mango','apple']
// const frootvalues=frooti.values()
// console.log(frootvalues);
// console.log(frootvalues.next().value);

// 7.Array prototype.every()
//all condition true only true 
// const marks=[34,56,78,54,90]

// const result=marks.every((mark)=>{
//     return mark>50
// })

// console.log(result);


// // 8. Array prototype.fill()

// const array1=[1,2,3,4]
// const array2=[5,6,7,8]
// const array3=[9,7,5,4]

// console.log(array1.fill(0,2,3));
// console.log(array2.fill(5,1));
// console.log(array3.fill(6));

// // 9.Array prototype.filter

// const  humannames=['Anu','banu','papa','ruth','maha']
// const result=humannames.filter((name)=>name.length>3)
// console.log(result);


// const users=[
//     {
//         id:1,
//         name:'maha',
//         active:true
//     },
//     {
//         id:2,
//         name:'ruth',
//         active:true
//     },
//     {
//         id:3,
//         name:'kala',
//         active:false
//     }
// ]

// // const activeUsers=user.filter((users)=>users.active===true)
// // console.log(users);
// // console.log(activeUsers);

// // Filter active users
// const activeUsers = users.filter(user => user.active === true);

// // Log the list of active users
// console.log(activeUsers[0].name);

// const activeusers=users.filter((user)=>user.active)
// // Log the list of active users
// console.log(activeusers[0].name);


// // 10 Array prototype.find()

const number=[5,12,50,130,44]

// const reslt=number.find((num)=>{
//     return num>10
// })

// console.log(reslt);

// // 11 Array prototype.find()

// const re=number.find((num)=>{
//     //console.log((num));
//     return num>50
// })

// console.log(re);

// 12 Array prototype findlastIndex()

// const result=number.findLastIndex((num)=>{
//     return num>50
// })

// console.log(result);// o/p :3 index in 130

// // 13 Array prototype.findIndex

// const result=number.findIndex((num)=>{
//     return num>50
// })

// console.log(result);

// 14 Array prototype.flat()

const matrix=[
    [1,2,3],
    [4,5,[22,44,36],6],
    [7,8,9]
]

const flatarr=[].concat(...matrix)
console.log(flatarr);

const flattarr=matrix.flat()
console.log(flatarr);


