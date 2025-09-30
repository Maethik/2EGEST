import { pool } from "../db.js";

export const queryResolvers = {
    // Get all users
    users: async () => {
        const { rows } = await pool.query("SELECT * FROM users");
        return rows;
    },
    // Get user by id
    user: async (_, {id}) => {
        const { rows } = await pool.query("SELECT * FROM users WHERE id = $1",
            [id]
        );
        return rows[0];
    },
    // Get all events
    events: async () => {
        const { rows } = await pool.query("SELECT * FROM events");
        return rows;
    },
    // Get event by id
    event: async (_, {id}) => {
        const { rows } = await pool.query("SELECT * FROM events WHERE id = $1",
            [id]
        );
        return rows[0];
    }
}