const loginObject = require('./loginObject');

class LoginActions {
    async login (username, password) {
         await loginObject.inputUsername.setValue(username);
         await loginObject.inputPassword.setValue(password);
         await loginObject.btnSubmit.click();
    }

    async openMenu() {
        await loginObject.btnHamburger.click();
    }

      async closeMenu() {
        await loginObject.btnClose.click();
    }

    async resetAppState() {
        await loginObject.resetAppSidebar.click();
    }

     async handleLogout() {
        await loginObject.btnLogout.click();
    }
}

module.exports = new LoginActions();