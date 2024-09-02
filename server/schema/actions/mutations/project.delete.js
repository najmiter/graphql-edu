import { GraphQLID, GraphQLNonNull } from 'graphql';

import Project from '../../../models/Project.js';
import { ProjectType } from '../../types/project.js';

export const deleteProject = {
  type: ProjectType,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    return Project.findByIdAndDelete(args.id);
  },
};
