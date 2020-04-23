internetPage = require('../pages/internet.page')

describe('WebdriverIO API Actions', function () {

    it('should hover on figure 1', () =>{
        browser.url(`${browser.options.baseUrl}/hovers`)
        internetPage.hoverOnFigure(3)
        assert.equal("name: user1", internetPage.getFigureDetailsText(3))
       
    })

    it('should hover on figure 2', () =>{
        browser.url(`${browser.options.baseUrl}/hovers`)
        internetPage.hoverOnFigure(4)
        assert.equal("name: user2", internetPage.getFigureDetailsText(4))
       
    })

    it('should hover on figure 3', () =>{
        browser.url(`${browser.options.baseUrl}/hovers`)
        internetPage.hoverOnFigure(5)
        assert.equal("name: user3", internetPage.getFigureDetailsText(5))
        
    })

    it('should send keyboard value Backspace', () =>{
        browser.url(`${browser.options.baseUrl}/key_presses`)
        internetPage.clickTarget()
        internetPage.sendKeyToTarget("Backspace")
        assert.equal("You entered: BACK_SPACE", internetPage.getResultText())
        
    })

    it('should send keyboard value Tab', () =>{
        browser.url(`${browser.options.baseUrl}/key_presses`)
        internetPage.clickTarget()
        internetPage.sendKeyToTarget("Tab")
        assert.equal("You entered: TAB", internetPage.getResultText())
        
    })

    it('should send keyboard value Space', () =>{
        browser.url(`${browser.options.baseUrl}/key_presses`)
        internetPage.clickTarget()
        internetPage.sendKeyToTarget(" ")
        assert.equal("You entered: SPACE", internetPage.getResultText())
        
    })

    it('should send keyboard value Shift', () =>{
        browser.url(`${browser.options.baseUrl}/key_presses`)
        internetPage.clickTarget()
        internetPage.sendKeyToTarget("Shift")
        assert.equal("You entered: SHIFT", internetPage.getResultText())
        
    })

})