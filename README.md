# Login demo app 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
### `npm start`

make sure node and npm are installed in your machine.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## users to login
Below are the user / password credentials to login:
- Alex / 12345!
- Brad / 12345!
- James / 12345!
- Julia / 12345!
- Kuldeep / 12345!
- Maria / 12345!

## App structure

![Screenshot 2022-06-10 at 19 34 40](https://user-images.githubusercontent.com/36533806/173120692-f7f0b2b2-29fd-4152-bb82-e0446962701f.png)

App structure is pretty simple. All components live in src/components folder.\
The backend services are mocked in same repo. They are in src/service folder.

## App Root

![Screenshot 2022-06-10 at 19 37 59](https://user-images.githubusercontent.com/36533806/173121162-5cacefd2-f0a9-449a-bc2a-5852a04d358c.png)

The App root looks like above (App.jsx file).
 - The header is always visible.
 - The welcome and private content is mounted based on user login status.

### Backend service

- Backend service is mocked in src/services.js file.
- The users list is stored as sorted by names. A real DB would also store rows in sorted (indexed) ways.
- This will allow to search users using efficient ways - for example, binary search is used in this file.

## Third party libs

Chakra UI is used for UI components.
- Biggest component is Modal which shows login form. Forms are usually complicated components and hence third party UI makes it easier to implement.

## Input validation and calling mock apis

- validation

![Screenshot 2022-06-10 at 19 59 19](https://user-images.githubusercontent.com/36533806/173124442-c3eecfd0-0ed1-476e-885b-22c064dd8896.png)


- calling mock api

![Screenshot 2022-06-10 at 19 57 05](https://user-images.githubusercontent.com/36533806/173124185-b3aa4cd4-4464-4cdb-978c-9629395167ff.png)


- Here in src/LoginForm.jsx file, when user press login or press enter on password field, the `getUserLogin` function is called.
- The function will make login button in loading state and call the asynchronous backend `loginService`.
- When resolved, the login loading will be removed and error will be shown if returned from api.
- When login api is successful, the login window will be removed and Private content will be shown.
