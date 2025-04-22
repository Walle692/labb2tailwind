import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {
    try {
        const { zipcode, propertytype } = req.query;

        // Open the SQLite database
        const db = await open({
            filename: 'c:/Users/walte/Documents/webbdev/labb2tailwind/DATABASEN/HouseSalesSeattle.db',
            driver: sqlite3.Database,
        });

        // Build the query dynamically based on filters
        let query = 'SELECT AVG(SalePrice / SqFtTotLiving) AS AvgPricePerSqFt FROM HouseSalesSeattle WHERE 1=1';
        const params = [];

        if (zipcode) {
            query += ' AND zip_code = ?';
            params.push(zipcode);
        }
        if (propertytype) {
            query += ' AND PropertyType = ?';
            params.push(propertytype);
        }


        // Execute the query
        const rows = await db.get(query, params);

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