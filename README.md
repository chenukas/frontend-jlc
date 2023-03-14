# Jean's Lab Collection - Handmade Crafts (Frontend)

This is the frontend implementation of 'Jean's LC.' handmade craft shop

### How to setup

1. Clone this repository
2. Run `yarn install`inside root folder
3. Create .env file and add 
    * REACT_APP_FIREBASE_CONFIG
        This properties can be found inside Firebase console (Project-Web Service)
4. Run `yarn start` command to run the project
    Appication will be serving on `localhost:3000`

### How to test

* Run `yarn test` inside root folder

* For UI testing,
    * Create an account/use credentials provided
        * Admin:
            `username: adminuser`
            `password: adminuser`
        * User
            `username: customeruser`
            `password: customeruser`
            
### CI/CD, Deployment

* GitHub Workflow is created to deploy the application automatically to Firebase using GitHub actions
* Hosted URL : [https://jeans-lc-827af.web.app/]
* SonarCloud is configured to scan every pull request before merge
* SonarCloud report : [https://sonarcloud.io/summary/overall?id=chenukas_frontend-jlc]