const { exec } = require('child_process');

exec('yarn');
console.log('test');
exec('yarn build');
process.exit(0);

