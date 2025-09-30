import { userResolvers } from './user.js';
import { eventResolvers } from './event.js';
import { queryResolvers } from './query.js';
import { mutationResolvers } from './mutation.js';
import { loginResolvers } from './login.js';
import { registerResolvers } from './register.js';

export const resolvers = {
    User: userResolvers,
    Event: eventResolvers,
    Query: queryResolvers,
    Mutation: {
        ...mutationResolvers,
        login: loginResolvers.login,
        register: registerResolvers.register
    }
}