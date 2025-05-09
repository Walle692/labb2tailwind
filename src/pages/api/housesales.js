import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {
    try {
        const { offset = 0, limit = 20, type, bathrooms, bedrooms, price, zipcode, sqfoot, sortBy } = req.query;

        // Open the SQLite database
        const db = await open({
            filename: './DATABASEN/HouseSalesSeattle.db',
            driver: sqlite3.Database,
        });

        // Build the query dynamically based on filters
        let query = 'SELECT * FROM HouseSalesSeattle WHERE 1=1';
        const params = [];

        if (type) {
            query += ' AND PropertyType LIKE ?';
            params.push(`%${type}%`);
        }
        if (price) {
            query += ' AND SalePrice <= ?';
            params.push(price);
        }
        if (zipcode) {
            query += ' AND zip_code = ?';
            params.push(zipcode);
        }
        if (sqfoot) {
            query += ' AND SqFtTotLiving >= ?';
            params.push(sqfoot);
        }
        if (bedrooms) {
            query += ' AND Bedrooms = ?';
            params.push(bedrooms);
        }
        if (bathrooms) {
            query += ' AND Bathrooms = ?';
            params.push(bathrooms);
        }


        // Add sorting
        if (sortBy) {
            query += ` ORDER BY ${sortBy}`;
        }

        // Add pagination
        query += ' LIMIT ? OFFSET ?';
        params.push(parseInt(limit), parseInt(offset));

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
