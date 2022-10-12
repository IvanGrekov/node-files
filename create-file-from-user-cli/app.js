import { defineFileName, defineFileContent } from './utils/questions.utils.js';
import { writeFile } from './utils/files.utils.js';
import terminalInterface from './terminalInterface.js';

const fileName = await defineFileName();
console.log('\n');
const fileContent = await defineFileContent();

const writingFileError = await writeFile(fileName, fileContent);

console.log('\n------------\n');
console.log(writingFileError || 'Success\n');

terminalInterface.close();
