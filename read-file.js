import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./test.txt');

//#region read file #1 variant
// fs.readFile(filePath, (error, data) => {
//     if (error) {
//         console.error(error);

//         return;
//     }

//     console.log(data.toString('utf-8'));
// });
//#endregion

//#region read file #2 variant
// const reader = (error, data) => {
//     if (error) {
//         console.error(error);

//         return;
//     }

//     console.log(data);
// };

// fs.readFile(filePath, { encoding: 'utf-8' }, reader);
//#endregion

//#region read file #2 variant
// const reader = (error, data) => {
//     if (error) {
//         console.error(error);

//         return;
//     }

//     console.log(data);
// };

// fs.readFile(filePath, 'utf-8', reader);
//#endregion

//#region remove file
// fs.unlink(filePath, (err) => {
//     if (err) {
//         console.error(err);
//     }

//     console.log(`${filePath} removed`);
// });
//#endregion

//#region move file
// const newFilePath = path.resolve('./test-test-test.txt');

// fs.rename(filePath, newFilePath, (err) => {
//     if (err) {
//         console.error(err);
//     }
//
//     console.log(`${filePath} moved to ${newFilePath}`);
// });
//#endregion

//#region copy file
// const newFilePath = path.resolve('./test-test-test.txt');

// fs.copyFile(filePath, newFilePath, (err) => {
//     if (err) {
//         console.error(err);
//     }

//     console.log(`${newFilePath} created`);
// });
//#endregion
