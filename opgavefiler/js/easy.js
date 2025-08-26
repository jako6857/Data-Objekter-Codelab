/* opgave 1 */

const person ={
    firstName: "Jakob", 
    age: 24, 
    jobTitle: "student"};
    console.log(person);

console.group("opgave 1");

console.groupEnd();

/* opgave 2 */

console.log(person.firstName);
console.log(person.age);    
console.log(`${person.firstName} arbejder som ${person.jobTitle}`);

console.group("opgave 2");



console.groupEnd();

/* opgave 3 */

delete person.age;
console.log(person);

console.group("opgave 3");



console.groupEnd();
