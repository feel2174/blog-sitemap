const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('target="_blank"')) {
                content = content.replace(/target="_blank"/g, '');
                content = content.replace(/rel="noopener noreferrer"/g, '');
                content = content.replace(/rel="noreferrer noopener"/g, '');
                content = content.replace(/rel="noopener"/g, '');
                content = content.replace(/rel="noreferrer"/g, '');
                // Clean up any double spaces left behind
                content = content.replace(/  +/g, ' ');
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Replaced in', fullPath);
            }
        }
    }
}

replaceInDir(path.join(__dirname, 'src'));
console.log('Done!');
