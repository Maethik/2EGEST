import { pool } from '../db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const JWT_SECRET = process.env.JWT_SECRET || 'please-change-this-secret';

export const loginResolvers = {
    login: async (_, { username, password }) => {
        const { rows } = await pool.query(
            'SELECT id, name, password FROM users WHERE name = $1',
            [username]
        );

        const user = rows[0];
        if (!user) {
            throw new Error('Invalid credentials');
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            throw new Error('Invalid credentials');
        }

        const payload = { sub: user.id, name: user.name };

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

        return {
            token,
            user: {
                id: user.id,
                name: user.name
            }
        };
    }
};