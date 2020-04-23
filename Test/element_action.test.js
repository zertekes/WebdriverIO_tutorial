internetPage = require('../pages/internet.page')

describe('Test element actions', function (){
    it('should click element', () => {
        browser.url('/')
        internetPage.clickOnLink()
        expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest')

    })

    it('should get text', () => {
        browser.url('/')
        expect(internetPage.getSpecificElementText(1)).equals('A/B Testing')
    })

    it('should click checkbox', () => {
        internetPage.clickLink(6)
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(true)

    })

    it('should unclick checkbox', () => {
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(false)

    })
    
    it('should enter username', () => {
        browser.url(`${browser.options.baseUrl}/login`)
        internetPage.enterUserName('Zoltan')
        assert.equal('Zoltan', internetPage.username.getValue())
    })

    it('should enter password', () => {
        browser.url(`${browser.options.baseUrl}/login`)
        internetPage.enterPassword('12345')
        assert.equal('12345', internetPage.password.getValue())
    })

    it('should clear value', () => {
        internetPage.username.click()
        internetPage.username.clearValue()
        assert.equal('', internetPage.username.getValue())
    })
    
})
 