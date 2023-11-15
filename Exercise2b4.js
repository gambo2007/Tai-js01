function check(arr1,arr2){
   return arr2.filter(e => !arr1.includes(e));
}
console.log(check([1,2,3,4,5],[1,5,4,6,7]));