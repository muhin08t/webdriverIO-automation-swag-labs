class LoginObject {
    get inputUsername () {
        return $('#user-name')
    }

    get inputPassword () {
        return $('#password')
    }

    get btnSubmit () {
        return $('#login-button')
    }

     get btnHamburger () {
        return $('#react-burger-menu-btn')
    }

      get btnClose () {
        return $('#react-burger-cross-btn')
    }

     get resetAppSidebar () {
        return $('#reset_sidebar_link')
    }

     get btnLogout () {
        return $('#logout_sidebar_link')
    }
}
module.exports = new LoginObject();