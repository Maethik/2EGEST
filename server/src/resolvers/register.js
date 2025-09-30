import { pool } from '../db.js';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const registerResolvers = {
    register: async (_, {username, password}) => {
        const hashed = await bcrypt.hash(password, SALT_ROUNDS);
        const { rows } = await pool.query(
            'INSERT INTO users (name, password) VALUES ($1, $2) RETURNING id, name',
            [username, hashed]
        );

        const user = rows[0];
        if (!user) {
            throw new Error('Registration failed');
        }

        return {
            id: user.id,
            name: user.name
        };
    }
}