export interface ICard {
	search?: any;
	filter?: any;
	add?: any;
}

export interface ISearch {
	search: (
		list: ReadonlyArray<string>,
		searchStr: string,
		callback: (list: ReadonlyArray<string>) => void
	) => void;
}
