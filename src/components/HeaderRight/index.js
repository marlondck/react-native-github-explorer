import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HeaderRight extends Component  {
  signOut = () => {
    //deslogar usuario
  }
  render() {
    return (
       <TouchableOpacity onPress={this.signOut}>
        <Icon name="exchange" size={16} syle={styles.icon} />
       </TouchableOpacity>
    );
  }
}
