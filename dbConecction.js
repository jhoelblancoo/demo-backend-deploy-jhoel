const { Client } = require("pg");

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "backend",
    password: "Blanco10",
    port: 5432,
});

client.connect();
client.query("SELECT * from users", (err, res) => {
    if (err) {
        console.log("Hay error");
        console.log(err);
    } else {
        console.log(res.rows);
    }
    client.end();
});