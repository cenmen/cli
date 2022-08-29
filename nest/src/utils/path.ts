import { resolve } from 'path';

const SERVER_DOMAIN = 'http://localhost:6800';
const FILES_PATH: string = resolve(__dirname, '../../files');
const DOCS_PATH: string = resolve(FILES_PATH, './docs');
const IMAGES_PATH: string = resolve(FILES_PATH, './images');

const getRequirePath = (filename) => {
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

export { SERVER_DOMAIN, FILES_PATH, DOCS_PATH, IMAGES_PATH, getRequirePath };
