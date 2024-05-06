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

export interface IAccountData {
	title: string;
	description: string;
	login: string;
	password: string;
	link?: string | undefined;
	dateCreate: string;
	dateChange: string;
	color: string;
}

export interface IGroupData {
	title: string;
	description: string;
}

export interface IUserData {
	id: number,
	name: string,
	description: string
}