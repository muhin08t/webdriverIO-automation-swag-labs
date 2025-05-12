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
}
module.exports = new LoginObject();