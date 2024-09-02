import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { client } from './actions/queries/client.js';
import { project } from './actions/queries/project.js';
import { clients } from './actions/queries/clients.js';
import { projects } from './actions/queries/projects.js';
import { addClient } from './actions/mutations/client.add.js';
import { addProject } from './actions/mutations/project.add.js';
import { deleteClient } from './actions/mutations/client.delete.js';
import { deleteProject } from './actions/mutations/project.delete.js';
import { updateProject } from './actions/mutations/project.update.js';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    projects,
    project,
    clients,
    client,
  }),
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    deleteClient,
    addClient,

    addProject,
    deleteProject,
    updateProject,
  }),
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation,
});

export default schema;
