// import React, { useState } from 'react';
// import {
//   Image,
//   Modal,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// function YourComponent() {
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [pinCode, setPinCode] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   const handleSubmit = () => {
//     if (!name || !address || !pinCode || !phoneNumber) {
//       alert('Please fill in all fields');
//       return;
//     }

//     setName('');
//     setAddress('');
//     setPinCode('');
//     setPhoneNumber('');

//     toggleModal();
//   };
// }

//   return (
//     <View>
//       {/* ... Your existing code ... */}
//       <TextInput
//         style={{
//           width: '100%',
//           fontSize: 13,
//           borderRadius: 8,
//           height: 35,
//           borderWidth: 1,
//           padding: 10,
//         }}
//         placeholder="Your Name"
//         value={name}
//         onChangeText={(text) => setName(text)}
//       />
//       <TextInput
//         style={{
//           width: '100%',
//           fontSize: 13,
//           borderRadius: 8,
//           height: 35,
//           borderWidth: 1,
//           padding: 10,
//         }}
//         placeholder="Your Address"
//         value={address}
//         onChangeText={(text) => setAddress(text)}
//       />
//       <TextInput
//         style={{
//           width: '100%',
//           fontSize: 13,
//           borderRadius: 8,
//           height: 35,
//           borderWidth: 1,
//           padding: 10,
//         }}
//         placeholder="Pin Code"
//         value={pinCode}
//         onChangeText={(text) => setPinCode(text)}
//       />
//       <TextInput
//         style={{
//           width: '100%',
//           fontSize: 13,
//           borderRadius: 8,
//           height: 35,
//           borderWidth: 1,
//           padding: 10,
//         }}
//         placeholder="Phone Number"
//         value={phoneNumber}
//         onChangeText={(text) => setPhoneNumber(text)}
//       />
//       <TouchableOpacity
//         onPress={handleSubmit}
//         style={{
//           width: 100,
//           borderRadius: 10,
//           height: 30,
//           backgroundColor: '#ff751a',
//         }}>
//         {/* ... Your existing code ... */}
//       </TouchableOpacity>
//       {/* ... Your existing code ... */}
//     </View>
//   );
// }

// export default YourComponent;

// import React, { useState } from 'react';
// import {
//   Image,
//   Modal,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// function YourComponent() {
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [pinCode, setPinCode] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [nameError, setNameError] = useState('');
//   const [addressError, setAddressError] = useState('');
//   const [pinCodeError, setPinCodeError] = useState('');
//   const [phoneNumberError, setPhoneNumberError] = useState('');

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   const handleSubmit = () => {
//     // Reset all previous errors
//     setNameError('');
//     setAddressError('');
//     setPinCodeError('');
//     setPhoneNumberError('');

//     // Validate input fields and set error messages
//     if (!name) {
//       setNameError('Please enter your name');
//     }
//     if (!address) {
//       setAddressError('Please enter your address');
//     }
//     if (!pinCode) {
//       setPinCodeError('Please enter a valid pin code');
//     }
//     if (!phoneNumber) {
//       setPhoneNumberError('Please enter a valid phone number');
//     }

//     // Check if there are any errors
//     if (nameError || addressError || pinCodeError || phoneNumberError) {
//       return;
//     }

//     // Process form submission here
//     // You can send the data to your server or perform any necessary actions

//     // Clear input fields
//     setName('');
//     setAddress('');
//     setPinCode('');
//     setPhoneNumber('');

//     // Close the modal
//     toggleModal();
//   };

//   return (
//     <View>
//       {/* Name input */}
//       <TextInput
//         style={{
//           width: '100%',
//           fontSize: 13,
//           borderRadius: 8,
//           height: 35,
//           borderWidth: 1,
//           padding: 10,
//         }}
//         placeholder="Your Name"
//         value={name}
//         onChangeText={(text) => setName(text)}
//       />
//       {nameError ? <Text style={{ color: 'red', fontSize: 11 }}>{nameError}</Text> : null}

//       {/* Address input */}
//       <TextInput
//         style={{
//           width: '100%',
//           fontSize: 13,
//           borderRadius: 8,
//           height: 35,
//           borderWidth: 1,
//           padding: 10,
//         }}
//         placeholder="Your Address"
//         value={address}
//         onChangeText={(text) => setAddress(text)}
//       />
//       {addressError ? <Text style={{ color: 'red', fontSize: 11 }}>{addressError}</Text> : null}

//       {/* Pin Code input */}
//       <TextInput
//         style={{
//           width: '100%',
//           fontSize: 13,
//           borderRadius: 8,
//           height: 35,
//           borderWidth: 1,
//           padding: 10,
//         }}
//         placeholder="Pin Code"
//         value={pinCode}
//         onChangeText={(text) => setPinCode(text)}
//       />
//       {pinCodeError ? <Text style={{ color: 'red', fontSize: 11 }}>{pinCodeError}</Text> : null}

//       {/* Phone Number input */}
//       <TextInput
//         style={{
//           width: '100%',
//           fontSize: 13,
//           borderRadius: 8,
//           height: 35,
//           borderWidth: 1,
//           padding: 10,
//         }}
//         placeholder="Phone Number"
//         value={phoneNumber}
//         onChangeText={(text) => setPhoneNumber(text)}
//       />
//       {phoneNumberError ? (
//         <Text style={{ color: 'red', fontSize: 11 }}>{phoneNumberError}</Text>
//       ) : null}

//       <TouchableOpacity
//         onPress={handleSubmit}
//         style={{
//           width: 100,
//           borderRadius: 10,
//           height: 30,
//           backgroundColor: '#ff751a',
//         }}>
//         {/* ... Your existing code ... */}
//       </TouchableOpacity>
//       {/* ... Your existing code ... */}
//     </View>
//   );
// }

// export default YourComponent;

import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';

export default function YourComponent() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [pinCodeError, setPinCodeError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSubmit = () => {
    // Reset all previous errors
    setNameError('');
    setAddressError('');
    setPinCodeError('');
    setPhoneNumberError('');

    let hasError = false; // Track if there are any errors

    // Validate input fields and set error messages
    if (!name) {
      setNameError('Please enter your name');
      hasError = true; // There's an error
    }
    if (!address) {
      setAddressError('Please enter your address');
      hasError = true; // There's an error
    }
    if (!pinCode) {
      setPinCodeError('Please enter a valid pin code');
      hasError = true; // There's an error
    }
    if (!phoneNumber) {
      setPhoneNumberError('Please enter a valid phone number');
      hasError = true; // There's an error
    }

    // If there are errors, do not proceed
    if (hasError) {
      return;
    }

    // Process form submission here
    // You can send the data to your server or perform any necessary actions

    // Clear input fields
    setName('');
    setAddress('');
    setPinCode('');
    setPhoneNumber('');

    // Close the modal
    toggleModal();
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <Image
          style={{width: 38, height: 38, marginRight: 17}}
          source={require('../../imgs/person.png')}
        />
      </TouchableOpacity>

      <TextInput
        style={{
          width: '100%',
          fontSize: 13,
          borderRadius: 8,
          height: 35,
          borderWidth: 1,
          padding: 10,
        }}
        placeholder="Your Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      {nameError ? (
        <Text style={{color: 'red', fontSize: 11}}>{nameError}</Text>
      ) : null}

      {/* Repeat the same pattern for other input fields */}

      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          width: 100,
          borderRadius: 10,
          height: 30,
          backgroundColor: '#ff751a',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
          }}>
          <Text style={{color: 'white', fontWeight: '700'}}>SUBMIT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
