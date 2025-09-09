import { userResolvers } from './user.js';
import { eventResolvers } from './event.js';
import { queryResolvers } from './query.js';
import { mutationResolvers } from './mutation.js';

export const resolvers = {
    User: userResolvers,
    Event: eventResolvers,
    Query: queryResolvers,
    Mutation: mutationResolvers
}