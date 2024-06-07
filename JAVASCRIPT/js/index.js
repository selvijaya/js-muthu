// Object

// const students={
//     firstname:'Maha',
//     lastname:'Ruth',                 //properties
//     class:12,
//     Age:17,
//     isAlive:true
// }

// console.log("student age",students.Age);
// const teachers={
//     firstname:'Angeline',
//     lastname:'Amutha',
//     class:'c',
//     Age:27,
//     subject(){
//        // return(`${this.firstname} ${this.lastname}`)       //methods
//        return this.firstname+' '+this.lastname

//     }

// }
//  const{firstname:myname,lastname,Age}=students

// console.log(students.firstname);

// console.log(teachers.subject());


// console.log(students)





//27.05.2023 ----> object destructuring

// const person={
//     firstname:'maha',
//     lastname:'ruth',
//     age:21,
//     isAlive:true,
//     parent:{
//         Appa:'Myfather',
//         Amma:'Mymother',
//         Brother:'Mybrother'
//            },
//     fullname(){
//         return `${this.firstname} ${this.lastname}`
//     }
// }

// console.log(person.firstname,person.lastname);
// console.log(person.parent.Amma);

// const{firstname:fname,lastname}=person
// console.log(`my name is ${fname} ${lastname}`)

// const{favcolor='White',favfood='sambersatham', Middlename="Uncle"}=person
// console.log(Middlename);
// console.log(person);

// console.log(`My name is ${fname} ${lastname} my favorite food is ${Middlename}`)


// let favicecream,favHero;
 
// ({favicecream,favHero,favflower,...otherdetails}={
//     favflower:'Roja',
//     favicecream:'venilla',
//     favnum:5,
//     favHero:'Jesus',
//     favperson:"IT'SME"
// })

// console.log(favHero,favicecream,otherdetails)
// console.log(`my favorite flower is ${favHero}  my icecream is ${favicecream} ${favflower}` )
// function displayUser(personobj){
//     console.log(`my favorite  person ${personobj.parent.Amma} ${personobj.parent.Appa} ${personobj.parent.Brother}`)
// }
// displayUser(person);


// function anyone({favicecream,favHero,otherdetails}){
    
//     console.log(`favorite ice
//      ${favicecream} and my hero ${favHero}and others ${otherdetails} `)

// }
// anyone(favicecream,favHero,otherdetails)

// let car ,cycle;

// ({car,cycle,...othervehicles}={
//     car:'nano',
//     cycle:'ladybar',                                                
//     Bike:'hero Honda',
//     van:'maruthi',
//     Auto:'three velar',
//     Bus:'free bus'

// })

// console.log(`my faver ${car} and ${cycle} more faverite ${othervehicles}`)
// console.log(othervehicles);



//28.05.2024 Array
//Array constructor
const favcolor=new Array('blue','gray','red','orange','red','white')
console.log(favcolor);

const favfruit=['mango','orange','banana','jery','pineapple','apple','watermalen']

console.log(favfruit);
console.log('My favorite fruit',favfruit[0]);


const foods=[
    {id:1, name:'chicken Biriyani', dietary:'non-veg'},
    {id:2, name:'chicken chilli', dietary:'non-veg'},
    {id:3, name:'samber satham', dietary:'veg'},
    {id:4, name:'curd rice', dietary:'veg',},
    {id:5, name:'tomato rice', dietary:'veg'},
    {id:6, name:'fish fry', dietary:'non-veg'}
]
console.log(foods)
console.log(foods[2])
console.log(foods[2].name)
console.log(foods[3].id)
console.log(foods[0].dietary)

// //for-loop

// for (let i=0;i<foods.length;i++){
//     console.log('foods name-for-loop',foods[i].name)
// }

// //for-in-loop

// for (let foodsItem in foods){
//     console.log(foods[foodsItem].name)
// }

// //for-of-loop

// for (let fooditem of foods){
//     console.log(fooditem.name)
// }

// foods.forEach((foods)=>console.log('forEach',foods.name))

// // //foods forEach

// foods.forEach((foods)=>{
//     document.getElementById('result').innerHTML+=foods.name+'<br/>'
// })

// //document.getElementById('result').innerHtml=foods[i].name
// foods.forEach((food)=>{
//     document.getElementById('result').innerHTML+= '<li>' +food.name+ '</li>';
//     console.log(document.getElementById('result').innerHTML);
// })

//multidimensional  array

