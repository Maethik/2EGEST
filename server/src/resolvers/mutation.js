import { pool } from "../db.js";

export const mutationResolvers = {
    // Add a new user
    addUser: async (_, {name}) => {
        const { rows } = await pool.query(
            "INSERT INTO users (name) VALUES ($1) RETURNING *",
            [name]
        );
        return rows[0];
    },
    // Delete a user by ID
    deleteUser: async (_, {id}) => {
        const { rowCount } = await pool.query(
            "DELETE FROM users WHERE id = $1",
            [id]
        );
        return rowCount > 0;
    },
    // Add a new event
    addEvent: async (_, {title, date, organizer}) => {
        const { start, end } = date;
        const { rows } = await pool.query(
            "INSERT INTO events (title, start_event, end_event, organizer_id) VALUES ($1, $2, $3, $4) RETURNING *",
            [title, start, end, organizer]
        );
        return rows[0];
    }
}