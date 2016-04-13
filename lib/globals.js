module.exports = {
<<<<<<< HEAD
	applicationPort		: 80,
	database : function () {
		if (process.env.ENVIRONMENT) {
			var opsworks = require('./../opsworks');
			var opsWorksDB = opsworks.db;
			var rdsConnection = {
				host: opsWorksDB.host,
				port: opsWorksDB.port,
				database: opsWorksDB.database,
				user: opsWorksDB.username,
				password: opsWorksDB.password
			};

		return rdsConnection;
		} else {
			var local = require('./../config/local');
			var localConnection = local.db;
			
			return localConnection;
		}
=======
	applicationPort 			: 48081,
	database 					: 
	{
		host					: 'localhost',
		port 					: 3307,  // 3306: local, 3307: AWS
  		database 				: 'photoalbums',
		user     				: 'root',
 		password 				: 'qkekquf'
>>>>>>> parent of 45ed8b9... Modified for using Environment Variables in App of OpsWorks (PRD and local)
	}
}