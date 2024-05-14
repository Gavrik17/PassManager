import { Request, Response } from "express";
import UserDB from "./user-repository";

interface IReqRes {
	req: Request;
	res: Response;
}

class User {
	async getAll({ req, res }: IReqRes) {
		return res.json(await UserDB.getUser());
	}
}

export default new User();
