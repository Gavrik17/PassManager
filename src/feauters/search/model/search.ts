export const search = (
	list: ReadonlyArray<string>,
	searchStr: string,
	callback: (list: ReadonlyArray<string>) => void
) => {
	callback(
		list.filter((val: any) =>
			val.name.toLocaleLowerCase().includes(searchStr.toLocaleLowerCase())
		)
	);
};
