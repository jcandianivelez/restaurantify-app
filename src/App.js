import React, {Component} from 'react';
import {ScrollView, Text, StatusBar} from 'react-native';
import {graphql} from '@apollo/react-hoc';
import getClients from './graphql/getQueries.gql';
import SearchAppBar from './Components/searchBar';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: '',
    };
  }
  componentDidMount() {
    const clients = this.props.data.clients;

    this.setState({clients});
  }

  renderFunc = () => {
    if (this.state.clients)
      return this.state.clients.map((each) => (
        <Text style={{paddingLeft: '35%'}} key={each.id}>
          {each.name}
        </Text>
      ));
  };
  render() {
    return (
      <ScrollView style={{paddingTop: 35}}>
        <SearchAppBar />
      </ScrollView>
    );
  }
}

export default graphql(getClients)(App);
