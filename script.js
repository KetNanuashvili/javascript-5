//N1
let numbers = [5, 25, 89, 120, 36];
numbers.push('javascript', 'puthon');
numbers.unshift('html', 'css');

console.log(numbers);

numbers.shift();
numbers.pop();
console.log(numbers);

//N2
let fruits = ['ფორთოხალი', 'ბანანი', 'მსხალი'];

console.log(fruits);
fruits.push('ვაშლი', 'ანანასი');
fruits.unshift('საზამთრო');
console.log(fruits);

fruits.splice(2,0,'მანგო')
fruits.shift();
fruits.pop();
console.log(fruits);

//N3 map
let array = [12, 25, 3, 6, 8, 14, 7, 23];

let newArray = array.map(function(item){
    return item / 3;
})

console.log(newArray);

//N4 filter
let array2 = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

let newArray2 = array2.filter(function (item) {
    return  typeof item == 'number';
})
console.log(newArray2);

//N5 filter
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let newLanguage = languages.filter(function(item){
    return item.length < 3;
})
console.log(newLanguage);

//N6
let item = [12, 'google', 32, null, 'yahoo', 25];

let newItem = item.map(function(item){
    if (typeof item == 'number'){
        return item * item;
    }else if(typeof item == 'string'){
        return item.toUpperCase();
    }else{
        return item;
    }
})
console.log(newItem);

//N7 filter
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let newWords = words.filter(function(item) {
    return item.includes('m') || item.includes('M')  ;
})
console.log(newWords);

//N8 concat
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let arrAll = arr1.concat(arr2).concat(arr3);
console.log(arrAll);

//9 Foreach
let arr = [1, 2, 3, 4, 5];
let sum=0;
arr.forEach(function(item){
    return (sum=sum+item);
}) 

console.log(sum);

//10 filter
let numbers2 = [-2, 5, 10, -5, -1, 1, 3, 4, -15];

let newNumbers2 = numbers2.filter(function(item){
    return item > 0;
})
console.log(newNumbers2);

//11 some
let arra = [-1, -2, -3, 4].some(function(item){
    return item >0;
})
console.log(arra);

//12 sort
let array3 =[23,45,32,5,87,7,3,98];

let sortArray =array3.sort((x,y) => y-x)[array3.length-1];
console.log(sortArray);



//13. splice
let array4 =[1, 2, 3, 4, 5];

array4.splice(3,0,'a', 'b', 'c');
console.log(array4);