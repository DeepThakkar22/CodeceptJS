Feature('CodeceptJS Framework Test for eTalente Login');

Scenario('Login Failed Test',  ({ I }) => {
    I.amOnPage('https://etalente.co.za');

    I.click('Log In');

    I.fillField('username', 'deep.thakkar22@gmail.com');
    I.fillField('password', secret('Deep'));

    I.pressKey('Login');

    I.see('Invalid credentials provided');
    
});

Scenario('Login Successful Test', ({ I }) => {
    I.amOnPage('https://etalente.co.za');

    I.click('Log In');

    I.fillField('username', 'deep.thakkar22@gmail.com');
    I.fillField('password', secret('Loginid@01'));

    I.pressKey('Login');
    I.amOnPage('https://etalente.co.za/talent/job-list'); 
});
