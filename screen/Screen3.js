import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useRef, useEffect } from 'react';
import { Avatar, Badge, Banner, Checkbox, Chip,  HelperText, TextInput } from 'react-native-paper';
export default function Screen2() {
  const [text, setText] = React.useState('');

  const onChangeText = text => setText(text);

 const hasErrors = () => {
   return !text.includes('@');
 };
  const [visible, setVisible] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.containers}>
        <View style={styles.containerss}>
          <Avatar.Icon size={44} icon="folder" />
          <Avatar.Image size={44} source={require('../assets/icons.png')} />
          <Avatar.Text size={44} label="XD" />
        </View>
        <View style={styles.containers1}>
          <Text style={styles.titles1}>Avatar</Text>
        </View>
      </View>
      <View style={styles.containers}>
        <View style={styles.containerss}>
          <Badge>3</Badge>
        </View>
        <View style={styles.containers1}>
          <Text style={styles.titles1}>Badge</Text>
        </View>
      </View>
      <View style={styles.containers}>
        <View style={styles.containerss}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </View>
        <View style={styles.containers1}>
          <Text style={styles.titles1}>Checkbox</Text>
        </View>
      </View>
      <View style={styles.containers}>
      <View style={styles.containersss}>
      <Chip icon="information" onPress={() => console.log('Pressed')}>Information</Chip>
      <Chip icon="heart" onPress={() => console.log('Pressed')}>Heart</Chip>
      <Chip icon="home" onPress={() => console.log('Pressed')}>Home</Chip>
      </View>
      <View style={styles.containers1}>
        <Text style={styles.titles1}>Chip</Text>
      </View>
    </View>
    <View style={styles.containers}>
        <View style={styles.containerss1}>
        <TextInput label="Email" value={text} onChangeText={onChangeText} />
        <HelperText type="error" visible={hasErrors()}>
          Email address is invalid!
        </HelperText>
        </View>
        <View style={styles.containers1}>
          <Text style={styles.titles1}>HelperText</Text>
        </View>
      </View>

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
    marginBottom: 50
  },
  containers: {
    width: '100%',
    margin: 5,
    borderRadius: 10,
    borderColor: '#76625a',
    borderWidth: 2,
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'flex-end',

  },
  containers1: {
    borderTopWidth: 2,
    borderColor: '#76625a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#fbfaeb',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  containerss: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
    gap: 10
  },
  containerss1: {
    
    padding: 10,
    flexDirection: 'culomn',
    gap: 10,
    width: '100%'
  },
  containersss: {
   flexWrap: 'wrap',
   flexDirection: 'row',
   padding: 10,
   gap: 10
  },
  titles1: {
    fontWeight: 'bold'
  }



});