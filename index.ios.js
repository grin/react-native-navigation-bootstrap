/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Navigation} from 'react-native-navigation';

class react_native_navigation_bootstrap extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.statsContainer}>
          <View style={[styles.row, styles.stats]}>
            <View style={[styles.cell, {backgroundColor: 'pink'}]}>
              <Text style={[styles.number, styles.leftAlign]}>1000000</Text>
            </View>
            <View style={[styles.cell, styles.center, {backgroundColor: 'red'}]}>
              <Text style={[styles.centerAlign, styles.number]}>7</Text>
            </View>
            <View style={[styles.cell, {backgroundColor: 'yellow'}]}>
              <Text style={[styles.number, styles.rightAlign]}>4</Text>
            </View>
          </View>
          {<View style={[styles.row, styles.levelUp]}>
            <View style={[styles.cell, {backgroundColor: 'cyan'}]}>
              <Text style={[styles.label, styles.leftAlign]}>10000000</Text>
            </View>
            <View style={[styles.cell, styles.center, {backgroundColor: 'red'}]}>
              <Text style={[styles.centerAlign, styles.tradersCount]}>2</Text>
            </View>
            <View style={[styles.cell, {backgroundColor: 'orange'}]}>
              <Text style={[{color: 'black'}, styles.rightAlign]}>5</Text>
            </View>
          </View>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'column',
    flex: 1
  },
  statsContainer: {
    backgroundColor: 'white'
  },
  stats: {
    marginTop: 30,
    paddingHorizontal: 15,
    paddingBottom: 8,
    height: 56
  },
  levelUp: {
    paddingHorizontal: 15,
    height: 42
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  cell: {
    flex: 1
  },
  center: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  number: {
    fontWeight: '600'
  },
  leftAlign: {
    textAlign: 'left'
  },
  centerAlign: {
    textAlign: 'center'
  },
  rightAlign: {
    textAlign: 'right'
  },
  label: {
    color: 'gray'
  },
  earnedIcon: {
    alignSelf: 'flex-end'
  },
  tradersIcon: {
    alignSelf: 'center'
  },
  tradersCount: {
    color: 'green'
  }
});

Navigation.registerComponent('react-native-navigation-bootstrap', () => react_native_navigation_bootstrap);

// Works fine as a single screen app:

// Navigation.startSingleScreenApp({
//   screen: {
//     screen: 'react-native-navigation-bootstrap',
//     title: 'Navigation Bootstrap'
//   }
// });

// Layout issues as a tab-based app:
Navigation.startTabBasedApp({
  tabsStyle: {
    tabBarButtonColor: 'black',
    tabBarSelectedButtonColor: 'blue',
    tabBarBackgroundColor: '#FFF'
  },
  tabs: [
    {
      label: 'Tab 1',
      screen: 'react-native-navigation-bootstrap',
      navigatorStyle: {navBarHidden: true}
    },
    {
      label: 'Tab 2',
      screen: 'react-native-navigation-bootstrap',
      navigatorStyle: {navBarHidden: true}
    },
    {
      label: 'Tab 3',
      screen: 'react-native-navigation-bootstrap',
      navigatorStyle: {navBarHidden: true}
    }
  ],
  appStyle: {
    forceTitlesDisplay: true
  },
  animationType: 'fade'
});
