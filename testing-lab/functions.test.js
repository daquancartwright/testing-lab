let myFunctions = require('./functions.js')

// Create a test for Return Two
test("Return Two Test", () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

// Create a test for Greeting
test("Greeting Test", () => {
    expect(myFunctions.greeting('James')).toBe('Hello James.')
    expect(myFunctions.greeting('Jill')).toBe('Hello Jill.')
})

// Create a test for add:
test("Addition Test", () => {
    expect(myFunctions.add(1, 2)).toBe(3)
    expect(myFunctions.add(5, 9)).toBe(14)
})




// // Extra Challenge solution

// describe("Math Challenge!", () => {
//     test("Add", () => {
//         expect(myFunctions.add(14, 6)).toBe(20)
//     })
//     test("Subtract", () => {
//         expect(myFunctions.subtract(11, 3)).toBe(8)
//     })
//     test("Multiply", () => {
//         expect(myFunctions.multiply(12, 3)).toBe(36)
//     })
//     test("Divide", () => {
//         expect(myFunctions.divide(15, 5)).toBe(3)
//     })
// })