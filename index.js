// let arrayOfNumbers = [10,11,12,13,14,15,16,17,18,19,20]
// let celsius = []
// for (let i=0; i<arrayOfNumbers.length;i++){
//     celsius.push(Math.trunc((arrayOfNumbers[i]-32)*5/9))
// }
// console.log(celsius)


// let namesOfPeople = ["josiah","john","job","debby","sharon","angel","lanre","ibukun","rick","jesus","jem"]
// let people =[]
// for(let i=0; i<namesOfPeople.length; i++){
//     // people.push(namesOfPeople[i].startsWith("j"))
//     if (namesOfPeople[i].startsWith("j")){
//     people.push (namesOfPeople[i])
//     }
// }
// console.log(people)


arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10]
let numbers = []
for(let i=arrayOfNumbers.length-1; i>=0; i--){
    numbers.push(arrayOfNumbers[i])
}
console.log(numbers)