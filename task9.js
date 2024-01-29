//Task 1
const originalNumbers = [2, 4, 6, 8, 10];
console.log(originalNumbers.map((num) => num * 2));

//შედეგი: [4, 8, 12, 16, 20]

//Task 2
const originalWords = ["apple", "banana", "cherry"];
console.log(originalWords.map((word) => word.toUpperCase()));

//შედეგი: ['APPLE', 'BANANA', 'CHERRY']

//Task 3
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 }
];
console.log(users.map((user) => user.name));

//შედეგი: ['Alice', 'Bob', 'Charlie']

//Task 4
const originalNumbers1 = [4, 9, 16, 25];
console.log(originalNumbers1.map((number) => Math.sqrt(number)));

//შედეგი: [2, 3, 4, 5]

//Task 5
const temperaturesInCelsius = [25, 30, 15, 20];
console.log(temperaturesInCelsius.map((temp) => (temp * 9) / 5 + 32));

//შედეგი: [77, 86, 59, 68]

//Task 6
const originalNumbers2 = [1, 2, 3, 4, 5];
console.log(
  originalNumbers2.map((num) => {
    // if (num % 2 === 0) {
    //   return num * num;
    // } else {
    //   return num;
    // }
    return num % 2 === 0 ? num * num : num;
  })
);

//შედეგი: [1, 4, 3, 16, 5]

//Task 7
const rectangles = [
  { width: 3, height: 5 },
  { width: 4, height: 8 },
  { width: 2, height: 6 }
];
console.log(
  rectangles.map((dimensions) => dimensions.width * dimensions.height)
);

//შედეგი: [15, 32, 12];

//Task 8
const names = ["John Doe", "Alice Smith", "Bob Johnson"];
console.log(
  names.map((name) => {
    const [firstName, lastName] = name.split(" ");
    return firstName.charAt(0) + lastName.charAt(0);
  })
);

//შედეგი: ['JD', 'AS', 'BJ']
