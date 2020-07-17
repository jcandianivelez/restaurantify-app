import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Card, Header, Icon} from 'react-native-elements';

export default class SearchAppBar extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;

    return (
      <View>
        <Header
          containerStyle={{backgroundColor: 'transparent'}}
          leftComponent={{icon: 'menu', color: '#000'}}
          centerComponent={{text: ''}}
          rightComponent={{icon: 'search', color: '#000'}}></Header>
        <View style={{paddingTop: 55, paddingLeft: 25}}>
          <Text style={{color: '#000', fontWeight: 'bold', fontSize: 40}}>
            Comida
            <Text style={{color: '#000', fontWeight: 'normal', fontSize: 40}}>
              {' '}
              deliciosa
            </Text>
          </Text>

          <View
            style={{
              marginTop: 20,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              alignSelf: 'center',
            }}>
            <View style={{marginLeft: -20}}>
              <Card containerStyle={{padding: 20, borderColor: '#888888'}}>
                <Icon
                  name="fast-food-outline"
                  type="ionicon"
                  color="#888888"></Icon>
              </Card>
            </View>
            <View>
              <Card containerStyle={{padding: 20, borderColor: '#888888'}}>
                <Icon
                  name="fast-food-outline"
                  type="ionicon"
                  color="#888888"></Icon>
              </Card>
            </View>
            <View>
              <Card containerStyle={{padding: 20, borderColor: '#888888'}}>
                <Icon
                  name="fast-food-outline"
                  type="ionicon"
                  color="#888888"></Icon>
              </Card>
            </View>
            <View>
              <Card containerStyle={{padding: 20, borderColor: '#888888'}}>
                <Icon
                  name="fast-food-outline"
                  type="ionicon"
                  color="#888888"></Icon>
              </Card>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: -20,
              marginTop: '15%',
            }}></View>
        </View>
      </View>
    );
  }
}
