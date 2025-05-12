const loginObject = require('./loginObject');

class LoginActions {
    async login (username, password) {
         await loginObject.inputUsername.setValue(username);
         await loginObject.inputPassword.setValue(password);
         await loginObject.btnSubmit.click();
    }
}

module.exports = new LoginActions();