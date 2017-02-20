const isLinux = require('is-linux');
const isMacOS = require('is-osx');
const cp = require('child_process');

module.exports = function (cb) {
  const cmd = `uptime`;

  if(!(isLinux() || isMacOS())) {
    throw new Error('Unsupported OS!');
  }

  cp.exec(cmd, function (err, stdout, stderr) {
    cb(err, stdout, stderr);
  });
};
