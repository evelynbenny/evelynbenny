
class LoginPage {

    navigate() {
        cy.visit('https://stage.blendedsense.com/dashboard')
    }
    
    enterEmail(username) {
        cy.get('input[placeholder="Email Address"]')
            .clear()
            .type(username);
        return this
    }
    
    enterPassword(pswd) {
        cy.get('input[placeholder="Password"]')
            .clear()
            .type(pswd)
        return this
    }
    
    submit() {
        cy.get('button[type="submit"]').click()
        return this
    }
    
    }
    
    export default LoginPage