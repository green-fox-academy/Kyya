export const ADD_TAG = 'ADD_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export const REMOVE_ALL_TAGS = 'REMOVE_ALL_TAGS';

export function addTag(tag = "default") {
  return { type: ADD_TAG, tag };
}

export function removeTag(tag) {
  return { type: REMOVE_TAG, tag};
}

export function removeAllTags() {
  return { type: REMOVE_ALL_TAGS };
}
