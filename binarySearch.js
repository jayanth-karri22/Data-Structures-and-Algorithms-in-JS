let searchArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let item = Math.floor((Math.random()*searchArr.length)+1);

let low = 0;
let high = searchArr.length-1;
let mid;
let counter = 1;

while(low<=high){
    mid = Math.round((low+high)/2);
    if(searchArr[mid]===item){
        console.log("item to find is",item);
        console.log("Found at index",mid);
        console.log(`Found in ${counter} iterations`)
        return mid;
    }else if(searchArr[mid]>item){
        high = mid-1;
    }else{
        low = mid+1;
    }
    counter++;
}
console.log("oopsie"); 
return null;