import terminalInterface from './terminalInterface.js';

export const askQuestion = (question) => {
    return new Promise((resolve) => {
        terminalInterface.question(`${question}`, (answer) => {
            resolve(answer);
        });
    });
};

export const askRequiredQuestion = async (questionCallback, entityName) => {
    let result = await questionCallback();

    while (!result) {
        console.log(`\nTo continue, enter the ${entityName}, please`);

        result = await questionCallback();
    }

    return result;
};

export const defineFileName = async () => {
    const askFileName = () => askQuestion('What is the file name? ');
    let fileName = await askRequiredQuestion(askFileName, 'file name');

    return fileName;
};

export const defineFileContent = async () => {
    const askFileContent = () => askQuestion('What is the file content?\n');
    let fileContent = await askRequiredQuestion(askFileContent, 'file content');

    return fileContent;
};
