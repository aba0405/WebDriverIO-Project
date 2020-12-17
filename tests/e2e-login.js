import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'

describe('E2E Tests - Login / Logout Flow', () =>{
 it('should not login with invalid credentials', () =>{
    //browser.url('http://zero.webappsecurity.com/')
    App.openHomepage()
    $('#signin_button').waitForExist()
    $('#signin_button').click()
   //  $('#login_form').waitForExist()
   //  $('#user_login').setValue('invalid')
   //  $('#user_password').setValue('invalid')
   //  $('input[type="submit"]').click()
    LoginPage.formIsVisible()
    LoginPage.fillForm('invalid username', 'invalid password')
    LoginPage.submitForm()
    const error = $('.alert-error')
    expect(error).toHaveText('Login and/or password are wrong.')
 })

  it('should login with invalid credentials', () =>{
     browser.url('http://zero.webappsecurity.com/index.html')
     $('#signin_button').waitForExist()
   //   $('#signin_button').click()
   //   $('#login_form').waitForExist()
   //   $('#user_login').setValue('username')
   //   $('#user_password').setValue('password')
   //   $('input[type="submit"]').click()
    LoginPage.formIsVisible()
    LoginPage.fillForm('invalid username', 'invalid password')
    LoginPage.submitForm()
    const error = $('.alert-error')
     $('.nav-tabs').waitForExist()
 })

   it('should logout from app', () =>{
     $('.icon-user').waitForExist()
     $('.icon-user').click()
     $('#logout_link').waitForExist()
     $('#logout_link').click()
     $('#pages-nav').waitForExist()
 })
})