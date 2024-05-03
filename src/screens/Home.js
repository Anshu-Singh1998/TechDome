import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Delete from '../../Assets/Delete.png';
import Edit from '../../Assets/Edit.png';

const Home = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [position, setPosition] = useState('');
  const [details, setDetails] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  const addItem = () => {
    if (
      name.trim() !== '' &&
      age.trim() !== '' &&
      gender.trim() !== '' &&
      phoneNumber.trim() !== '' &&
      position.trim() !== '' &&
      details.trim() !== ''
    ) {
      setItems([
        ...items,
        {
          id: Math.random().toString(),
          name,
          age,
          gender,
          phoneNumber,
          position,
          details,
        },
      ]);
      clearFields();
    }
  };

  const editItem = id => {
    const itemToEdit = items.find(item => item.id === id);
    setName(itemToEdit.name);
    setAge(itemToEdit.age);
    setGender(itemToEdit.gender);
    setPhoneNumber(itemToEdit.phoneNumber);
    setPosition(itemToEdit.position);
    setDetails(itemToEdit.details);
    setEditingItem(id);
  };

  const updateItem = () => {
    if (
      name.trim() !== '' &&
      age.trim() !== '' &&
      gender.trim() !== '' &&
      phoneNumber.trim() !== '' &&
      position.trim() !== '' &&
      details.trim() !== ''
    ) {
      setItems(
        items.map(item => {
          if (item.id === editingItem) {
            return {
              ...item,
              name,
              age,
              gender,
              phoneNumber,
              position,
              details,
            };
          }
          return item;
        }),
      );
      clearFields();
    }
  };

  const deleteItem = id => {
    setItems(items.filter(item => item.id !== id));
  };

  const clearFields = () => {
    setName('');
    setAge('');
    setGender('');
    setPhoneNumber('');
    setPosition('');
    setDetails('');
    setEditingItem(null);
  };

  return (
    <View style={{flex: 1, padding: 20}}>
      <Text style={{fontSize: 24, marginBottom: 20}}>CRUD Application</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        onChangeText={setName}
        value={name}
        placeholder="Enter name"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        onChangeText={setAge}
        value={age}
        placeholder="Enter age"
        keyboardType="numeric"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        onChangeText={setGender}
        value={gender}
        placeholder="Enter gender"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        onChangeText={setPosition}
        value={position}
        placeholder="Enter position"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        onChangeText={setDetails}
        value={details}
        placeholder="Enter details"
      />
      {editingItem !== null ? (
        <Button onPress={updateItem} title="Update" />
      ) : (
        <Button onPress={addItem} title="Add" />
      )}
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={{marginBottom: 10, flexDirection: 'row', paddingTop: 20}}>
            <View style={{width: '70%'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 16, color: '#000', fontWeight: 'bold'}}>
                  Name:
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#000',
                    fontWeight: '400',
                    paddingTop: 1,
                    paddingLeft: 10,
                  }}>
                  {item.name}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 16, color: '#000', fontWeight: 'bold'}}>
                  Age:
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#000',
                    fontWeight: '400',
                    paddingTop: 1,
                    paddingLeft: 10,
                  }}>
                  {item.age}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 16, color: '#000', fontWeight: 'bold'}}>
                  Gender:
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#000',
                    fontWeight: '400',
                    paddingTop: 1,
                    paddingLeft: 10,
                  }}>
                  {item.gender}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 16, color: '#000', fontWeight: 'bold'}}>
                  Phone Number:
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#000',
                    fontWeight: '400',
                    paddingTop: 1,
                    paddingLeft: 10,
                  }}>
                  {item.phoneNumber}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 16, color: '#000', fontWeight: 'bold'}}>
                  Position:
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#000',
                    fontWeight: '400',
                    paddingTop: 1,
                    paddingLeft: 10,
                  }}>
                  {item.position}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 16, color: '#000', fontWeight: 'bold'}}>
                  Details:
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#000',
                    fontWeight: '400',
                    paddingTop: 1,
                    paddingLeft: 10,
                  }}>
                  {item.details}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                width: '30%',
              }}>
              <View style={{paddingRight: 10}}>
                <TouchableOpacity onPress={() => editItem(item.id)}>
                  <Image source={Edit} style={{height: 30, width: 30}} />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={() => deleteItem(item.id)}>
                  <Image source={Delete} style={{height: 30, width: 30}} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
