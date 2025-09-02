import pool from "./db.js";

const resolvers = {
  Query: {
    users: async () => {
      const { rows } = await pool.query("SELECT * FROM users");
      return rows;
    },
    events: async () => {
      const { rows } = await pool.query("SELECT * FROM events");
      return rows;
    },
  },
  Mutation: {
    addUser: async (_, {name}) => {
      const { rows } = await pool.query(
        "INSERT INTO (user) VALUES ($1) RETURNING *"
        , [name]
      );
      return rows[0];
    }
  },
  User: {
    events: async (parent) => {
      const { rows } = await pool.query(
        "SELECT * FROM events WHERE user_id=$1",
        [parent.id]
      );
      return rows;
    },
  },
  Event: {
    user: async (parent) => {
      const { rows } = await pool.query(
        "SELECT * FROM users WHERE id=$1",
        [parent.user_id]
      );
      return rows[0];
    },
  }
};

export default resolvers;
