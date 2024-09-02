import { GraphQLNonNull, GraphQLString } from 'graphql';

import { ClientType } from '../../types/client.js';
import Client from '../../../models/Client.js';

export const addClient = {
  type: ClientType,
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    phone: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    const client = new Client({
      name: args.name,
      email: args.email,
      phone: args.phone,
    });

    return client.save();
  },
};
