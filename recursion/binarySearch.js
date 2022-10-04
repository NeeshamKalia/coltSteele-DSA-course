function binarySearch (arr, start, end, num){
    if(end >= start){
         mid = Math.round((start + end)/2)
        if( num == arr[mid]){
            return mid;
        }
        else if (num > arr[mid] ) return (binarySearch (arr, mid +1, end, num))
      else return (binarySearch (arr, start, mid -1, num)
     }
    return false
    }

    console.log()
