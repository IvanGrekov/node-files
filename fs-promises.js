import path from 'path';
import fs from 'fs/promises';

//#region read file with fs/promise using then/catch
// const filePath = path.resolve('./test.txt');

// fs.readFile(filePath, 'utf-8').then(console.log).catch(console.error);
//#endregion

//#region read file with fs/promise using async/await
// const filePath = path.resolve('./test.txt');

// (async () => {
//     try {
//         const result = await fs.readFile(filePath, 'utf-8');

//         console.log(result);
//     } catch (err) {
//         console.error(err);
//     }
// })();
//#endregion

//#region write file with fs/promise using then/catch
// const filePath = path.resolve('./public/test.txt');

// fs.writeFile(filePath, 'Test Test').catch(console.error);
//#endregion

//#region apend file with fs/promise using then/catch
// const filePath = path.resolve('./public/test-test.txt');

// fs.appendFile(filePath, 'Test Test').catch(console.error);
//#endregion

//#region we can't check if file exists
// const filePath = path.resolve('./public/test-test.txt');

// fs.exists(filePath).then(console.log).catch(console.error);
//#endregion
