import { GraphQLID } from 'graphql';

import Project from '../../../models/Project.js';
import { ProjectType } from '../../types/project.js';

export const project = {
  type: ProjectType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Project.findById(args.id);
  },
};
