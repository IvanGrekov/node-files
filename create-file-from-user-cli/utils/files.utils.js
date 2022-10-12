import path from 'path';
import fs from 'fs';

export const writeFile = (filename, content) => {
    const filePath = path.resolve(`./create-file-from-user-cli/public/${filename}.txt`);

    return new Promise((resolve) => {
        fs.writeFile(filePath, content, resolve);
    });
};
