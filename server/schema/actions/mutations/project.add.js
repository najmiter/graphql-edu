import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLEnumType,
} from 'graphql';

import Project from '../../../models/Project.js';
import { ProjectType } from '../../types/project.js';

export const addProject = {
  type: ProjectType,
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    status: {
      type: new GraphQLEnumType({
        name: 'ProjectStatus',
        values: {
          new: { value: 'Not Started' },
          completed: { value: 'Completed' },
          progress: { value: 'In Progress' },
        },
      }),
      defaultValue: 'Not Started',
    },
    clientId: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, args) {
    const project = new Project({
      name: args.name,
      status: args.status,
      clientId: args.clientId,
      description: args.description,
    });

    return project.save();
  },
};
