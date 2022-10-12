import terminalInterface from '../terminalInterface.js';

export const askQuestion = (question) => {
    return new Promise((resolve) => {
        terminalInterface.question(`${question}`, (answer) => {
            resolve(answer);
        });
    });
};

export const askRequiredQuestion = async (question, entityName) => {
    let result = await askQuestion(question);

    while (!result) {
        console.log(`\nTo continue, enter the ${entityName}, please`);

        result = await askQuestion(question);
    }

    return result;
};

export const defineFileName = async () => {
    let fileName = await askRequiredQuestion('What is the file name? ', 'file name');

    return fileName;
};

export const defineFileContent = async () => {
    let fileContent = await askRequiredQuestion('What is the file content?\n', 'file content');

    return fileContent;
};
