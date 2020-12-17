import {short, medium, long} from '../lib/timeouts'
import {mobile, tablet, desktop} from '../lib/devices'

describe('First Steps with WebdriverIO', () =>{
  it('Load the Website', () => {
   browser.url('https://webdriver.io/')
   browser.pause(short)
   expect(browser).toHaveUrl('https://webdriver.io/')
   expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js')
  })

   it('Lets Read about WebDriverIO', () => {
   browser.url('https://webdriver.io/docs/gettingstarted.html')
   browser.pause(3000)
  })

   it('Project Title should be visible', () => {
    const h2 = $('h2')
    expect(h2).toBeVisible()
  })

  it('Check Get Started ', () => {
    const getStarted = $('a')
    expect(getStarted).toHaveLink('https://webdriver.io/')
  })

    it('Get Element Text ', () => {
      const text = $('h2').getText()
      const element = $('h2')
      element.waitForExist()
      expect(element).toHaveText("WebdriverIO")
  })

   it('Assert Attribute', () => {
    browser.url('https://devexpress.github.io/testcafe/example/')
    const button = $('#submit-button')
    expect(button).toHaveAttrContaining('type', 'submit')
  })

    it('Assert Value', () => {
    const button = $('#populate')
    expect(button).toHaveValue('Populate')
  })

  it('Save Screenshot', () => {
    browser.saveScreenshot('your-name.png')
    browser.pause(long)
  })

  it('Set Mobile view', ()=> {
    browser.setWindowSize(mobile[0], mobile[1])
    browser.pause(short)
  })

  it('Set Tablet view', ()=> {
    browser.setWindowSize(tablet[0], tablet[1])
    browser.pause(short)
  })

  it('Set Desktop view', ()=> {
    browser.setWindowSize(desktop[0], desktop[1])
    browser.pause(short)
  })
})