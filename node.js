const fs = require("fs");
const crypto = require("crypto");
const util = require("util");

const utils = {
    performance: {
        now() {
            const [sec, nsec] = process.hrtime();
            return sec * 1000 + nsec / 1000000;
        }
    },

    crypto: {
        getRandomValues(b) {
            crypto.randomFillSync(b);
        }
    },

    TextEncoder: util.TextEncoder,
    TextDecoder: util.TextDecoder,
    fs
};

module.exports = utils;
