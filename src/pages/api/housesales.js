import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {
    try {
        // Open the SQLite database
        const db = await open({
            filename: '/Users/walter/downloads/HouseSalesSeattle.db', // Update to the correct path on your local server
            driver: sqlite3.Database,
        });

        // Query the database for house sales data
        const rows = await db.all('SELECT * FROM HouseSalesSeattle'); // Ensure table name is correct

        // Log the query result
        console.log('Database query result:', rows);

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
