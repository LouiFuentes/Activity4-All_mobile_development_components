import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';

export default function SvgComponent(props) {
  return (
    <View style={styles.viewPager}>
    <Svg height="50%" width="50%" viewBox="0 0 100 100" {...props}>
      <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
      <Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill="yellow" />
    </Svg>
    </View>
  );
}
const styles = StyleSheet.create({
    viewPager: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
});