// const matrix=[
//     [11, 12, 13],
//     [21, 22,[1,2] ,23],
//     [31, 32, 33]
// ]
// console.log(matrix)
// console.log(matrix.flat())
// console.log(matrix.flat(2))

// //Map object

// const coffeeingradeients=new Map()
// coffeeingradeients.set('milk','2 glass')
// coffeeingradeients.set('water','1 glass')
// coffeeingradeients.set('sugar','4 teespoon')
// coffeeingradeients.set('coffiepowder','3 teespoon')
// coffeeingradeients.set('ginger','small peace')

// // how do get map data

// console.log(coffeeingradeients.get('water'))
// console.log(coffeeingradeients)
// console.log(coffeeingradeients.entries())


// const mahaMap=new Map([
//     [1,'one'],
//     [2,'two'],
//     [3,'three'],
//     [4,'f0ur'],
//     [5,'five']
// ])

// console.log(mahaMap)
// console.log(mahaMap.get(2));

// //key value checking in has method

// console.log("Is sugar added?",coffeeingradeients.has('sugar'));

// // use in for loop  display map data

// for (let ingradients of coffeeingradeients.entries()){
//     console.log(ingradients);
    
// }
// console.log('coffee keys',coffeeingradeients.keys());
// console.log('coffee value',coffeeingradeients.values());

// // destructure

// for(let [keyname,valuedata] of coffeeingradeients.entries()){
//     console.log(keyname,valuedata)
// }


// //delete

// coffeeingradeients.delete('ginger');

// console.log(coffeeingradeients);

// const emptyobj={}
// const example=new Map()
// example.set(emptyobj,'handle')
// // console.log(example.get({}));
// console.log(example.get(emptyobj));

// // weak map
// const NaN={}
// const process=new WeakMap()
// process.set(NaN,'maha')
// console.log(process.get(NaN));


// // set object

// const dailyschedules=[
// 'wake up',
// 'Bible reading',
// 'prayer',
// 'breakfast',
// 'work',
// 'coffiebreak',
// 'work',
// 'lunch',
// 'work',
// 'snaks',
// 'work',
// 'coffiebreak',
// 'dinner',
// 'sleep']

// console.log(dailyschedules);

// const dailyschedulesset=new Set(dailyschedules)
// dailyschedulesset.add('play')
// console.log(dailyschedulesset);
// console.log(dailyschedules,dailyschedulesset);
// dailyschedulesset.add(function(){

// })

// dailyschedulesset.add({'meeting':['friends']})
// console.log(dailyschedulesset.entries());

// const resulturl=document.querySelector('#result')

// dailyschedulesset.forEach(schedule=>{
//     resulturl.innerHTML+='<li>'+ schedule + '</li>'
// })

//Array object

// const juice=new Array('apple juice','milk shake','mango juice')
//  console.log(juice);


//  const fruits=['apple','orange','mango','banana','jerry']
//  console.log(fruits);


//  const users=[
//     {
//         id:1,
//         name:'maha',
//         degree:'B.E'

//  },
// {
//     id:2,
//     name:'ruth',
//     degree:'M.B.B.S'
// }
// ]

// console.log(users[1].name);


// fruits[8]='watermelan'
// console.log(fruits);

// fruits.forEach((fruit)=>{
//     console.log('foreach',fruit);

// })


// console.log(fruits.toString())
// //last add
// fruits.push('graps')
// console.log(fruits);
// //first add
// fruits.unshift('kiwi')
// console.log(fruits);

// //removing element 
// //last remove 
// fruits.pop()
// console.log(fruits);
// //first remove
// fruits.shift()
// console.log(fruits);

// //slice

// const myfruit=fruits.slice(1,3)
// console.log(myfruit);

//splice

// fruits.splice(1,2)
// console.log(fruits);

// //tospliced
// const maha=fruits.toSpliced(1,2)
// console.log(maha);

// fruits.splice(1,2,'graps','kiwi')
// console.log(fruits);



// const breakfast=['idly','dosa','poori','maagi']
// const lunch=['chicken Biriyani ','mutton Biriyani', 'chicken chilli','samber satham','curd rice','potato rice']
// const dinner=['chapathi','fried rice','parota','mutta masala']

// //concatenate
// const overall=breakfast.concat(lunch,dinner,'chips')
// console.log(overall);

//spreed operator

// const foodspreed=[...breakfast,...lunch,...dinner,'mango juice']
// console.log(foodspreed);

// const newfood=[]
// newfood.push(...breakfast,...lunch,...dinner,'supe')
// console.log(newfood);



