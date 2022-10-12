import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./created-test.txt');

//#region write file
// const writer = (err) => {
//     if (err) {
//         console.error(err);
//     }
// };

// fs.writeFile(filePath, 'World, hello!\n123', writer);
//#endregion

//#region append file
// const appender = (err) => {
//     if (err) {
//         console.error(err);
//     }
// };

// fs.appendFile(filePath, '\n789', appender);
//#endregion

//#region append file for not existing file
// const someFilePath = path.resolve('./testffffff-created-test.txt');

// const appender = (err) => {
//     if (err) {
//         console.error(err);
//     }
// };

// fs.appendFile(someFilePath, '\n789', appender); // will create a fil anyway
//#endregion
