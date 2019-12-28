## Mobile-Flashcards
A mobile flashcard app using React Native (Android or iOS - or both) that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.


## TL;DR

## Clone Project

* Open a terminal window on local machine.
* Create a directory on local machine to hold Repository files
* Clone applicaion form Git hub. Using the following command:
    * git clone https://github.com/darinjswilliams/mobile-flashcards.git
* After all repository has been clone proceed to installation step.


## Install Project

All dependencies are managed by npm, if you need to add a pack. Add it to the the package.json file

* Install all project dependencies with `npm install`

## Start Application

* start the development server with `expo start`.

A browswer window will open on the following port.  http://localhost:19002/
After the browser opens. You will options to run applicaiton on a simulator 

Run on Android device/emulator
Run on IOS simulator


## Start Simulator

If you using a mac, startup Xcode and launch simulator. For Device to run on Android it is best to download and install genymotion. Visit link below for informaton on downloading and installing genymotion:

https://www.genymotion.com/fun-zone/



### `yarn test`## Application Directory Structure
```bash
├── package.json
├── README.md - This file.
├── index.js
├── App.js - Applicaiton home, main page
├── package.json # npm package manager file. It's unlikely that you'll need to modify this. 
├── utils
│   ├── api.js  # Sets up AsyncStorage 
│   └── colors  # Add additional colos
│   └── helpers # defines notificaiton
└── Root
    ├── actions 
    │   ├── index.js
    ├── assets # constains default images when app was created.
    ├── components # This is the root of your app. 
    │   ├── AddCardView.js
    │   ├── AddDeckView.js
    │   ├── Deck.js
    │   ├── DeckListView.js
    │   ├── QuizView.js
    │   ├── TextButtons.js
    ├── reducers # Describes how an application state changes
    │   ├── index.js

```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Learn More

You can learn more in the [Create React App Native documentation](https://facebook.github.io/create-react-app/docs/getting-started).

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

## Important
Note that Create React Native App uses Expo CLI under the hood. You can get up and running with React Native 
First things first: you need to install Expo. Head to the app store and install the Expo mobile app for your device:

Expo on Google Play (Android)
Expo on the App Store (iOS)

## Create React App Native

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
