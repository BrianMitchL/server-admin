const isLinux = require('is-linux');
const cp = require('child_process');

module.exports = function (command, service, cb) {
  const cmd = `systemd ${command} ${service}`;

  if(!isLinux()) {
    console.error('unsupported OS for systemd command');
    cb('unsupported OS');
  }

  cp.exec(cmd, function (err, stdout, stderr) {
    cb(err, stdout, stderr);
  });
};
