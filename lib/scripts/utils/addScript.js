import fs from 'fs';

function readJsonFile(jsonFilePath) {
    return JSON.parse(fs.readFileSync(jsonFilePath, 'UTF-8'));
}

function writeJsonFile(jsonFilePath, jsonContents) {
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonContents, null, 2));
}

export default function addScript(name, script, packageJsonPath) {
    const packageJson = readJsonFile(packageJsonPath);

    if (!('scripts' in packageJson)) {
        packageJson.scripts = {};
    }

    if (!(name in packageJson.scripts)) {
        packageJson.scripts[name] = script;
    }

    return writeJsonFile(packageJsonPath, packageJson);
}
