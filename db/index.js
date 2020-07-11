const connection = require('./connection');

class DB {
	constructor(connection) {
		this.connection = connection;
	}

	createRole(role) {
		return this.connection.query('INSERT INTO role SET ?', role);
	}

	removeRole(roleId) {
		return this.connection.query('DELETE FROM role WHERE id = ?', roleId);
	}

	createDepartment(department) {
		return this.connection.query('INSERT INTO department SET ?', department);
	}

	removeDepartment(departmentId) {
		return this.connection.query('DELETE FROM department WHERE id = ?', departmentId);
	}
}

module.exports = new DB(connection);
