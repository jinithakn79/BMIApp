import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export function DetailsScreen({ route }) {

    const {bmi, bmiResult} = route.params

    return (
    <View style = {styles.container}>
 
        <View style={styles.titleView}> 
        <Text style={styles.title}>Your </Text>
        <Text style={styles.title2}>Summary</Text>
        </View>

        <View style={styles.card}>
        <Text style={styles.title2}>Your BMI is</Text>
        <Text style={styles.label}>{bmi}</Text>
        <Text style={styles.result}>kg/m2</Text>

        <View style={styles.card2}> 
            <Text style={styles.result}>Your weight is</Text>
            <Text style={styles.result2}>{bmiResult}</Text>
        </View>
        </View>

        <Text style={styles.description}>If your BMI is:
            below 18.5 – you're in the underweight range
            between 18.5 and 24.9 – you're in the healthy weight range
            between 25 and 29.9 – you're in the overweight range
            between 30 and 39.9 – you're in the obese range
        </Text>
     </View>
 )
 }
 
 const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      backgroundColor: '#f1f0fc',
      flex: 1,
   },
   card: {
    marginTop: 30,
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: 'white',
    shadowColor: "#787675",
    shadowOpacity: 0.5,
    borderRadius: 15,
    alignItems: 'center',
    paddingBottom: 15,
    paddingTop: 15,
   },
   titleView: {
    paddingTop: 30,
    paddingBottom:10,
    paddingLeft: 25,
    textAlign: "center",
    flexDirection: 'row',
   },
   title:{
      fontSize: 25,
      fontWeight:"bold",
      color: "#6b70fa",
   },
   title2: {
       textAlign: "center",
       fontSize: 25,
   },
   description: {
    paddingTop: 25,
    paddingBottom:10,
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: 12,
    color: "#6b70fa",
   },
   card2: {
    flexDirection: 'row',
   },
   label:{
    fontSize: 35,
    color: "#6b70fa",
    fontWeight:"bold",
   },
   result: {
    fontSize: 18, 
    padding: 5,
    color: "#6b70fa",
   },
   result2:{
    textAlign: "center",
    fontSize: 18,
    padding: 5,
    color: "#07e053" 
   }
 })