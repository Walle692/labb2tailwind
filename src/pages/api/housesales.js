import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {
    try {
        // Open the SQLite database
        const db = await open({
            filename: './HouseSalesSeattle.db', // Correct database file path
            driver: sqlite3.Database,
        });

        // Query the database for house sales data
        const rows = await db.all('SELECT * FROM HouseSales'); // Ensure table name is correct

        // Close the database connection
        await db.close();

        // Ensure the response is an array
        if (!Array.isArray(rows)) {
            throw new Error('Database query did not return an array');
        }

        // Return the data as JSON
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching data from SQLite:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
