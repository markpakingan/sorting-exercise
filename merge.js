function merge(arr1, arr2) {
   let results = [];
   let i = 0; 
   let j = 0; 

   while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++
        }
   }

   while (i < arr1.length){
    results.push(arr1[i]);
    i++;
   }

   while (j < arr2.length){
    results.push(arr2[j]);
    j++
    }

    return results;


}

function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    let midIdx= Math.floor(arr.length/2); 

    
    let left = mergeSort(arr.slice(0, midIdx));
    let right = mergeSort(arr.slice(midIdx));
 
    console.log("left", left);
    console.log("right", right)

    return merge(left, right);
    
}



module.exports = { merge, mergeSort};

let arr1 = [1,3,4,5];
let arr2 = [2,4,6,8];
merge(arr1,arr2) // [1,2,3,4,4,5,6,8]

arr1 // [1,3,4,5];
arr2 // [2,4,6,8];

let arr3 = [-2,-1,0,4,5,6];
let arr4 = [-3,-2,-1,2,3,5,7,8];

merge(arr3,arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

let arr5 = [3,4,5]
let arr6 = [1,2]

merge(arr5,arr6) // [1,2,3,4,5]