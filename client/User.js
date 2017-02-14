"use strict";
var User = (function () {
    function User(_id, email, name, password, status) {
        if (_id === void 0) { _id = null; }
        if (email === void 0) { email = null; }
        if (name === void 0) { name = null; }
        if (password === void 0) { password = null; }
        if (status === void 0) { status = null; }
        this._id = _id;
        this.email = email;
        this.name = name;
        this.password = password;
        this.status = status;
    }
    ;
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map