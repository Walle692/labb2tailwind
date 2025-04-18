import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {
    try {
        // Open the SQLite database
        const db = await open({
            filename: './database.sqlite', // Path to your SQLite database file
            driver: sqlite3.Database,
        });

        // Query the database for house sales data
        const rows = await db.all('SELECT * FROM HouseSales');

        // Close the database connection
        await db.close();

        // Return the data as JSON
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching data from SQLite:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
