import { Writer } from './types';
import { marketingWriters } from './marketing-writers';
import { leadershipWriters } from './leadership-writers';
import { productivityWriters } from './productivity-writers';
import { thoughtLeaders } from './thought-leaders';
import { businessCoaches } from './business-coaches';

// Re-export the Writer type with the correct syntax
export type { Writer } from './types';

export const writers: Writer[] = [
  ...marketingWriters,
  ...leadershipWriters,
  ...productivityWriters,
  ...thoughtLeaders,
  ...businessCoaches
];

// Export individual categories for specific use cases
export {
  marketingWriters,
  leadershipWriters,
  productivityWriters,
  thoughtLeaders,
  businessCoaches
};