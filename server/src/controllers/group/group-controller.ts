import { Request, Response } from "express";

interface IReqRes {
	req: Request;
	res: Response;
}

class Group {
	async getAll({ req, res }: IReqRes) {
		return res.json("result");
	}
}

export default new Group();
