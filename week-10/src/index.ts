// With using Neon DB
import pg from "pg";
//const { Pool, Client } = pg
// const connectionString = 'postgresql://neondb_owner:npg_exZ6gpC2azjb@ep-spring-wind-addkrmb5-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'

// const pool = new Pool({
//   connectionString,
// })

// await pool.query('SELECT NOW()')
// await pool.end()

// const client = new Client({
//   connectionString,
// })

// await client.connect()

// const res =  await client.query('SELECT NOW()')

// await client.end();

// console.log(res.rows);

// local Setup
const { Client } = pg;
const client = new Client({
  user: "postgres",
  database: "mydb",
  host: "localhost",
  port: 5432,
  password: "PRINCE123",
});
await client.connect().then(()=> {
    console.log("Connented To Postgres Database")
});

async function CreateUsersTable() {
  const res = await client.query(` 
    CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
  console.log(res);
}

//CreateUsersTable();

async function insertData() {
  try {
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
    const res = await client.query(insertQuery);
    console.log("Insertion success:", res); // Output insertion result
  } catch (err) {
    console.error("Error during the insertion:", err);
  } finally {
    await client.end(); // Close the client connection
  }
}
//insertData();

// Prevent SQL injection
async function InsertData(username:string,email: string, password: string) {
  const values = [username, email, password];
  const query = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3);";
  const res = await client.query(query, values);
  console.log(res.command);
}
// InsertData("PrinceKumar", "gmprince420@gmail.com", "Prince123");
await client.end();
