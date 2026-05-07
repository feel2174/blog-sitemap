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
            let modified = false;

            if (content.includes('setShowInterstitial(true)')) {
                // Replace setTargetLink(url); setShowInterstitial(true); with immediate redirect
                content = content.replace(/setTarget[a-zA-Z]*\(([^)]+)\);\s*setShowInterstitial\(true\);/g, 'window.location.href = $1;\n    return;');
                
                // If any setShowInterstitial(true); is still there without the setTarget prefix
                content = content.replace(/setShowInterstitial\(true\);/g, '/* interstitial disabled */');
                modified = true;
            }
            
            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Replaced in', fullPath);
            }
        }
    }
}

replaceInDir(path.join(__dirname, 'src'));
console.log('Done!');
