import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./test.txt');

//#region read file sync #1 variant
// try {
//     const data = fs.readFileSync(filePath, 'utf-8');

//     console.log(data);
// } catch (err) {
//     console.error(err);
// }
//#endregion

//#region read file sync #2 variant
// try {
//     const data = fs.readFileSync(filePath, { encoding: 'utf-8' });

//     console.log(data);
// } catch (err) {
//     console.error(err);
// }
//#endregion
