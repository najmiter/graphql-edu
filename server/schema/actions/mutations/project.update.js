import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLEnumType,
} from 'graphql';

import Project from '../../../models/Project.js';
import { ProjectType } from '../../types/project.js';

export const updateProject = {
  type: ProjectType,
  args: {
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    id: { type: GraphQLNonNull(GraphQLID) },
    status: {
      type: new GraphQLEnumType({
        name: 'UpdateProjectStatus',
        values: {
          new: { value: 'Not Started' },
          completed: { value: 'Completed' },
          progress: { value: 'In Progress' },
        },
      }),
    },
  },
  resolve(_, args) {
    return Project.findByIdAndUpdate(
      args.id,
      {
        $set: {
          name: args.name,
          status: args.status,
          description: args.description,
        },
      },
      { new: true }
    );
  },
};
