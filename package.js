Package.describe({
    name: 'risul:caret',
    summary: 'Meteor package for Caret.js - Get caret postion and offset from text field',
    version: '0.2.2',
    git: 'https://github.com/risul/meteor-caret'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.0');
    api.use("jquery", "client");
    api.addFiles('lib/jquery.caret.js', ['client']);
});