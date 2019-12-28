## Mobile-Flashcards
A mobile flashcard app using React Native (Android or iOS - or both) that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.


## Clone Project

* Open a terminal window on local machine.
* Create a directory on local machine to hold Repository files
* Clone applicaion form Git hub. Using the following command:
    * git clone https://github.com/darinjswilliams/mobile-flashcards.git
* After all repository has been clone proceed to installation step.


## Install Project

All dependencies are managed by npm, if you need to add a package. Add it to the the package.json file

* Install all project dependencies with `npm install`

## Quick Overview

Make sure you have Node v6 or later installed. No Xcode or Android Studio installation is required.

```sh
$ npm install -g expo-cli
$ expo init my-app
$ cd my-app/
$ npm start

The `npm start` command starts the Expo CLI server. You can now run the project on your phone by using the Expo app.

## Start Application
* start the development server with `expo start`.

A browswer window will open on the following port.  http://localhost:19002/
After the browser opens. You will options to run application on a simulator 

Run on Android device/emulator
Run on IOS simulator

### Expo Installation

See [Installation](https://docs.expo.io/versions/latest/introduction/installation).

## Start Simulator

If you using a mac, startup Xcode and launch simulator. For Device to run on Android it is best to download and install `genymotion`. Visit link below for informaton on downloading and installing genymotion:

https://www.genymotion.com/fun-zone/


### `yarn test`## Application Directory Structure
```bash
├── package.json
├── README.md - This file.
├── index.js
├── App.js - Applicaiton home, main page
├── package.json # npm package manager file. It's unlikely that you'll need to modify this. 
├── utils
│   ├── api.js  # Sets up AsyncStorage with hellp methods
│        └── retrieveDecks: return all of the decks along with their titles, questions, and answers. 
│        └── saveDeck: take in a single id argument and return the deck associated with that id. 
│        └── removeCard: take two parameter id and card. 
│        └── saveCard: take in two arguments and will add the card to the list of questions for the deck 
│   └── colors  # Add additional colos
│   └── helpers # Defines notification logic if user has not completed at least one Quiz for that day
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

### Android

- Install the [Expo](https://expo.io) app on your Android device.
- Scan the QR code in your terminal from the Expo app to run the project on your phone.
- Alternatively you can press 's' in the terminal and sign in with an Expo account, and sign in with the same account in the Expo app: your projects will automatically appear in the "Projects" tab.

### iOS

- Install the [Expo](https://expo.io) app on your iOS device.
- Press 'e' in the terminal to send the app link to your email address or phone number. This link can be used to run your project from the Expo app.
- Alternatively you can press 's' in the terminal and sign in with an Expo account, and sign in with the same account in the Expo app: your projects will automatically appear in the "Projects" tab.

Expo CLI allows you to work with all of the [Components and APIs](https://facebook.github.io/react-native/docs/getting-started.html) in React Native, as well as the [JavaScript APIs](https://docs.expo.io/versions/latest/sdk/index.html) that the Expo app provides.

## Learn More

You can learn more in the [Expo documentation](https://github.com/expo/expo#-documentation).


## Important
Note that Create React Native App uses Expo CLI under the hood. You can get up and running with React Native 
First things first: you need to install Expo. Head to the app store and install the Expo mobile app for your device:

Expo on Google Play (Android)
Expo on the App Store (iOS)

## Create React App Native

This project was bootstrapped with [Create React App](https://facebook.github.io/react-native/docs/getting-started). You can find more information on how to perform common tasks [here](https://facebook.github.io/react-native/docs/tutorial).

### What are the limitations of Create React Native App?

The main limitation of a Create React Native App project is that it must be written in pure JavaScript and not have any dependencies which rely on custom native code (i.e. ones which require running `react-native link` to work). This allows the projects to load directly on a phone without native compilation, and also means that it's not necessary to install or use Android Studio or Xcode.


