/*

Next up:
-- Check nochmal bei gewicht die unüblichen einheiten
--danach nur noch ^2 und ^3 nötig (und 100% check bei ^1
  
  */


import React, { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  
} from "react-native";
import colors from "../constants/colors";
import {  normalizeText } from "react-native-elements/dist/helpers";





const EntryScreen = (props) => {

  
  //confirms that a number was entered, else it throws an insult
const binaryToDecimal=(input )=>{

  switch(value2){
    case 'binär':
      switch(value3){
       
        case 'binär':
          setOutcome(input);
          break;
        case 'dezimal':
        let myDez = parseInt(input, 2);
        console.log(myDez2);
        setOutcome(myDez);
        break;
        case 'hexadezimal':
          let myDez2 = parseInt(input, 2).toString(16);
          setOutcome(myDez2);
          console.log(outcome);
          break;

        }
      break;
    case 'hexadezimal':
        switch(value3){
          case 'binär':
            let myNum2 = parseInt(input, 16);
            let myBin = myNum2.toString(2);
            setOutcome(myBin);
            break;
          case 'dezimal':
             let myNum = parseInt(input, 16);
            setOutcome(myNum);
            break;
          case 'hexadezimal':
            setOutcome(input);
            break;
  
          }
      break;
    case 'dezimal':
          switch(value3){
            case 'binär':
              let num = input;
              let binary = (num % 2).toString();
              for (; num > 1; ) {
                  num = parseInt(num / 2);
                  binary =  (num % 2) + (binary);
              }
              setOutcome(binary);
              break;
            case 'dezimal':
              setOutcome(input);
              break;
            case 'hexadezimal':
              let myNum2 = parseInt(input);
              let myHex = myNum2.toString(16);
              setOutcome(myHex);
              break;
    
          }
      break;
  }
}
const doStraightMath=(input)=>{


console.log("Do Straight!"+input);
  switch(value2){
    case 'nm':
      x=0.000001;
      break;
    case 'mm':
      console.log("mm");
      x=1;
      break;
    case 'cm':
      x=10;
      break;
    case 'inch':
        x=25.4;
        break;
    case 'dm':
      x=100;
      break;
    case 'm':
      x=1000;
      break;
    case 'km':
      x=1000000;
      break;
    case 'foot':
      x=  304.8;
      break;
    case 'meilen':
      x= 1609344;
  }
  switch(value3){
    case 'nm':
      console.log("nm");
      y=0.1;
      break;
    case 'mm':
      y=1;
      break;
    case 'cm':
      y=10;
      break;
    case 'inch':
      y=25.4;
      break;
    case 'dm':
       y=100;
       break;
    case 'm':
        y=1000;
        break;
    case 'km':
       y=1000000;
        break;
    case 'foot':
      y=  304.8;
      break;
    case 'meilen':
      y= 1609344;
  }
  const outcomeHere= (x*input)/y;
  console.log(outcomeHere);
  setOutcome(outcomeHere);
  console.log("Outcome="+outcome);
};

const doQuadraticMath=(input)=>{

  switch(value2){
    case 'nm^2':
      x=1/1000000000000;
      break;
    case 'mm^2':
      x=1;
      break;
    case 'cm^2':
      x=100;
      break;
    case 'dm^2':
      x=10000;
      break;
    case 'm^2':
      x=1000000;
        break;
    case 'km^2':
       x=1000000000000;
        break;
    case 'Ha':
      x=10000000000;
      break;
  }
  switch(value3){
    case 'nm^2':
      y=1/1000000000000;
      break;
    case 'mm^2':
      y=1;
      break;
    case 'cm^2':
      y=100;
      break;
    case 'dm^2':
       y=10000;
       break;
    case 'm^2':
        y=1000000;
        break;
    case 'km^2':
       y=1000000000000;
        break;
    case 'Ha':
      y=10000000000;
      break;
  }
  setOutcome((x*input)/y);
};

const doCubicMath=(input)=>{
  switch(value2){
   
    case 'nm^3':
      p=1;
      c=-27;
      console.log(input);
      x=1/(1e27);
      break;
    case 'mm^3':
      p=1;
      c=-9;
      x=1/ (1e9);
      break;
    case 'cm^3':
      p=1;
      c=-6;
      x=1/ (1e6);
      break;
    case 'dm^3':
      p=1;
      c=-3;
       x=1/(1e3);
       break;
    case 'm^3':
      p=0;
        c=0;
        x=1;
        break;
    case 'km^3':
      p=0;
      c=9;
       x=1000000000 ;
        break;
    case 'liter':
      p=0;
      c=3;
      x=1/1000;
      break;
   case 'centiliter':
    p=0;
     c=5;
        x=1/100000;
        break;
  }
  switch(value3){
    case 'nm^3':
      k=-27;
      y=1/(1e27);
      break;
    case 'mm^3':
      k=-9;
      y=1/ (1e9);
      break;
    case 'cm^3':
      k=-6;
      y=1/ (1e6);
      break;
    case 'dm^3':
      k=-3;
       y=1/(1e3);
       break;
    case 'm^3':
      k=0;
        y=1;
        break;
    case 'km^3':
      k=9;
       y=(1e9) ;
        break;
    case 'liter':
      k=3;
      y=1/(1e3);
      break;
   case 'centiliter':
    k=5;
        y=1/(1e5);
        break;
  }
  if(c>k){

  }else{

  }
  z=c-k;
  if(p=1){
    setOutcome(input*(1*Math.pow(10,z)));
  }else{
    setOutcome(input*(Math.pow(10,z)));
  }

};

const doHOTMath=(input)=>{

  switch(value2){
    case 'fahrenheit':
      input= ((input-32)/(9/5));
      break;
    case 'kelvin':
      input= input-fahrenheit;
      break;
    case 'rankine':
      input=(( input-491.67)/1.8);
      break;
    case 'reaumur':
      input= parseFloat(input)/0.8;
      break;

  }
    if(value3==='celsius'){
      setOutcome(input);
    }else if(value3==='fahrenheit'){
      setOutcome((input*(9/5))+32);
    }else if(value3==='kelvin'){
      setOutcome(parseFloat(input)+fahrenheit);
    }else if(value3==='rankine'){
      setOutcome(parseFloat(input)*1.8+491.67);
    }else if(value3==='reaumur'){
      setOutcome(parseFloat(input)*0.8);
    }


};
const doHeavyMath=(inpit)=>{
  if(value2===value3){
    setOutcome(inpit);
  }else{
  switch(value2){
    case 'pfund':
      inpit= inpit*453.59237;
      break;
    case 'unzen':
     inpit= inpit/ 0.0352739619;
     break;
    case 'kilogramm':
      inpit = inpit /0.001;
      break;
    case 'shorttns':
      inpit= inpit*907184.74;
      break;
    case 'longtns':
      inpit = inpit*(1.01605e6);
      break;
    case 'deka':
      inpit= inpit/0.1;
      break;
    case 'nanogramm':
      inpit= inpit/(1e9);
      break;
    case 'milligramm':
      inpit= inpit/1000;
      break;
    case 'centigramm':
      inpit= inpit/100;
      break;
    case 'dezitonne':
      inpit= inpit/0.035274;
      break;
    case 'tonneME':
      inpit= inpit/0.000001;
      break;
    case 'tonneUS':
      inpit= inpit*907185;
      break;
    case 'tonneUK':
      inpit= inpit*1016046.9;
      break;
    case 'kilotonne':
      inpit= inpit /0.000001
      inpit= inpit/0.001;
      break;
  }
  if(value3==='pfund'){
    setOutcome(Math.round(((inpit/453.59237) + Number.EPSILON) * 100) / 100);
  }else if(value3==='unzen'){
    setOutcome(inpit*0.035274);
  }
  else if(value3==='shorttns'){
    setOutcome(inpit*0.0000011023);
  }
  else if(value3==='longtns'){
    inpit = inpit*0.0000011023
    setOutcome(inpit*0.89285714);
  }
  else if(value3==='deka'){
    setOutcome(inpit*0.1);
  }
  else if(value3==='nanogramm'){
    setOutcome(inpit*1000000000 );
  }
  else if(value3==='milligramm'){
    setOutcome(inpit*1000);
  }else if(value3==='centigramm'){
    setOutcome(inpit*100);
  }else if(value3==='gramm'){
    setOutcome(inpit);
  }else if(value3==='kilogramm'){
    setOutcome(inpit*(1e-3));
  }else if(value3==='dezitonne'){
    setOutcome(inpit*0.035274);
  }else if(value3==='tonneME'){
    setOutcome(inpit*0.000001);
  }else if(value3==='tonneUS'){
    setOutcome(inpit*0.0000011023);
  }else if(value3==='tonneUK'){
    setOutcome(inpit*0.0000009842);
  }else if(value3==='kilotonne'){
    inpit= inpit *0.000001
    setOutcome(inpit*0.001);
  }
}
};
let p=0;
let k=0;
let z;
let c=0;
let x=0;
let y=0;
const fahrenheit= 273.15;

  const doMathThing= (input)=>{
    console.log("doMath!");
    let x=0;
    let y=0;
    setNumber(input);
 
    if((value2==='nm')||(value2==='mm')||(value2==='cm')||(value2==='dm')||(value2==='km')||(value2==='m')||(value2==='foot')||(value2==='inch')||(value2==='meilen')){
      doStraightMath(input);
    }else if((value2==='celsius')||(value2==='kelvin')||(value2==='fahrenheit')||(value2==='rankine')||(value2==='reaumur')){
      doHOTMath(input);

    }else if((value2==='pfund')||(value2==='unzen')||(value2==='shorttns')||(value2==='longtns')||(value2==='deka')||(value2==='nanogramm')||(value2==='milligramm')||(value2==='centigramm')||(value2==='gramm')||(value2==='kilogramm')
    ||(value2==='dezitonne')||(value2==='tonneUS')||(value2==='tonneME')||(value2==='tonneUK')||(value2==='kilotonne')||(value2==='megatonne')){
      doHeavyMath(input);
    }else if((value2==='nm^2')||(value2==='mm^2')||(value2==='cm^2')||(value2==='m^2')||(value2==='km^2')||(value2==='Ha')){
      doQuadraticMath(input);

    }else if((value2==='nm^3')||(value2==='mm^3')||(value2==='cm^3')||(value2==='m^3')||(value2==='km^3')||(value2==='liter')||(value2==='centiliter')){
      doCubicMath(input);

    }else if((value2==='binär')||(value2==='hexadezimal')||(value2==='dezimal')){
     
      binaryToDecimal(input);

    }
    if((value2!='binär') &&(value2!='hexadezimal') &&(value2!='dezimal')){
      setOutcome(Math.round(outcome * 1000000000) / 1000000000);
    }

  }
  
  const [outcome, setOutcome] = useState(0);
  const [keyboardThing, setKeyboardThing]= useState("numeric");
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState(0);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);

  const [items, setItems] = useState([
    {label: 'Nanometer', value: 'nm'},
    {label: 'Millimeter', value: 'mm'},
    {label: 'Centimeter', value: 'cm'},
    {label: 'Decimeter', value: 'dm'},
    {label: 'Meter', value: 'm'},
    {label: 'Kilometer', value: 'km'},
    {label: 'Inch', value: 'inch'},
    {label: 'Feet', value: 'foot'},
    {label: 'Miles', value: 'meilen'},

  ]);
 
  const strecken=[
    {label: 'Nanometer', value: 'nm'},
    {label: 'Millimeter', value: 'mm'},
    {label: 'Centimeter', value: 'cm'},
    {label: 'Decimeter', value: 'dm'},
    {label: 'Meter', value: 'm'},
    {label: 'Kilometer', value: 'km'},
    {label: 'Inch', value: 'inch'},
    {label: 'Feet', value: 'foot'},
    {label: 'Miles', value: 'meilen'},

  ];
  const flaechen=[
    {label: 'nm^2', value: 'nm^2'},
  {label: 'mm^2', value: 'mm^2'},
  {label: 'cm^2', value: 'cm^2'},
  {label: 'dm^2', value: 'dm^2'},
  {label: 'm^2', value: 'm^2'},
  {label: 'km^2', value: 'km^2'},
  {label: 'Ha', value: 'Ha'}]

  const volumen=[
    {label: 'nm^3', value: 'nm^3'},
  {label: 'mm^3', value: 'mm^3'},
  {label: 'cm^3', value: 'cm^3'},
  {label: 'dm^3', value: 'dm^3'},
  {label: 'm^3', value: 'm^3'},
  {label: 'km^3', value: 'km^3'},
  {label: 'l', value: 'liter'},
  {label: 'cl', value: 'centiliter'}
]
const temperaturen=[
  {label: '°C', value: 'celsius'},
{label: 'K', value: 'kelvin'},
{label: '°F', value: 'fahrenheit'},
{label: '°Ra', value: 'rankine'},
{label: '°Re', value: 'reaumur'},

]
const gewicht=[
  {label: 'Pound', value: 'pfund'},
  {label: 'Ounces', value: 'unzen'},
  {label: 'dag', value: 'deka'},
  {label: 'ng', value: 'nanogramm'},
  {label: 'mg', value: 'milligramm'},
{label: 'cg', value: 'centigramm'},
{label: 'g', value: 'gramm'},
{label: 'kg', value: 'kilogramm'},
{label: 'dt', value: 'dezitonne'},
{label: 'Short tns', value: 'shorttns'},
{label: 'Long tns', value: 'longtns'},
{label: 't UK', value: 'tonneUK'},
{label: 't US', value: 'tonneUS'},
{label: 't Metric', value: 'tonneME'},
{label: 'kt', value: 'kilotonne'},

]

