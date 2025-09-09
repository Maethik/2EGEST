import { pool } from "../db.js";

export const eventResolvers = {
    // Get the organizer of an event
    organizer: async (parent) => {
        const { rows } = await pool.query(
            "SELECT * FROM users WHERE id=$1",
            [parent.organizer_id]
        );
        return rows[0];
    },
    // Return the date range of the event
    date: (parent) => {
        if (!parent.start_event || !parent.end_event) {
            throw new Error("Event.start_event or end_event is missing");
        }
        try {
            const start = new Date(parent.start_event).toISOString();
            const end = new Date(parent.end_event).toISOString();
            return { start, end };
        } catch (e) {
            throw new Error("Invalid date format in event");
        }
    }
}