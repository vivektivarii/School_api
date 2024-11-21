import mysql from 'mysql2' 

import dotenv from "dotenv"
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getschools() {
 const [rows] = await pool.query("SELECT * FROM schools")
 return rows
}

export async function getschool(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM schools
    WHERE id = ?
   `, [id])
   return rows[0]
}

export async function createSchools(name, address, latitude, longitude) {
    const [result] = await pool.query(`
      INSERT INTO schools (name, address, latitude, longitude) 
      VALUES (?, ?, ?, ?) 
        `, [name, address, latitude, longitude])
        const id = result.insertId
         return getschool(id)
      
}

export async function getSortedSchools(userLatitude, userLongitude){
    const [rows] = await pool.query(`
        SELECT 
          id, 
          name, 
          address, 
          latitude, 
          longitude,
          (6371 * acos(
            cos(radians(?)) * cos(radians(latitude)) *
            cos(radians(longitude) - radians(?)) +
            sin(radians(?)) * sin(radians(latitude))
          )) AS distance
        FROM schools
        ORDER BY distance;
      `, [userLatitude, userLongitude, userLatitude]);
    return rows;
}