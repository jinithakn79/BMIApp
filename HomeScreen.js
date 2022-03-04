import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

export function HomeScreen({ navigation }) {

const [height, setHeight] = useState('')
const [weight, setWeight] = useState('')
const [bmi, setBmi] = useState('')
const [bmiResult, setBmiResult] = useState('')

const handleHeight = (enteredHeight) => {
   setHeight(enteredHeight)
}

const handleWeight = (enteredWeight) => {
   setWeight(enteredWeight)
}

const calculate = (height, weight) => {
  //calculation
  var result = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height))
  result = result.toFixed(2)
  
  //display result
  setBmi(result)
  if(result<18.5){
   setBmiResult('Under weight')
  }
  else if(result>=18.5&&result<25){
   setBmiResult('Normal')
  }
  else if(result>=25&&result<30){
   setBmiResult('Over weight')
  }
  else if(result>=30){
   setBmiResult('Obese')
  }
  else{
     alert('Incorrect Input!');
     setBmiResult('')
  }
}

const onCalculate = () => {
   if (height === '' || weight === '') {
      alert('Incorrect Input!');
   } else {
      calculate(height, weight)
      if (bmi !== '' && bmiResult !== '') {
         navigation.navigate('DetailsScreen', {
            bmi: bmi,
            bmiResult: bmiResult,
         })
      }
   }
}

   return (
       <View style = {styles.container}>

       <View style={styles.titleView}> 
       <Text style={styles.title}>BMI </Text>
       <Text style={styles.title2}>Calculator</Text>
       </View>
       <Text style={styles.description} >Body Mass Index(BMI) is a measure of Body fat based on height and weight the applies to adult men and women. </Text>

      <View style={styles.imageView}>
      <Image
        style={styles.logoTitle}
        source={require('./assets/male.png')}
      />
      <Image
        style={styles.logoTitle}
        source={require('./assets/female.png')}
      />
      </View>
      <View style={styles.imageView}>
      <Text style={styles.imageViewTitle}>   Male</Text>
      <Text style={styles.imageViewTitle}>         Female</Text>
      </View>

       <Text  style = {styles.label}>Height</Text>
       <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Height (Cm)"
             autoCapitalize = "none"
             value={height}
             onChangeText = {height => handleHeight(height)}/>
       <Text  style = {styles.label}>Weight</Text>
       <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Weight (Kg)"
             autoCapitalize = "none"
             value={weight}
             onChangeText = {weight => handleWeight(weight)}/>
          
        <TouchableOpacity
             style = {styles.submitButton}
             onPress={onCalculate}
         >
        <Text style = {styles.submitButtonText}> Calculate your BMI </Text>
        </TouchableOpacity>
</View>
)
}

const styles = StyleSheet.create({
  container: {
     paddingTop: 23,
     backgroundColor: '#f1f0fc',
     flex: 1,
  },
  input: {
     margin: 15,
     height: 40,
     borderWidth: 1,
     padding: 10,
  },
  submitButton: {
     backgroundColor: '#7e4dfa',
     padding: 10,
     margin: 15,
     height: 40,
     borderRadius: 15,
  },
  submitButtonText:{
     textAlign: "center",
     color: 'white',
     fontSize: 15,
     fontWeight:"bold",
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
   paddingTop: 5,
   paddingBottom:10,
   paddingLeft: 25,
   paddingRight: 25,
   fontSize: 15,
   color: "#6b70fa",
  },
  logo: {
   width: 100,
   height: 100,
  },
  imageView: {
   paddingTop: 5,
   paddingBottom: 10,
   flexDirection: "row",
   justifyContent: "space-evenly",
  },
  imageViewTitle: {
   color: "#6b70fa",
  },
  label:{
     marginLeft: 15,
  }
})