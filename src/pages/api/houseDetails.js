import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {
    try {
        const { salesID } = req.query;

        // Open the SQLite database
        const db = await open({
            filename: 'c:/Users/walte/Documents/webbdev/labb2tailwind/DATABASEN/HouseSalesSeattle.db',
            driver: sqlite3.Database,
        });

        // Query to fetch house details by salesID
        const query = 'SELECT * FROM HouseSalesSeattle WHERE salesID = ?';
        const house = await db.get(query, [salesID]);

        // Close the database connection
        await db.close();

        if (!house) {
            return res.status(404).json({ error: 'House not found' });
        }

        // Return the house details as JSON
        res.status(200).json(house);
    } catch (error) {
        console.error('Error fetching house details from SQLite:', error);
        res.status(500).json({ error: 'Failed to fetch house details' });
    }
}