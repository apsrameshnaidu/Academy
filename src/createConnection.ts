import {createConnection, Connection} from "typeorm";

export const connection = createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
	username: 'root',
	password: '12#Ramesh',
	database: 'rameshdb',
});
