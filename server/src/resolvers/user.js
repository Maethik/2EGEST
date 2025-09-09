import { pool } from "../db.js";

export const userResolvers = {
    // Get events for a organizer
    events: async (parent) => {
        const { rows } = await pool.query(
            "SELECT * FROM events WHERE organizer_id=$1",
            [parent.id]
        );
        return rows;
    }
}