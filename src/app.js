import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyDqFiKxMr7TFs9qiDMpdQ-eStDlscz4j6k',
            authDomain: 'auth-950df.firebaseapp.com',
            databaseURL: 'https://auth-950df.firebaseio.com',
            projectId: 'auth-950df',
            storageBucket: 'auth-950df.appspot.com',
            messagingSenderId: '822071824331'
          });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;