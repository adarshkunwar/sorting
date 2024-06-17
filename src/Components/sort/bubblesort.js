const bubbleSort = async (setSorting, array) => {
	setSorting(true);
	let isSorted = false;
	while (!isSorted) {
		isSorted = true;
		for (let i = 0; i < array.length - 1; i++) {
			await new Promise((resolve) =>
				setTimeout(() => {
					setCompareIndexes([i, i + 1]);
					resolve();
				}, timeOfSort)
			);
			if (array[i] > array[i + 1]) {
				let temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				setCount((prev) => prev + 1);
				setArray([...array]);
				isSorted = false;
			}
		}
	}
	setSorting(false);
};
