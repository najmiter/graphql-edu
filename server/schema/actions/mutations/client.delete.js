import { GraphQLID, GraphQLNonNull } from 'graphql';

import Client from '../../../models/Client.js';
import { ClientType } from '../../types/client.js';

export const deleteClient = {
  type: ClientType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, args) {
    return Client.findByIdAndDelete(args.id);
  },
};
