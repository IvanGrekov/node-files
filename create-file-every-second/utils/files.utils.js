import fs from 'fs';
import fsPromises from 'fs/promises';

import { logError } from './loggers.utils.js';

export const createFile = ({ filePath, content, onSuccess }) => {
    fs.writeFile(filePath, content, (error) => {
        if (error) {
            logError(error);
        }

        onSuccess?.();
    });
};

export const createFileWithPromise = (filePath, content) => {
    return fsPromises.writeFile(filePath, content);
};
