import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { styles } from './style';


const MainHomePage = (props) => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)

  const onSetLoading = bool => {
    setIsLoading(bool)
  }

  return (
    <View style={styles.container}>
    </View>
  )
}

export default MainHomePage
