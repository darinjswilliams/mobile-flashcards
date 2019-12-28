import React, { Component } from 'react'
import { View, StatusBar, Dimensions } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import { Feather } from '@expo/vector-icons'
import DecksList from './components/DeckListView'
import AddCard from './components/AddCardView'
import AddDeck from './components/AddDeckView'
import Deck from './components/Deck'
import Quiz from './components/QuizView'
import Constants from 'expo-constants'

import { purple, white } from './utils/colors'

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = createBottomTabNavigator(
  {
    DecksList: {
      screen: DecksList,
      navigationOptions: {
        tabBarLabel: 'Decks List',
        tabBarIcon: ({ tintColor }) => (
          <Feather name='list' size={30} color={tintColor} />
        )
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => (
          <Feather name='plus' size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: purple,
      style: {
        height: 60,
        backgroundColor: white,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      },
      labelStyle: {
        paddingTop: 3,
        fontSize: 14,
        fontWeight: 'bold'
      }
    }
  }
);

const MainNavigator = createAppContainer(createStackNavigator(
  {
    Home: Tabs,

    Deck: {
      screen: Deck,
      navigationOptions: ({ navigation }) => ({
        title: 'Home'
      }),
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: ({ navigation }) => ({
        title: 'Deck'
      }),
    },

    Quiz: {
      screen: Quiz,
      navigationOptions: ({ navigation }) => ({
        title: 'Deck'
      }),
    },

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      title: 'Deck',
      headerStyle: {
        backgroundColor: purple,
      },
      headerTitleStyle: { width: Dimensions.get("window").width }
    })
  }
));

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar
            backgroundColor={purple}
            barStyle="light-content"
          />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

export default App;
