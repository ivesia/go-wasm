let outputBuf = "";
const decoder = new window.TextDecoder("utf-8");

const utils = {
    performance: window.performance,
    crypto: window.crypto,
    TextEncoder: window.TextEncoder,
    TextDecoder: window.TextDecoder,

    fs: {
        constants: {
            O_WRONLY: -1,
            O_RDWR: -1,
            O_CREAT: -1,
            O_TRUNC: -1,
            O_APPEND: -1,
            O_EXCL: -1
        }, // unused

        writeSync(fd, buf) {
            outputBuf += decoder.decode(buf);
            const nl = outputBuf.lastIndexOf("\n");
            if (nl !== -1) {
                console.log(outputBuf.substr(0, nl));
                outputBuf = outputBuf.substr(nl + 1);
            }
            return buf.length;
        },

        write(fd, buf, offset, length, position, callback) {
            if (offset !== 0 || length !== buf.length || position !== null) {
                throw new Error("not implemented");
            }
            const n = this.writeSync(fd, buf);
            callback(null, n);
        },

        open(path, flags, mode, callback) {
            const err = new Error("not implemented");
            err.code = "ENOSYS";
            callback(err);
        },

        fsync(fd, callback) {
            callback(null);
        }
    }
};

module.exports = utils;
