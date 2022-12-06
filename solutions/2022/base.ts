import * as fs from 'fs';

async (fileName: string) => {
    const file = fs.readFileSync(fileName, 'utf8');
    console.log(file);
}