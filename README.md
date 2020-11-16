# The Ramen Shop

Ramen shop is an online food ordering website. It allows users to sign up and create profiles and order food items available on the website catalog and checkout with a Stripe payment.

Ramen shop is currently hosted on heroku at this [link](https://the-ramen-shop.herokuapp.com/)

## Project Overview & Technologies

The project leverages [Firebase Authentication](https://firebase.google.com/docs/auth/web/manage-users) to provide regular users to sign up with their email and password. The app has a role based authentication enabled by a cloud function that can designate some users with admin privileges and allow them to edit the menu of the web shop.

Ramen shop is built with the following technologies:

1.  React
2.  React router
3.  Redux
4.  Firebase (**firestore** for data management, **firebase authentication** to provide authorized access and **cloud functions** to get firestore data and set custom claims on users).
5.  [Tailwind CSS](https://tailwindcss.com/) and Sass

Additionally, the site uses the [react-onclickoutside](https://www.npmjs.com/package/react-onclickoutside) library to manage toggling events outside the navbar.

## Getting Started

In order to run the ramen shop application on your machine, clone this repository with the following command:

    git clone https://github.com/luckyrose89/ramen-shop.git

Once you've cloned the project, open it in your command prompt or git bash run `npm install` . This command will install the project's dependencies to the folder which contains the cloned project.

Open the server/functions folder from the root of the project folder and repeat the installation command to install server dependencies if you wish to run the project server locally.

To open the app in your browser, visit the root of the project and from there type `npm start`. This command will open the project on localhost:3000 port on your machine.
![Ramen shop on localhost:3000](https://i.ibb.co/FJ702YR/preview.gif)

The server can be started by visiting the server/functions folder from the root of the project. Once there, type `firebase serve`. This will open the server on port 5000.

## License

This project is licensed under the terms of the MIT license.
