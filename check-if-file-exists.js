import path from 'path';
import fs from 'fs';

//#region reading nonexistent file
// const filePath = path.resolve('./xx');

// const reader = (err, data) => {
//     if (err.code === 'ENOENT') {
//         console.error('No such file or directory');
//         return;
//     }

//     if (err.code === 'EISDIR') {
//         console.error('Is a directory');
//         return;
//     }

//     console.log(data);
// };

// fs.readFile(filePath, 'utf-8', reader);
//#endregion

//#region check if file exists #1 variant
// const filePath = path.resolve('./test.txt');

// const fileExists = fs.existsSync(filePath);

// console.log(fileExists);
//#endregion

//#region check if file exists #2 variant
// const filePath = path.resolve('./test.txt');

// fs.exists(filePath, (fileExists) => {
//     console.log(fileExists);
// });

// console.log('After');
//#endregion
