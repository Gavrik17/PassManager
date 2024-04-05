export const search = (list, searchStr, callback) => {
	callback(
		list.filter((val) =>
			val.name.toLocaleLowerCase().includes(searchStr.toLocaleLowerCase())
		)
	);
};
