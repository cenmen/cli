import { resolve } from 'path';

export const SERVER_DOMAIN = 'http://localhost:6800';
export const FILES_PATH: string = resolve(__dirname, '../../files');
export const DOCS_PATH: string = resolve(FILES_PATH, './docs');
export const IMAGES_PATH: string = resolve(FILES_PATH, './images');

export const getRequirePath = (filename) => {
  const IMAGE_PATTERN = /.(png|jpg)$/;
  const DOC_PATTERN = /.(doc|docx)$/;
  if (IMAGE_PATTERN.test(filename)) {
    return { path: IMAGES_PATH, type: 'images' };
  } else if (DOC_PATTERN.test(filename)) {
    return { path: DOCS_PATH, type: 'docs' };
  } else {
    return { path: FILES_PATH, type: '' };
  }
};