const zahlensysteme=[
  {label: 'Binary', value: 'binär'},
{label: 'Hexadecimal', value: 'hexadezimal'},
{label: 'Decimal', value: 'dezimal'},

]
const switchValues=()=>{
  binaryToDecimal(2);
  let mySmallValue= value2;
  setValue2(value3);
  setValue3(mySmallValue);
};
const zahlensystemeAusgewaehlt=()=>{
  setItems(zahlensysteme);
  setKeyboardThing("default");
};

const gewichtAusgewaehlt=()=>{
  setItems(gewicht);
  setKeyboardThing("numeric");
};
const volumenAusgewaehlt=()=>{
  setItems(volumen);
  setKeyboardThing("numeric");
};
const streckenAusgewaehlt=()=>{
  setItems(strecken);
  setKeyboardThing("numeric");
};
const temperaturenAusgewaehlt=()=>{
  setItems(temperaturen);
  setKeyboardThing("numeric");
};
const flaechenAusgewaehlt=()=>{
  setItems(flaechen);
  setKeyboardThing("numeric");
};
// Old stuff ends------------------------------------------------------------------------------------------
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <View style={styles.container3}>
          <Text style={styles.text}>{".dot"}</Text>
        </View>
       

  <View style={styles.container2}>
    <View style={styles.smallContainerNr2}> 
            
               
                <DropDownPicker
              containerProps={{
                width:"30 %",
               
              }}
                placeholder="from..."
                open={open}
                value={value2}
                items={items}
                setOpen={setOpen}
                setValue={setValue2}
                setItems={setItems}
                onChangeValue={() => {
                  doMathThing(number);
                }}
               
              />  
              <TextInput style={styles.textInputStyle} 
              placeholder="Tap here"
              keyboardType={keyboardThing}
              placeholderTextColor={colors.mainLG}
              onChangeText={(value) => {
                doMathThing(value);
              }}
              >
               
                </TextInput>  
         
       
      </View>   
      <View style={styles.smallContainer}>   
            <Text style={styles.textStyle} 
              placeholder="Result"
              keyboardType="email-adress"
              placeholderTextColor={colors.mainBlk}
              >{randomZahl}
              </Text> 
              <DropDownPicker
                containerProps={{
                  zIndex:300,
                  width:"30%",
                  marginTop:"30%",
                  height:"140%",
                 
                }}
                  placeholder="...to"
                  open={open2}
                  value={value3}
                  items={items}
                  setOpen={setOpen2}
                  setValue={setValue3}
                  setItems={setItems}
                  onChangeValue={() => {
                    doMathThing(number);
                  }}
                /> 
                </View>
       <View style={styles.littleContainer}>
          <TouchableOpacity
               style={styles.touchableStyle2}
                onPress={()=>switchValues()}
                  >
                 <Text style={styles.buttontext}>Switch</Text>
           </TouchableOpacity> 
       </View>
      
          <View style= {styles.knobview}>
            
          <View style= {styles.littleknobview}>
          <TouchableOpacity
               style={styles.touchableStyle}
                onPress={()=>streckenAusgewaehlt()}
                  >
                 <Text style={styles.buttontext}>Distances</Text>
           </TouchableOpacity>
           
          <TouchableOpacity
               style={styles.touchableStyle}
                onPress={()=>flaechenAusgewaehlt()}
                  >
                 <Text style={styles.buttontext}>Areas</Text>
           </TouchableOpacity>
           <TouchableOpacity
               style={styles.touchableStyle}
                onPress={()=>volumenAusgewaehlt()}
                  >
                 <Text style={styles.buttontext}>Volumes</Text>
           </TouchableOpacity>
      
          
          </View>
          <View style={styles.littleknobview}>
          <TouchableOpacity
               style={styles.touchableStyle}
                onPress={()=>temperaturenAusgewaehlt()}
                  >
                 <Text style={styles.buttontext}>Temperatures</Text>
           </TouchableOpacity>
                   
                   <TouchableOpacity
               style={styles.touchableStyle}
                onPress={()=>gewichtAusgewaehlt()}
                  >
                 <Text style={styles.buttontext}>Weight</Text>
           </TouchableOpacity>   
          <TouchableOpacity
               style={styles.touchableStyle}
                onPress={()=>zahlensystemeAusgewaehlt()}
                  >
                 <Text style={styles.buttontext}>Number Systems</Text>
           </TouchableOpacity>  
           </View>
        
    
    
      </View>  
     
             
        
  </View>
        
            
       
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
    upperButton:{
      fontSize: normalizeText(90),
      alignSelf: "center",
      marginTop:"40%",
        width: "70%",
        height:"10%",
    },
    
    container3: {
    backgroundColor: colors.green,
    flexDirection: 'column',
    alignContent: 'flex-start',
    height: "11%",
    width: "100%",
    marginBottom:"20%",
   
  },container2: {
    alignItems:"center",
    flexDirection: 'column',
    height: "90%",
    width: "100%",
    
  },
  knobview:{
    zIndex:1,
    marginTop:"10%",
    flexDirection:"row",
    width:"100%",
    height:"50%",
  },
  littleknobview:{
  width:"50%",
  height:"95%",
  },
  smallContainer:{
 zIndex:200,
    alignItems:"center",
    justifyContent: "flex-start",
    height:"15%",
    width:"95%",
    flexDirection: 'row',
  }, 
  smallContainerNr2:{
   // for IOS: zIndex:3,
    alignItems:"center",
    justifyContent: "flex-start",
    height:"15%",
    width:"95%",
    flexDirection: 'row',
  }, 
  littleContainer:{
    zIndex:-200,
    alignItems:"flex-end",
    justifyContent: "flex-start",
    height:"7%",
    width:"100%",
    flexDirection: 'column',
  }, 
  smallContainer2:{

    backgroundColor: colors.accBlue,
    height:"40%",
    flexDirection: 'row',
  }, 
  smallContainer3:{
    backgroundColor: colors.accBlue,
    marginTop:"20%",
    height:"30%",
    width:"100%",
    flexDirection: 'row',
  },
  textInputStyle:{
    
    marginLeft:"6%",
    marginRight:"10%",
    alignItems: "flex-end",
    justifyContent:"center",
    height: "40%",
    padding: 10,
    width: "60%",
    backgroundColor:colors.green,
    borderBottomWidth: 1,
    textAlign: "right",
    fontSize: normalizeText(23),
  },
  textStyle:{
    marginLeft:"5%",
    marginRight:"1%",
    alignItems: "flex-end",
    justifyContent:"center",
    height: "40%",
    width: "60%",
    textAlign: "right",
    padding:8,
    fontSize: normalizeText(23),
  },text: {
    marginLeft:"10%",
    marginTop:"9%",
    color: colors.mainLG,
    fontSize: normalizeText(50),
    lineHeight: normalizeText(55),
    letterSpacing: 0.25,
  },
  button:{
    fontSize: normalizeText(10),
    alignSelf: "center",
    marginTop:"7%",
      width: "70%",
      height:"10%",
  },
  touchableStyle:{
    shadowColor: "#000", shadowOffset:{ width: 0,
      height: 2,
      },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    fontSize: normalizeText(10),
    alignItems: "center",
    justifyContent: "center",
    
    alignSelf: "center",
    marginTop:"20%",
      width: "70%",
      height:"12%",
      backgroundColor: colors.green,
  },buttontext:{
    borderRadius: 10,
    color: 'white',
    fontSize: normalizeText(17),
    fontWeight: 'bold',
  },
  touchableStyle2:{
    
    fontSize: normalizeText(10),
    alignItems: "center",
    justifyContent: "center",
    marginRight:"7.5%",
      width: "20%",
      height:"50%",
      backgroundColor: colors.green,
  },
  
  



  container: {
    height: "100%",
  },
  
});

export default EntryScreen;
