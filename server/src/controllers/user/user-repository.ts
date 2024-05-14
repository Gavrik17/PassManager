// const sqlite3 = require('sqlite3').verbose();
import sqlite3 from "sqlite3";
import managementDB from "../../DBManager";

class UserDB {
	async getUser() {
		return await managementDB.request('SELECT * FROM User');
	}
}

export default new UserDB