/* eslint-disable prefer-arrow-callback */
Package.describe({
    name: 'skadmin:meteor-desktop-watcher',
    version: '3.0.1',
    summary: 'Watches .desktop dir and triggers rebuilds on file change.',
    git: 'https://github.com/sharekey/meteor-desktop',
    documentation: 'README.md',
    debugOnly: true
});

Npm.depends({
    chokidar: '3.5.3'
});

Package.onUse(function onUse(api) {
    api.versionsFrom('METEOR@1.3.3');
    api.use('ecmascript');
    api.use([
        'skadmin:meteor-desktop-bundler@2.3.0',
    ], ['server'], {
        weak: true
    });
    api.addFiles([
        'watcher.js'
    ], 'server');
});
