/*
*/

function sortArray(array) {
  for(let i=0;i<array.length;i++){
      if(array[i]%2==1||array[i]%2==-1){
        for(let j=i+1;j<array.length;j++){
          if((array[j]%2==1||array[j]%2==-1)&& array[i]>array[j]){
            swap(array,i,j);
          }
        }
      }
  }
  return array;
}

function swap(arr,i,j){
  let temp=arr[i];
  arr[i]=arr[j];
  arr[j]=temp;
  return arr;
}
