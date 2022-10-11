import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./created-test.txt');

//#region write file
// const writer = (err, data) => {
//     if (err) {
//         console.error(err);

//         return;
//     }

//     console.log(data); //undefined
// };

// fs.writeFile(filePath, 'World, hello!\n123', writer);
//#endregion

//#region append file
// const appender = (err, data) => {
//     if (err) {
//         console.error(err);

//         return;
//     }

//     console.log(data);
// };

// fs.appendFile(filePath, '\n456', appender);
//#endregion

//#region append file for not existing file
// const someFilePath = path.resolve('./test-created-test.txt');

// const appender = (err, data) => {
//     if (err) {
//         console.error(err);

//         return;
//     }

//     console.log(data);
// };

// fs.appendFile(someFilePath, '\n789', appender); // will create a fil anyway
//#endregion
