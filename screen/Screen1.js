import { View,KeyboardAvoidingView, Text, Button, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useRef, useEffect } from 'react'
import { Avatar } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
export default function Screen1({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <KeyboardAvoidingView>
    <View style={styles.container}>
      <Text style={styles.titles1}>React Native </Text>
      <View style={styles.container1}>
        <TouchableOpacity onPress={() => navigation.navigate('Page1')}
          style={styles.containers}>
          <View style={styles.gridItem}>
          <Image
          source={require('../assets/icons.png')}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.titles}>Page 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Page2')}
          style={styles.containers}>
          <View style={styles.gridItem}>
          <Image
          source={require('../assets/icons.png')}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.titles}>Page 2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <TouchableOpacity onPress={() => navigation.navigate('Page3')}
          style={styles.containers}>
          <View style={styles.gridItem}>
          <Image
          source={require('../assets/icons.png')}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.titles}>Page 3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Page4')}
          style={styles.containers}>
          <View style={styles.gridItem}>
          <Image
          source={require('../assets/icons.png')}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.titles}>Page 4</Text>
          </View>
        </TouchableOpacity>
        </View>
        <View style={styles.container1}>
        <TouchableOpacity onPress={() => navigation.navigate('Page5')}
          style={styles.containers}>
          <View style={styles.gridItem}>
          <Image
          source={require('../assets/icons.png')}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.titles}>Page5 </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    margin: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 50,
    marginTop: 150,
  },
  gridItem: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 2.5,
    borderColor: 'gray',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10

  },
  containers: {
    flex: 1,
    height: 150,
    borderColor: '#76625a',
    borderWidth: 0.5,
    borderRadius: 8
  },
  titles1: {
    color: 'darkblue',
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
    
    textDecorationLine: 'underline',
  },
 
  
});