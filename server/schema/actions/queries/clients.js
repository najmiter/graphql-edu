import { GraphQLList } from 'graphql';

import Client from '../../../models/Client.js';
import { ClientType } from '../../types/client.js';

export const clients = {
  type: new GraphQLList(ClientType),
  resolve(parent, args) {
    return Client.find();
  },
};
