const http = require('http');
const url = require('url');
const _static = require('node-static');
const poweroff = require('power-off');
const systemd = require('./systemd');
const uptime = require('./uptime');

const port = 80;

const fileServer = new _static.Server(__dirname + '/dist');
const server = http.createServer();

server.on('request', function (req, res) {
  const route = url.parse(req.url).pathname;

  if (req.method === 'GET' && route === '/uptime') {
    return uptime((err, stdout, stderr) => {
      res.statusCode = err ? 500 : 200;
      res.end(err ? err.toString() : stdout);
    });
  }

  if (req.method === 'GET' && route === '/power-off') {
    return poweroff((err, stdout, stderr) => {
      res.statusCode = err ? 500 : 200;
      res.end(err ? err.toString() : stdout);
    });
  }

  if (req.method === 'GET' && route === '/restart-plex') {
    return systemd('restart', 'plexmediaserver', (err, stdout, stderr) => {
      res.statusCode = err ? 500 : 200;
      res.end(err ? err.toString() : stdout);
    });
  }

  if (req.method === 'GET') {
    return fileServer.serve(req, res);
  }
  res.statusCode = 400;
  res.end('Invalid route.');
});

server.listen(port, function () {
  process.stdout.write(`Listening on port ${port}.\n`)
});
