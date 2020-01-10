global.requestAnimationFrame = function (callback) {
    setTimeout(callback, 0);
};

process.env.PUBLIC_URL = '';