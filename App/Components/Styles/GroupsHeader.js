import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'
import Fonts from '../../Themes/Fonts'

export default StyleSheet.create({
  groupWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  container: {
    height: 50,
    backgroundColor: Colors.darkerGrey,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.lighterGrey,
    borderStyle: 'solid'
  },
  plusSign: {
    position: 'absolute',
    right: 10,
    top: 15,
    fontSize: 30
  },
  text: {
    color: Colors.lighterGrey,
    fontFamily: 'Lato-Regular',
    fontSize: 25
  },
  compareText: {
    fontSize: 25,
    color: Colors.lighterGrey
  }
})
