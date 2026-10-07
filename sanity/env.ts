// Project ID and dataset are public values; env vars override them per environment.
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-10-01';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '3x1jdne9';
