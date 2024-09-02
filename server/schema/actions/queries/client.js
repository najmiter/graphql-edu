import { GraphQLID } from 'graphql';

import Client from '../../../models/Client.js';
import { ClientType } from '../../types/client.js';

export const client = {
  type: ClientType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Client.findById(args.id);
  },
};
