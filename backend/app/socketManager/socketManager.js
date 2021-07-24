const io = require('./../../server').io;
const { addUsersToListRedis, removeUsersFromListRedis} = require('./../models/heartbeat.model');
const { saveChats } = require('./../models/common.model');

const { getTime } = require('./../helper');

module.exports = (Socket) => {
    try{
        console.log("Connected");
        Socket.on("join-user", (data, callback) => {
            const { createdAt, name, profileImg, sessionId, updatedAt, _id} = data;
            const currentTime = getTime();
            const newUser ={
                createdAt,
                name,
                profileImg,
                sessionId,
                updatedAt: currentTime,
                _id
            };

            removeUsersFromListRedis(`WC:user:OFF`, sessionId);

            addUsersToListRedis(
               `WC:user:ON`,
               sessionId,
               { time: currentTime },
               (e, r) => {
                   if(e) return callback(e);
                   console.log('new user join', r);
                   Socket.sessionId = sessionId;
                   Socket.join(sessionId);
                   Socket.broadcast.emit("new-online-user", newUser);
                   callback();
               }
            );
        });

        Socket.on("send-msg", async (data, callback) => {
            const { senderId, receiverId, msg} = data;
            const chatObj = {
                room: [receiverId, senderId],
                senderId,
                receiverId,
                msg,
                time: getTime()
            }
            await saveChats(chatObj);
            io.to(receiverId).emit("receive-msg", chatObj);
            callback(chatObj);
        });

        Socket.on("user-typing", async (data, callback) => {
            const { senderId, receiverId, msg } = data;
            const chatObj = {
                room: [receiverId, receiverId],
                senderId,
                receiverId,
                msg,
                time: getTime()
            }
            io,to(receiverId).emit("user-typing", chatObj);
            callback(data);
        });

        Socket.on("disconnected", () => {
            const { sessionId } = Socket;
            if(sessionId) {
                removeUsersFromListRedis(`WC:user:ON`, sessionId);
                const offlineUser = {
                    time: getTime(),
                    sessionId
                }
                addUsersToListRedis(`WC:user:OFF`, sessionId, offlineUser, (e, r) => {
                    console.log("user left", r);
                });
                Socket.broadcast.emit("new-offline-user", offlineUser)
            }
        });
    } catch(ex){
        console.log(ex,message);
    }
};