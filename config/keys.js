const NODECACHE = require('node-cache');
const CACHE_SERVICE = require('./../config/cache');
exports.CACHE = new CACHE_SERVICE();

exports.keys = {
  mongoURI:
    //"mongodb://mapevir_user:7j0cRn2kY4@46.4.170.146:27017/mapevir_db",
    // "mongodb://mapevir_user:dsoewe_43r@mapnacar.ir:27017/mapevir_db",
    "mongodb://10.19.1.8:27017/dashboard_db",
  secretOrKey: "secret"
};

// exports.cache = (function () {

//   const NODE_CACHE = new NODECACHE();
//   const setCache = (key, value) => {
//     NODE_CACHE.set(key, value);
//   }

//   const setMultiCache = (...args) => {
//     NODE_CACHE.mset(args);
//   }

//   const getCache = (key) => {
//     return NODE_CACHE.get(key);
//   }

//   return {
//     setCache,
//     setMultiCache,
//     getCache
//   }

// })();

