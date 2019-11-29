const twoSum = (array, sum) => {
	const pairs = [];
	const map = {};
	for (const num of array) {
		const counterpart = sum - num;
		if (map[counterpart] !== undefined) {
			pairs.push([counterpart, num]);
		}
		map[num] = num;
	}
	return pairs;
};
twoSum([2, 4, 6, 8], 10);
