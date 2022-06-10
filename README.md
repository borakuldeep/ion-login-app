# Login demo app 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

## third party libs

Chakra UI is used for UI components.
- Biggest component is Modal which shows login form. Forms are usually complicated components and hence third party UI makes it easier to implement.
- The input validation and calling mock api is done in same src/LoginForm.jsx file.

## Input validation and calling mock apis

![Screenshot 2022-06-10 at 19 49 00](https://user-images.githubusercontent.com/36533806/173122948-b8080ceb-4244-46b5-9266-e07faf9f23cf.png)

- Here in src/LoginForm.jsx file, when user press login or press enter on password field, the `getUserLogin` function is called.
- The function will make login button in loading state and call the asynchronous backend function.
- When resolved, the login loading will be removed and error will be shown if returned from api.
- When login api is successful, the login window will be removed and Private content will be shown.
