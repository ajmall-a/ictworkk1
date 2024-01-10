//array as input and checks if the first element of the array is prime or not:
function isFirstElementPrime(arr){
    if(arr.length===0){
        return "Array is empty";
    }
    const FirstElement= arr[0];
    if (FirstElement < 2){
        return "(FirstElement) is not a prime number";
    }
    for(let i=2;i<=Math.sqrt(FirstElement);i++){
        if(FirstElement % i ===0){
            return "(FirstElement)is not a prime number";
        }
    }
    return "(FirstElement) is a prime number";
}
const myArray= [7,14,23,10];
console.log(isFirstElementPrime(myArray))
// the most frequent item of an array
function findMostFrequentItem(arr1){
    let frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentItem;
    arr1.forEach(item =>{
        frequencyMap[item] = (frequencyMap[item]|| 0)+1;
        if(frequencyMap[item]>maxFrequency){
            maxFrequency = frequencyMap[item];
            mostFrequentItem = item;
        }
        });
        return mostFrequentItem;
    }
    const myArray1= [1,2,3,2,4,2,5];
    const mostFrequent = findMostFrequentItem(myArray);
    console.log("the most frequent item is:(mostFrequent)");
    //check number odd or even
    for (let j=0;j<=15;j++){
        if (j % 2 === 0){
            console.log(j + "is even");
        } else {
            console.log(j + "is odd");
        }
    }
    //sum of squares of the elements of an array
    const arr2=[1,2,3,4,5];
    let sumOfSquares = 0;
    for(let i =0; i< arr2.length;i++){
        sumOfSquares += arr2[i] ** 2;
    }
    console.log("the sum of squares of the element of the array "+sumOfSquares);