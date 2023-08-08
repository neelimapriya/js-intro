var numbers =[78, 89 , 457, 99];

// use push to add element to an array as the last element array
numbers.push(64);
console.log(numbers)

var friends = ['balam', 'kalam', 'salam'];
friends.push('gelam');
friends.push('paola');
console.log(friends)

// use pop to get last element
numbers.pop();
console.log(numbers)

friends.pop();
friends.pop();
console.log(friends)

var age = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// jeta ber hobe seta dekha jabe
var element= age.pop();
console.log(element)
console.log(age)

// element er 1st e kono number add korte
age.unshift(88);
console.log(age)

// 1st element k remove korbe
age.shift();
console.log(age)
