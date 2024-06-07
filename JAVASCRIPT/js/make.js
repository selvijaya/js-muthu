 //9 th video

 //Javascript Array destructuring

 //1. Basic Array destructuring

//  const submarks=[55,70,90]

//  console.log(submarks[0])
//  console.log('chemistry',submarks[1]);

//  let physics=submarks[0]
//  let chemistry=submarks[1]
//  let maths=submarks[2]

//  console.log('physics',physics);
//  console.log('chemistry',chemistry);
//  console.log('maths',maths);


//  const [physics,chemistry,maths]=[55,70,90]
//  console.log('physics marks',physics);
//  console.log('chemistry marks',chemistry);
//  console.log('maths marks',maths);

 // 2. Handling  undefined elements 

//  const [physics,chemistry,maths]=[50,70]
// console.log(physics,chemistry,maths);
 
 // 3. skipping elements

//  const [physics, ,maths]=[55,70,90]
//  console.log(physics,maths);


// 4. Discarding Extra Elements

// const [physics,chemistry]=[55,70,90]

// console.log(physics,chemistry);//


// 5.Default value

// const name=['maha']
// console.log(name);

// const [name]=['maha']
// console.log(name);

// const [name='Guna']=[]
// console.log(name);

// const [name='kanaha']=['jeva']
// console.log(name);

// 6. Rest index

// const numbers=[1,2,3,4,5,6]

// const [one,two,three,...remainingItems]=[1,2,3,4,5,6]
// console.log(one,two,three,remainingItems);


// 7.swapping variables

// let a=24;
// let b=10;

// [a,b]=[b,a]
// console.log(a,b);

// // 8.Nesting array Destructuring

// const [one,two,[three,four],five,six]=[1,2,[3,4],5,6]
// console.log(one,two,three,four,five,six);

// // 9.Array Destructuring on fuctions

// function getfullName(){
//     return ['Anbu','selven'];
// }
//  const [firstName,lastName]=getfullName();
//  console.log(firstName,lastName);

//  const myFamily=[
//     {
//         id:1,
//         name:'maha',
//         isAlive:false
//     },
//     {
//         id:2,
//         name:'Ruth',
//         isAlive:true
//     },
//     {
//         id:3,
//         name:'MuthuselviPearlbell',
//         isAlive:false
//     }
// ]
// const [maha,Ruth,MuthuselviPearlbell]=myFamily
// console.log(MuthuselviPearlbell.name);

// const myBros=[
//     ['siva','Abraham','sivaabraham@gmail.com'],
//     ['surya','Thomas','suryathomas@gmail.com']]

// for(let[firstName,lastName,email]of myBros){
//     console.log(`My brother Name ${firstName} ${lastName} and mailid ${email}`);
// }


// use destructuring to extract into from this api responce

// const response={
//     status:200,
//     data:['orange','mango','graps']
// }

// const[fruit1,fruit2,fruit3]=response.data
// console.log(fruit1,fruit2,fruit3);



// const [physics,chemistry,Maths]=[50,80,100]
// console.log(physics,chemistry,Maths);


// 10 Arrow function

// 1. function Declaration

function sayHello(){
    console.log('hello world');
}
sayHello()


//2. function Expression

const greetmsg=function sayhi(){
    console.log('hello expression');
}
greetmsg()

// 3. anonymous function

const anonymousFunction=function(){
    console.log('Hello world anonomous');
}
anonymousFunction()

function greet(){
    console.log('Hi maha');
}
greet()

const great=()=>{
     console.log('hi');
}
great()


//Arrow function single Argument

 const square=(x)=>{
    return x*x;
 }

 const result=square(10)
 console.log(result);


 const cube=y=>{
    return y*y*y
 }
  const every=cube(30)
  console.log(every);


  // Arrow function with Multiple arguments

  const sum=(a,b)=>{
    return a+b
  }
  console.log(sum(4,6));


  const kind=(a,b)=>a+b
  console.log(kind(6,4));


  //Arrow function in objects

  const person={
    firstname:'maha',
    lastname:'ruth',
    // getfullname:()=>{
    //     return person.firstname+" "+person.lastname;
    // }

    getfullname(){
        return this.firstname+' '+this.lastname 
    }
  }
  console.log(person.getfullname());




 // ARRAY FUNCTION AS CALL BACK
  const numbers=[1,2,3,4,5,6]

 const squaredNumbers=numbers.map((number)=>{
       return number*number;
 })
console.log(squaredNumbers);

const squareNumbers=numbers.map((number)=>number*number)
console.log(squareNumbers);


//Returing object in arrow functions

const phoneInfo = () => ({id:1, make:'vivo',})

console.log(phoneInfo());

//touble line

const mobileInfo = () => {
    return {
        id: 1,
        make: 'poco',
    };
};

console.log(mobileInfo());


// setTimeout()

setTimeout(()=>{
    console.log('Enjoy your life!');
},5000)