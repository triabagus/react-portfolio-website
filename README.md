<div align="center">    
    <h2>React Portfolio Website | Tria Bagus</h2>
    <a href="https://www.triabagus.site">
        <img src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg"></img>
    </a>
    <a href="https://github.com/triabagus/react-portfolio-website/fork">
        <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></img>
    </a>   
    <a href="https://www.paypal.me/triabagus/10">
        <img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=flat"></img>
    </a> 
</div>

# Start
```bash
BROWSER=chromium npm start
```
BROWSER can set for example: chrome, mozilla, etc.

# ENV
make new file .env
```bash  
REACT_APP_SERVICE_ID_EMAILJS=Your_ServiceId_EmailJS
REACT_APP_TEMPLATE_ID_EMAILJS=Your_TemplateId_EmailJS
REACT_APP_USER_ID_EMAILJS=Your_UserId_EmailJS
```

# Package
```bash 
npm install --save react-router-dom
npm install --save react-bootstrap bootstrap
npm install --save react-feather
npm install --save emailjs-com
```
# Helper 
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Icon: React Feather](https://github.com/feathericons/react-feather)
- [Email JS](https://www.emailjs.com/)

# Deploy
- [If you error this is solution first deploy because CI build configuration](https://community.netlify.com/t/new-ci-true-build-configuration-treating-warnings-as-errors-because-process-env-ci-true/14434) 

# Reference
- [Youtube: Garrett Love ](https://www.youtube.com/watch?v=tyXMy1nPIWc&list=PLnpdZyv-BjINbUjmTUsyziHz_4fa9hM5G&index=2)
- [Sidebar React Bootstrap](https://stackoverflow.com/questions/60482018/make-a-sidebar-from-react-bootstrap) 
- [Error send mail](https://stackoverflow.com/questions/55795125/how-to-send-email-from-my-react-web-application)
- [Variable Env return undefined](https://stackoverflow.com/questions/53237293/react-evironment-variables-env-return-undefined/53237511)
- [Preloader BUG](https://programmingwithmosh.com/react/create-react-loading-spinner/)

# React JS Default
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Updating to New Releases

Create React App is divided into two packages:

* `create-react-app` is a global command-line utility that you use to create new projects.
* `react-scripts` is a development dependency in the generated projects (including this one).

You almost never need to update `create-react-app` itself: it delegates all the setup to `react-scripts`.

When you run `create-react-app`, it always creates the project with the latest version of `react-scripts` so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of `react-scripts`, [open the changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md), find the version you’re currently on (check `package.json` in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the `react-scripts` version in `package.json` and running `npm install` in this folder should be enough, but it’s good to consult the [changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md) for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade `react-scripts` painlessly.

## Sending Feedback

We are always open to [your feedback](https://github.com/facebookincubator/create-react-app/issues).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Something Missing?

If you have ideas for more “How To” recipes that should be on this page, [let us know](https://github.com/facebookincubator/create-react-app/issues) or [contribute some!](https://github.com/facebookincubator/create-react-app/edit/master/packages/react-scripts/template/README.md)
