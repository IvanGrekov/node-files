import readline from 'readline';

const terminalInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export default terminalInterface;
