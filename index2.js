// function anograma (str1, str2) {
//     if(str1.length !== str2.length){
//         return false;
//     } 

//     const str1Sorted = str1.split('').sort().join('');
//     const str2Sorted = str2.split('').sort().join('');

//     return str1Sorted === str2Sorted;
// }

// console.log(anograma('listen','silent'))
// console.log(anograma('water','air'))


const arr = [2,5,4,6,3,1,7];

// function alDoileaMare (lista) {
    
//     const sorted = lista.sort((a,b) => b - a);

//     const show = sorted[1]; 

//     console.log(show)
// }

// alDoileaMare(arr)


const alDoileaM = arr.reduce((acc,curr) =>{
   
    let [max, secondmax] = acc;

    if( curr > max) {
     secondmax = max;
     max = curr;
     
    } else if (curr > secondmax){
        secondmax = curr;
    } 

    return  [max, secondmax];
    
},[0,0])

console.log(alDoileaM[1])