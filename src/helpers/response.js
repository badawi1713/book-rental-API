const crypto = require("crypto");

module.exports = {
  response: (res, message, result, status, error) => {
    let resultPrint = {};
    resultPrint.error = error || false;
    resultPrint.status = status || 200;
    resultPrint.message = message || null;
    resultPrint.result = result || [];
    return res.status(resultPrint.status).json(resultPrint);
  },
  responsePagination: (res, message, status, error, pageDetail, data) => {
    let resultPrint = {};
    resultPrint.status = status || 200;
    resultPrint.error = error || false;
    resultPrint.message = message || null;
    resultPrint.pageDetail = pageDetail || {};
    resultPrint.data = data || {};

    return res.status(resultPrint.status).json(resultPrint);
  },
  getRandomSalt: length => {
    return crypto
      .randomBytes(Math.ceil(length * 4))
      .toString("hex")
      .slice(0, length); //generate password salt
  },
  setPassword: (password, salt) => {
    let hashPassword = crypto.createHmac("sha256", salt);
    hashPassword.update(password);
    let value = hashPassword.digest("hex");
    return {
      salt: salt,
      passwordHash: value
    };
  }
};
