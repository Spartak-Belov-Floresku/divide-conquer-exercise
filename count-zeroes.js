function countZeroes(arr) {
	
	let leftIdx = 0;
	let rightIdx = arr.length - 1;
	
	while(leftIdx < rightIdx){
		
		let middleIdx = Math.floor((leftIdx + rightIdx)/2);
		
		if(arr[middleIdx] === 1){

			leftIdx = middleIdx+1;

			if(arr[leftIdx] === 0){
				return arr.length - leftIdx
			}

		}else if(arr[middleIdx] === 0){

			rightIdx = middleIdx-1;

			if(arr[rightIdx] === 0){
				return arr.length - rightIdx
			}

		}
	}

	return arr.length - 1 - leftIdx;
}

module.exports = countZeroes