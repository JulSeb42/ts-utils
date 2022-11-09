"use strict";
exports.__esModule = true;
exports.getRandomAvatar = void 0;
var getRandomAvatar = function (gender) {
    var random = Math.floor(Math.random() * (114 - 1 + 1) + 1);
    var randomMf = Math.floor(Math.random() + 0.5);
    var mf = ["male", "female"];
    var genderPicture = gender === "male"
        ? "male"
        : gender === "female"
            ? "female"
            : mf[randomMf];
    return "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/".concat(genderPicture, "/").concat(random, ".png");
};
exports.getRandomAvatar = getRandomAvatar;
