const redisClient = require('../config/redis');

exports.addUsersToListRedis = (key, subKey, value, callBack) => {
    redisClient.HMSET(key, subKey, JSON.stringify(value), (err, res) => {
        return callBack(err, res);
    });
};

exports.removeUsersFromListRedis = (key, subKey) => {
    redisClient.HDEL(key, subKey);
};

exports.getOfflineUserInfo = (key, subKey, callBack) => {
    redisClient.HGET(key, subKey, (err, res) => {
        callBack(err, res);
    });
};