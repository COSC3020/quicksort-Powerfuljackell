//used https://www.geeksforgeeks.org/iterative-quick-sort/ as a basis


function quicksort(array){
    let n = array.length;
    let tmparray = array;
    if ( n > 0){
        tmparray = quicksortarray(array, n - 1, 0);
    }
    return tmparray;
}

//complexity O(n)
function partition(array, high, low){
    let tmp;
    let pivot = array[high];
    let i = (low - 1);
    for (let j = low; j <= high - 1; j++){
        if(array[j] <= pivot) {
            i++;
            tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }
    }
    tmp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = tmp;
    return i + 1;
}

//n*n or n^2
function quicksortarray(array, high, low) {
    let tmpStack = new Array(high - low + 1);
    tmpStack.fill(0);
    let top = -1;
    tmpStack[++top] = low;
    tmpStack[++top] = high;
    //average would be log(n), but if it goes through every possibility will be n
    while (top >= 0){
        high = tmpStack[top--];
        low = tmpStack[top--];
        //O(n)
        let p = partition(array, high, low);
        
        if (p - 1 > low){
            tmpStack[++top] = low;
            tmpStack[++top] = p - 1;
        }
        if (p + 1 < high){
            tmpStack[++top] = p + 1;
            tmpStack[++top] = high;
        }
    }
    return array;
}
/*
let arr = [3,2];
let n = 8;

//quicksortarray(arr, n - 1, 0);

console.log(quicksort(arr));
*/