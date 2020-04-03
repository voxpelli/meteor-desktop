/* eslint-disable no-console */
import path from 'path';

import addScript from './utils/addScript';
/**
 * This script adds a 'desktop' entry to 'scripts' in package.json. If the entry already exists
 * it leaves it untouched.
 */

const backward = level => Array(level).fill('..');
const packageJsonPath = level => path.resolve(path.join(__dirname, ...backward(level), 'package.json'));
const addScriptTo = packageJson => addScript('desktop', 'meteor-desktop', packageJson);

let level = 5;

try {
    addScriptTo(packageJsonPath(level));
} catch (e) {
    try {
        // eslint-disable-next-line no-plusplus
        addScriptTo(packageJsonPath(--level));
    } catch (x) {
        console.error('[meteor-desktop] failed to add meteor-desktop to your package.json scripts, ' +
            'please add it manually as \'desktop\': \'meteor-desktop\'');
        process.exit(0);
    }
}

console.log('[meteor-desktop] successfully added a \'desktop\' entry to your package.json' +
    ' scripts section.');
