export const search = (
	list: any,
	searchStr: string,
	callback: (list: any) => void
) => {
	callback(
		list.filter((val: any) =>
			val.name.toLocaleLowerCase().includes(searchStr.toLocaleLowerCase())
		)
	);
};
