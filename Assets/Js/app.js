const arr = [4, 9, 10, 20]
const arr1 = [3, 0, 1, 2]

// arr.push(25, 23, 90, "hello", true, 2.264, ["Nice", true, 3.142])
// arr.unshift()
// arr.pop()
// arr.shift()

console.log(arr)

const person = {
    name: "Akpos", age: 46, isMarried: false
}

// To access any property of an array we use
// dot notation 
person.name
// or reassign it with 
person.name = "Olusegun"
// We can add property and value to an object by using
person.yearOfBirth = 1976
//An object value can also be retrieved or assigned with bracket notation as
person["obj"]
//To access a value, the property inside the  square beacket, must be a string
//To add property and value can also be done with the square bracket by
person["is cute"] = false
//When a property is creater with space between, it must always be referenced with square bracket method and quotation mark, because of the space, as using the dot method will not recognise the space

console.log(person)

// const scores = [22, 54, 76, 92, 43, 33];
// console.log(scores.length);

// let i = 0;
// while(i < scores.length){
//     console.log(scores[i]+2);
//     i++;
// }

// do{
//     consolee.log(scores[i]);
//     i++;
// }
// while(i < scores.length);

const score = [1, 2, 3, 4, 5, 6];

for(i = 0; i < score.length; i++)
{
    console.log(score[i] + 2);
}



//Sort even and odd numbers
const numbers = [];
const even = [];
const odd = [];

for(let i = 0; i < 20; i++){
    numbers[i] = i + 1;
}

for(let i = 0; i < numbers.length; i++){

    if(numbers[i] % 2 == 0){
        even.push(numbers[i]);
    }

    else{
        odd.push(numbers[i]);
    }

}

console.log(even, odd);