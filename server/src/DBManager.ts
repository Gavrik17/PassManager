import sqlite3 from "sqlite3";

class managementDB {
	sql: sqlite3.sqlite3;
	db: any;
	constructor() {
		this.sql = sqlite3.verbose();
		this.db = new this.sql.Database(
			"C:/Users/admin/Desktop/Projects/PassManager/db/PassManager.db",
			(err) => {
				if (err) {
					return console.error(err.message);
				}
				console.log("Connected to the in-memory SQlite database.");
			}
		);
	}

	async request(req: string) {
		return new Promise((resolve, reject) => {
			this.db.all(req, (err: any, rows: any) => {
				if (err) {
					return reject(err);
				}
				resolve(rows);
			});
		});
	}
}

export default new managementDB();
