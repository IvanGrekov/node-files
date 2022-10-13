import path from 'path';

export const createFilePath = (fileName) => {
    return path.resolve(`./create-file-every-second/public/${fileName}`);
};
