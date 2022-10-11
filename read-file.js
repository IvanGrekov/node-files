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
