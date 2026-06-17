const http = require('http');
const MTProtoProxy = require('telegram-mtproto-proxy');

// 1. Web server to keep Render happy
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Proxy Alive\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT);

// 2. Launch MTProto Proxy on port 443
const proxy = new MTProtoProxy({
  port: 443,
  secret: 'b0a551ac8b1b11e29e910242ac110002' // Simple 32-character hex secret
});
proxy.start();
