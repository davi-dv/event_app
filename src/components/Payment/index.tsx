import React, {FC, ReactElement, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon?: IconProp;
  label: string;
  data: Array<{label: string; value: string}>;
  onSelect: (item: {label: string; value: string}) => void;
}
const PaymentDropdown: FC<Props> = ({label, data, onSelect}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Props>();

  const setSelectedToFather = (item: any) => {
    setSelectedLanguage(item);
    onSelect(item);
  };
  console.log(selectedLanguage);
  return (
    // <View>
    <Picker
      style={{color: '#43ffa9', backgroundColor:'#1e2630', margin:10, borderRadius:10}}
      selectedValue={selectedLanguage}
      onValueChange={item => {
        setSelectedToFather(item);
      }}>
      {data.map((item, index) => {
        return (
          <Picker.Item label={item.label} value={item.value} key={index} />
        );
      })}
    </Picker>
    // </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e2630',
    height: 50,
    zIndex: 1
  },
  buttonText: {
    color: '#43ffa9',
    flex: 1,
    textAlign: 'center'
  },
  icon: {
    marginRight: 15
  },
  dropdown: {
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#fff',
    width: '95%',
    shadowColor: '#fff',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5
  },
  overlay: {
    width: '100%',
    height: '100%'
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1
  }
});

export default PaymentDropdown;
