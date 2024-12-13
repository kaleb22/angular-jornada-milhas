# ✈️ Jornada Milhas

Jornada milhas is an Angular project developed to study a variety of Angular topics using the Angular material library.

## 🌟 Angular topics adressed

This project was developed using Angular v18 with Standalone components.

- Angular material componentization to build reusable components in order to create complex and more fluid interfaces.
- Using services to handle form state and validations. This approach focus on the singleton pattern.
- Building reactive forms to handle user sign up, profile, login and search features.
- Cache strategy using shareReplay from RxJS on HTTP requests improving application's performance.
- Authentication using tokens with JWT.
- Route guards to functional routes in order to restric access to certain features.
- Interceptors - how to manipulate HTTP requests in an effient way with error handling.
- Search, filter and get data fom API in an effient way using the reactive pattern with declarative approach.
- Lazy loading features to improve performance.
- Studying the new control flow syntax (if, for).

## 🚀 Features developed

- Login feature ( you can log in on the application. In this feature the JWT token is used to authenticate the user with the server )
- Sign up feature ( you can create an account to register on the application and then log in. JWT is also used here with reactive forms approach )
- Profile feature ( you can update your user information. There's a reuse of the sign in form here )
- Home page ( the main application page where information about tickets flights are shown. There's a reactive form used to search for tickets )
- Search page ( the results page is where you can see the search tickets results. There is also a side filter also using the reactive forms approach to apply a second filter layer in the results )

## 👌 Live preview

You can find a live preview of the application [here](https://angular-jornada-milhas.vercel.app).
The project was deployed with Vercel.

To see all the tickets registered in the database you can go directly to the 'https://angular-jornada-milhas.vercel.app/busca' url.

⚠️ Because the API is hosted on render and the trafic to the application is very low, it gets shut down a lot. So, you may experience a certain delay (around 50 seconds) to get the response from API on your first request.

### Prerequisit to run locally

This project uses an API developed to serve the data. You can find the repository here: [jornada-milhas-api](https://github.com/viniciosneves/jornada-milhas-api). You're going to need it to run the project locally.

### Installing and running locally

In order to run the project locally, you just need to download this repo and run the commands:

To install:

```
npm install
```

To run:

```
npm start
```
