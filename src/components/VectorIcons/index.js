import React from 'react';
import { StyleSheet, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const VectorIcons = (props) => {
  const { name, type, color, size } = props
  let icons = undefined
  if (type == 'AntDesign') {
    icons = <AntDesign {...props} name={name} size={size} color={color} />
  } else if (type == 'Feather') {
    icons = <Feather {...props} name={name} size={size} color={color} />
  } else if (type == 'FontAwesome') {
    icons = <FontAwesome {...props} name={name} size={size} color={color} />
  } else if (type == 'FontAwesome5') {
    icons = <FontAwesome5 {...props} name={name} size={size} color={color} />
  } else if (type == 'Ionicons') {
    icons = <Ionicons {...props} name={name} size={size} color={color} />
  } else if (type == 'MaterialIcons') {
    icons = <MaterialIcons {...props} name={name} size={size} color={color} />
  }

  return (
    <View style={[styles.container, props.style]}>
      {icons}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})

export default VectorIcons;
