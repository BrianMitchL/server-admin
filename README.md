# server-admin

A simple tool to manage server tasks.

This is designed for my Linux server running Plex Media Server. It uses the command `uptime`, `shutdown`, and `systemd`. This should be run from a user that has the privilege to run all of these commands without a password. There are probably horrible things going on in terms of security, but I will only run this on a local network so ¯\\\_(ツ)\_/¯

## Build Frontend Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Build Backend Setup

```bash
# install dependencies
npm install

# build for production with minification
npm run build

# serve frontend throut server
npm run serve
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Run via systemd

If you want to run this from systemd:

```bash
# install dependencies
npm install -g forever service-systemd
```

Edit `service.json` to fit your needs.

Follow the instructions [in the documentation](https://github.com/simone-sanfratello/node-service-systemd) to properly run the service.
