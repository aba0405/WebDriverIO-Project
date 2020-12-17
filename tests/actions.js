import {short} from '../lib/timeouts'

describe('Browser Actions', () =>{
 it('Inputs', () => {
   browser.url('https://devexpress.github.io/testcafe/example/')
   const input = $('#developer-name')
   input.waitForExist()
   input.setValue('Mike')
   browser.pause(short)
   input.clearValue()
   browser.pause(short)
   input.addValue('Roger')
   browser.pause(short)
 })

 it('Click', () => {
  const buttonPopulate = $('#populate')
  buttonPopulate.waitForExist()
  buttonPopulate.click()
 })

 it('Checkbox & RadioButton', () => {
  const radioButton = $('#linux')
  radioButton.waitForExist()
  radioButton.click()
  browser.pause(short)

  const checkBox = $('#remote-testing')
  checkBox.waitForExist()
  checkBox.click()
  browser.pause(short)
 })

 it('Select Box', () => {
  const select = $('#preferred-interface')
  select.waitForExist()
  select.selectByVisibleText('JavaScript API')
  browser.pause(short)
 })
})