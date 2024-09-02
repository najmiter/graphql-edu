import { GraphQLList } from 'graphql';

import Project from '../../../models/Project.js';
import { ProjectType } from '../../types/project.js';

export const projects = {
  type: new GraphQLList(ProjectType),
  resolve(parent, args) {
    return Project.find();
  },
};
