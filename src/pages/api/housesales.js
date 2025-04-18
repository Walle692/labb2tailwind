import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {
    try {
        const { salesID, price, zipcode, sqfoot, sortBy } = req.query;

        // Open the SQLite database
        const db = await open({
            filename: '/Users/walter/downloads/HouseSalesSeattle.db', // Update to the correct path on your local server
            driver: sqlite3.Database,
        });

        // Build the query dynamically based on filters
        let query = 'SELECT * FROM HouseSalesSeattle WHERE 1=1';
        const params = [];

        if (salesID) {
            query += ' AND salesID = ?';
            params.push(salesID);
        }
        if (price) {
            query += ' AND SalePrice <= ?'; // Use SalePrice for price
            params.push(price);
        }
        if (zipcode) {
            query += ' AND zip_code = ?'; // Use zip_code for zipcode
            params.push(zipcode);
        }
        if (sqfoot) {
            query += ' AND SqFtTotLiving >= ?';
            params.push(sqfoot);
        }

        // Add sorting
        if (sortBy) {
            query += ` ORDER BY ${sortBy} ASC`; // Sort in ascending order
        }

        // Execute the query
        const rows = await db.all(query, params);

        // Log the query result
        console.log('Database query result:', rows);

        // Close the database connection
        await db.close();

        // Return the data as JSON
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching data from SQLite:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
