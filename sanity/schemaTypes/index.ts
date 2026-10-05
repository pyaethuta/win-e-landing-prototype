import type { SchemaTypeDefinition } from 'sanity';
import { articleType } from './article';
import { projectType } from './project';

export const schemaTypes: SchemaTypeDefinition[] = [projectType, articleType];
