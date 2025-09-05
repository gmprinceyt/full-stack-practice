import pg from 'pg'
const { Pool, Client } = pg
const connectionString = 'postgresql://neondb_owner:npg_exZ6gpC2azjb@ep-spring-wind-addkrmb5-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
 
const pool = new Pool({
  connectionString,
})
 
await pool.query('SELECT NOW()')
await pool.end()
 
const client = new Client({
  connectionString,
})
 
await client.connect()
 
const res =  await client.query('SELECT NOW()')
 
await client.end();

console.log(res.rows);