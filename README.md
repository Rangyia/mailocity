Mail client built for mobile and web on MERN stack.

# :zap: Mailocity

* React/React-Native Express Node MySQL Redis (MERN) full-stack app, integrates React/React-Native frontend with Node.js backend that is deployed to Heroku. Mail client built for mobile and web on MERN stack.
*** Note: to open web links in a new window use: _ctrl+click on link_ /  _cmd+click on link_**

## :books: General info


### Backend

* Husky, ESLint, and Prettier are configured to handle safe commits
* MySQL needs to be installed and running - I started it from my Mac using MySQL 8.0.27 option 'Homebrew shell (brew install mysql)'
* Redis needs to be installed for blacklisting access tokens
* Postman used to test the API endpoints on backend

### Frontend

* Frontend structure follows a loose structure of MVVM (View, View Model, Model) structure
* Separation of business logic on the views allow for isolated testing
* Views contain the UI (the screen)
* Models contain the business logic of similar to hooks, but are strictly coupled with specific screens
## :signal_strength: Technologies - Backend

* [TypeScript](https://nodejs.dev/learn/nodejs-with-typescript) Open-source language maintained by Microsoft for type-safe JavaScript
* [Homebrew Installer](https://formulae.brew.sh/formula/mysql) brew install mysql
* [Express.js middleware v4](https://expressjs.com/) npm install express
* [Node.js v15](https://nodejs.org/es/)
* [Nodemon](https://www.npmjs.com/package/nodemon) npm module so backend server will automatically restart after code changes
* [Postman API](https://www.postman.com/downloads/) to simulate a frontend

## :signal_strength: Technologies - Frontend

* [React framework v17](https://reactjs.org/)
* [React Native framework v0.65](https://reactjs.org/)
