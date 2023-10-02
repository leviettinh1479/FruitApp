import { StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import colors from '../config/Colors'

const StatusBarCustom = () => {
  return (
    <StatusBar barStyle={'dark-content'} backgroundColor={colors.white}/>
  )
}

export default StatusBarCustom

const styles = StyleSheet.create({})