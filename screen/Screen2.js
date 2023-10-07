import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useRef, useEffect } from 'react';
import { Avatar, Badge, Banner, Checkbox, Chip,  HelperText, TextInput, Divider , SegmentedButtons , RadioButton ,IconButton, MD3Colors , List, MD3DarkTheme, MD3LightTheme, MD2Colors} from 'react-native-paper';
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
        <Text>Tanduay</Text>
        <Divider />
        <Text>Empirador</Text>
        <Divider />
        <Text>Red Horse</Text>
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
        iconColor={MD3LightTheme.error50}
        size={50}
        onPress={() => console.log('Pressed')}
      />
      <IconButton
      icon="folder"
      iconColor={MD3DarkTheme.error50}
      size={50}
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
        <List.Subheader>Some folder</List.Subheader>
        <List.Item title="First folder" left={() => <List.Icon icon="folder" />} />
        <List.Item
          title="Second folder"
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
    <Text style={styles.titles1}>Boy</Text>
    <RadioButton
      value="second"
      status={ checked === 'second' ? 'checked' : 'unchecked' }
      onPress={() => setChecked('second')}
    />
    <Text style={styles.titles1}>Girl</Text>
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
            value: 'run',
            label: 'Running',
          },
          { value: 'skate', label: 'Skating' },
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
    borderColor: 'green',
    borderWidth: 4,
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#fdf5e6'

  },
  containers1: {
    borderTopWidth: 2,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#ffdab9',
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
    fontWeight: 'bold',
    fontSize: 20,
  }



});