import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import { View, Text, StyleSheet, TextInput,Image,Button, ScrollView, SafeAreaView, ActivityIndicator,Alert} from 'react-native';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function HomeScreen() {
return (
    <Tab.Navigator
    
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#e91e63',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'หน้าแรก') {
              iconName = focused ? 'heart-sharp' : 'heart-outline';
            } else if (route.name === 'เกี่ยวกับเรา') {
              iconName = focused ? 'body' : 'body-outline';
            } else if (route.name === 'บริการของเรา') {
              iconName = focused ? 'cube' : 'cube-outline';
            } else if (route.name === 'ติดต่อเรา') {
              iconName = focused ? 'mail-unread' : 'mail-unread-outline';
            } else if (route.name === 'Register') {
              iconName = focused ? 'paw-sharp' : 'paw-outline';
            } else if (route.name === 'Login') {
              iconName = focused ? 'enter' : 'enter-outline';
              
            }
            

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={"coral"} />;
          },
          //tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'tomato',

        })}

    >
          <Tab.Screen name="หน้าแรก" component={TabA} options={{ headerShown: false }}/>
          <Tab.Screen name="เกี่ยวกับเรา" component={TabB} options={{ headerShown: false }}/>
          <Tab.Screen name="บริการของเรา" component={TabC} options={{ headerShown: false }}/>
          <Tab.Screen name="ติดต่อเรา" component={TabD} options={{ headerShown: false }}/>
          <Tab.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />

    </Tab.Navigator>
);
}

function TabA({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center',backgroundColor: "#fff8dc" }}>

    
    <Text style= {styles.home1} >
    

      Welcome to Home taratip

      
    </Text>


    
    <Image
    source={require('./assets/322.jpg')}
    style={{
                  width: 200,
                  height: 330,
                  borderRadius: 150,
                }}
    />
    
    </View>
  );
}


function TabB({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center',backgroundColor: "#fffacd" }}>
    <Text style= {styles.about1}> 
      Welcome to About
    </Text>
    
      <Image
  source={require('./assets/guita.jpg')}
  style={{
                width: 200,
                height: 200,
                borderRadius: 150,
              }}
  />

  </View>
  );
}

function TabC({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center',backgroundColor: "#faf0e6" }}>
      <Text style= {styles.service1}>
        Welcome to Service
      </Text>
       <Image
    source={require('./assets/gell.jpg')}
    style={{
                  width: 200,
                  height: 200,
                  borderRadius: 150,
                }}
    />
    </View>
  );
}

function TabD({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center',backgroundColor: "#eee8aa" }}>
    <Text style= {styles.contact1}>
      Welcome to Contact
    </Text>
    <Image
  source={require('./assets/my2.jpg')}
  style={{
                width: 200,
                height: 200,
                borderRadius: 150,
              }}
  />
  </View>
  );
}

function Register({navigation})

 {
   
   
  
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center',backgroundColor: "#eee8aa" }}>
    <Text style= {styles.contact1}>
      aha ha Register
    </Text>
    <Text> </Text>
    <TextInput
      style={styles.registername}
      onChangeText={text => onChangeText(text)}
      value={""}
      placeholder={'name'}
      
    />
    
        <TextInput
      style={styles.registerusername}
      onChangeText={text => onChangeText(text)}
      value={""}
      placeholder={'username'}
    />

<TextInput
      style={styles.registerpassword}
      onChangeText={text => onChangeText(text)}
      value={""}
      placeholder={'password'}

    />
        <TextInput
      style={styles.registerrepassword}
      onChangeText={text => onChangeText(text)}
      value={""}
      placeholder={'repassword'}

    />
           <TextInput
      style={styles.registermail}
      onChangeText={text => onChangeText(text)}
      value={""}
      placeholder={'Email'}
      
    />
     <Button
          title={'Register'}
          style={styles.input}
          onPress={""}
          color="turquoise"
        />
        <Text> </Text>
         <Button
          title={'back to Login'}
          style={styles.input}
          onPress={""}
          color="tomato"
        />
  
  </View>
  );
}
function Login({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center',backgroundColor: "#eee8aa" }}>
    <Text style= {styles.contact1}>
       Login to taratip App
    </Text>
    <Text> </Text>
    

   
      <Text> </Text>


<TextInput
      style={styles.input1}
      onChangeText={text => onChangeText(text)}
      value={""}
      
      placeholder={'Username'}
      
    />
    
        <TextInput
      style={styles.input}
      onChangeText={text => onChangeText(text)}
      value={""}
      placeholder={'password'}
    />
     
     <Button
          title={'Login'}
          style={styles.botton1}
          onPress={""}
          color="tomato"
          
          
          borderRadius="150"
          
          
        />
        <Text> </Text>
         <Button
          title={'Register'}
          style={styles.botton1}
          onPress={""}
          color="turquoise"
        />
  </View>
  );
}


const styles = StyleSheet.create({
  home1: {
     fontWeight: 'bold',
     color:'#fa8072'
 
   },
   about1: {
    fontWeight: 'bold',
    color:'#fa8072'
  },
  service1: {
    fontWeight: 'bold',
    color:'#fa8072'
  },
  contact1: {
    fontWeight: 'bold',
    color:'tomato',
    fontSize:30,
  },
  TextInput:{
    backgroundColor: '#ffe4b5',
    width : 150,
    borderRadius : 50,
    padding : 10,
  },
  register: {
    fontWeight: 'bold',
    color:'#fa8072',
     fontSize: 30

  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 150,
    backgroundColor:'wheat',
    borderRightColor:'red',
    borderLeftColor:'#ffa500',
    borderStartColor:'#4b0082',
  },

  input1: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 150,
    backgroundColor:'#faebd7',
    borderRightColor:'red',
    borderLeftColor:'#ffa500',
    borderStartColor:'#4b0082',
    
    
  },
  registername: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 150,
    backgroundColor:'#ffefd5',
    borderRightColor:'red',
    borderLeftColor:'#ffa500',
    borderStartColor:'#4b0082',
  },
  registerusername: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 150,
    backgroundColor:'#fff5ee',
    borderRightColor:'red',
    borderLeftColor:'#ffa500',
    borderStartColor:'#4b0082',
  },
  registerpassword: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 150,
    backgroundColor:'#faebd7',
    borderRightColor:'red',
    borderLeftColor:'#ffa500',
    borderStartColor:'#4b0082',
  },
  registerrepassword: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 150,
    backgroundColor:'#fff5ee',
    borderRightColor:'red',
    borderLeftColor:'#ffa500',
    borderStartColor:'#4b0082',
  },
  registermail: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 150,
    backgroundColor:'#faebd7',
    borderRightColor:'red',
    borderLeftColor:'#ffa500',
    borderStartColor:'#4b0082',
  },
  botton1: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
  });




export default function App() {
return(
  

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen  name="หน้าแรก" component={HomeScreen}/>
        
        <Drawer.Screen name="เกี่ยวกับเรา" component={HomeScreen} />
        <Drawer.Screen name="บริการของเรา" component={""} />
        <Drawer.Screen name="ติดต่อเรา" component={""} />
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Login" component={Login} />

      </Drawer.Navigator>
    </NavigationContainer>

  /*
    <NavigationContainer>
    <HomeScreen />
  </NavigationContainer>
  */
);
}