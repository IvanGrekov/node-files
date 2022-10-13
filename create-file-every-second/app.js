import { createFileNameInLogFormat, logSuccess, logError } from './utils/loggers.utils.js';
import { createFilePath } from './utils/path.utils.js';
import { createFile, createFileWithPromise } from './utils/files.utils.js';

setInterval(async () => {
    const currentDate = new Date();
    const timestamp = `${+currentDate}`;
    const fileName = createFileNameInLogFormat(currentDate);
    const filePath = createFilePath(fileName);

    // createFile({
    //     filePath,
    //     content: `${timestamp}`,
    //     onSuccess: () => logSuccess(timestamp, fileName),
    // });

    await createFileWithPromise(filePath, timestamp)
        .then(() => logSuccess(fileName))
        .catch((error) => logError(error));

    // console.log('After');
}, 1000);
