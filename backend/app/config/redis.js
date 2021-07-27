let redis = require("redis");
client = redis.createClient({
    host: "redis-19503.c1.us-east1-2.gce.cloud.redislabs.com",
    port: 19503,
    password: "redispass",
  });

client.on("error", (error) => {
    console.log(error);
});

module.exports = client;