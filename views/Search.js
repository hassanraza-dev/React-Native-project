import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {Text, View} from 'react-native';
import Header from './Header';

const Search = () => {
  const [city, setCity] = useState();
  const [cities, setCities] = useState([]);

  const fetchCities = text => 
 

  {
            setCity(text)
            fetch("https://api.weather.com/v3/location/search?apiKey=6131b09756669cda5e1eb59d67c6e110&language=en-US&query="+text+"&locationType=city&format=json")    
      .then(res=>{res.json()
        console.log("qqqq",res)
    })    
      .then(data=>{    
        console.log("cities",data)
    }).catch(err => console.log(err.message))
  }
  return (
    <View style={{flex: 1}}>
      <Header name="SEARCH" />
      <TextInput
        label="City"
        theme={{colors: {primary: '#00aaff'}}}
        value={city}
        onChangeText={(text) => fetchCities(text)}
      />
      <Button
        mode="contained"
        onPress={() => console.log('Pressed')}
        theme={{colors: {primary: '#00aaff'}}}
        style={{margin:20}}
        >
            
        <Text style={{color:'white'}}>Search</Text>
      </Button>
    </View>
  );
};

export default Search;
