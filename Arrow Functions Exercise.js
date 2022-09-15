
//Refactor the above code to use two arrow functions. 
const double1 = ((arr) => {
    return arr.map((val) => {
      return val * 2;
    });
});
//Turn it into a one-liner.
const double2 = ((arr) => (arr.map((val) => (val * 2))));



//Replace ALL functions with arrow functions:
const squareAndFindEvens1 = ((numbers) => {
    const squares = numbers.map((num) => {
        return num ** 2;
    });
    const evens = squares.filter((square) => {
        return square % 2 === 0;
    });
    return evens;
});

//Turn it into a one-liner.
const squareAndFindEvens2 =(numbers => numbers.map(num => num ** 2).filter(square => square % 2 ===0));
 