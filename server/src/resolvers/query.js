import { pool } from "../db.js";

export const queryResolvers = {
    // Get all users
    users: async () => {
        const { rows } = await pool.query("SELECT * FROM users");
        return rows;
    },
    // Get all events
    events: async () => {
        const { rows } = await pool.query("SELECT * FROM events");
        return rows;
    }
}