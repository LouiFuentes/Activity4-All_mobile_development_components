import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useRef, useEffect } from 'react';
import { Avatar, Badge, Banner, Checkbox, Chip,  HelperText, TextInput, Divider , SegmentedButtons , RadioButton ,IconButton, MD3Colors , List} from 'react-native-paper';
export default function Screen2() {
  const [text, setText] = React.useState('');
  const [value, setValue] = React.useState('');

  const onChangeText = text => setText(text);

 const hasErrors = () => {
   return !text.includes('@');
 };
  const [visible, setVisible] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.containers}>
        <View style={styles.containerss1}>
        <Text>Lemon</Text>
        <Divider />
        <Text>Mango</Text>
        <Divider />
        <Text>Apple</Text>
        <Divider />
        </View>
        <View style={styles.containers1}>
          <Text style={styles.titles1}>Divider</Text>
        </View>
      </View>
      <View style={styles.containers}>
        <View style={styles.containerss}>
        <IconButton
        icon="camera"
        iconColor={MD3Colors.error50}
        size={40}
        onPress={() => console.log('Pressed')}
      />
      <IconButton
      icon="camera"
      iconColor={MD3Colors.error50}
      size={40}
      onPress={() => console.log('Pressed')}
    />
        </View>
        <View style={styles.containers1}>
          <Text style={styles.titles1}>IconButton</Text>
        </View>
      </View>
      <View style={styles.containers}>
        <View style={styles.containerss}>
        <List.Section>
        <List.Subheader>Some title</List.Subheader>
        <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
        <List.Item
          title="Second Item"
          left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
        />
      </List.Section>
        </View>
        <View style={styles.containers1}>
          <Text style={styles.titles1}>List</Text>
        </View>
      </View>
      <View style={styles.containers}>
      <View style={styles.containerss}>
      <RadioButton
      value="first"
      status={ checked === 'first' ? 'checked' : 'unchecked' }
      onPress={() => setChecked('first')}
    />
    <Text style={styles.titles1}>Male</Text>
    <RadioButton
      value="second"
      status={ checked === 'second' ? 'checked' : 'unchecked' }
      onPress={() => setChecked('second')}
    />
    <Text style={styles.titles1}>Female</Text>
      </View>
      <View style={styles.containers1}>
        <Text style={styles.titles1}>RadioButton</Text>
      </View>
    </View>
    <View style={styles.containers}>
        <View style={styles.containerss1}>
        <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'walk',
            label: 'Walking',
          },
          {
            value: 'train',
            label: 'Transit',
          },
          { value: 'drive', label: 'Driving' },
        ]}
      />
        </View>
        <View style={styles.containers1}>
          <Text style={styles.titles1}>SegmentedButtons</Text>
        </View>
      </View>

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    margin: 8,
    alignItems: 'center',
    marginBottom: 50,
      flexGrow: 1, 
      padding: 5, 
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
  titles1: {
    fontWeight: 'bold'
  }



});