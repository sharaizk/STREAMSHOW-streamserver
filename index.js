const NodeMediaServer = require('node-media-server');

const config = {
  
  rtmp: {
    port: 443 ,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 80,
    allow_origin: '*'
  },
  https: {
    port: 80,
    key:'./privatekey.pem',
    cert:'./certificate.pem',
  }
};

var nms = new NodeMediaServer(config)
nms.run();
