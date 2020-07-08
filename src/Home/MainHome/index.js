import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { styles } from './style';


const MainHome = (props) => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)

  const onSetLoading = bool => {
    setIsLoading(bool)
  }

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  )
}

export default MainHome
