import React, { useState, useEffect } from 'react'
import { ScrollView, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AuthRegister } from '../../redux/actions/Register'

const SignUp = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);
    const { loading, data, error, isRegister } = useSelector((state) => state.register);
    const [ formRegister, setFormRegister ] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
    });
    const dispatch = useDispatch();
    const handleRegister = (e) => {
      e.preventDefault()
      dispatch(AuthRegister(formRegister))
    }
    useEffect(() => {
      if (isRegister === true) {
        navigation.navigate('SignIn')
      } else {
        navigation.navigate('SignUp')
      }
    }, [isRegister])

    const handleInput = (name, text) => {
        setFormRegister({...formRegister, [text]: name})
        console.log(formRegister)
    }
    return (
        <ScrollView style={{ paddingHorizontal: 30, backgroundColor: '#FFFFFF' }}>
            <View>
                <Image source={require('../../assets/images/tickitz-purple.png')} style={{
                    width: 150, height: 50,
                }} />
                <Text style={{ color: '#000000', fontSize: 50, fontWeight: '600', paddingTop: 30 }}>Sign Up</Text>
                <Text style={{ color: '#8692A6', fontSize: 20, fontWeight: '400', paddingBottom: 20 }}>
                    Fill your additional details
                </Text>
            </View>
            <View style={{ paddingBottom: 15 }}>
                <Text style={{ color: '#4E4B66', fontSize: 20, fontWeight: '200', marginBottom: 5 }}>First Name</Text>
                <View style={{ borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 7, height: 60 }}>
                    <TextInput name={formRegister.firstName} onChangeText={name => handleInput(name, 'firstName')} placeholder="Write your first name" style={{ padding: 8, borderRadius: 5, flex: 1 }} />
                </View>
            </View>
            <View style={{ paddingBottom: 15 }}>
                <Text style={{ color: '#4E4B66', fontSize: 20, fontWeight: '200', marginBottom: 5 }}>Last Name</Text>
                <View style={{ borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 7, height: 60 }}>
                    <TextInput name={formRegister.lastName} onChangeText={name => handleInput(name, 'lastName')} placeholder="Write your last name" style={{ padding: 8, borderRadius: 5, flex: 1 }} />
                </View>
            </View>
            <View style={{ paddingBottom: 15 }}>
                <Text style={{ color: '#4E4B66', fontSize: 20, fontWeight: '200', marginBottom: 5 }}>Phone Number</Text>
                <View style={{ borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 7, height: 60 }}>
                    <TextInput name={formRegister.phone} onChangeText={name => handleInput(name, 'phone')} placeholder="Write your phone number" style={{ padding: 8, borderRadius: 5, flex: 1 }} keyboardType='phone-pad' />
                </View>
            </View>
            <View style={{ paddingBottom: 15 }}>
                <Text style={{ color: '#4E4B66', fontSize: 20, fontWeight: '200', marginBottom: 5 }}>Email</Text>
                <View style={{ borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 7, height: 60 }}>
                    <TextInput name={formRegister.email} onChangeText={name => handleInput(name, 'email')} placeholder="Write your email" style={{ padding: 8, borderRadius: 5, flex: 1 }} autoCapitalize='none' keyboardType='email-address' />
                </View>
            </View>
            <View style={{ paddingBottom: 15 }}>
                <Text style={{ color: '#4E4B66', fontSize: 20, fontWeight: '200', marginBottom: 5 }}>Password</Text>
                <View style={{ borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 7, height: 60, flexDirection: 'row' }}>
                    <TextInput name={formRegister.password} onChangeText={name => handleInput(name, 'password')} placeholder="Write your password" style={{ padding: 8, borderRadius: 5, flex: 1 }} autoCapitalize='none' secureTextEntry={showPassword ? false : true} />
                    <Text onPress={() => setShowPassword(!showPassword)} style={{ alignSelf: 'center', padding: 10 }}>{showPassword ? 'Hide' : 'Show'}</Text>
                </View>
            </View>
            <View style={{ paddingTop: 30 }}>
                <TouchableOpacity onPress={handleRegister} style={{ backgroundColor: "#5F2EEA", paddingVertical: 10, borderRadius: 10, height: 60 }} android_ripple={{
                    color: "#fff",
                }}>
                    <Text style={{ color: '#fff', fontSize: 25, alignSelf: 'center' }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ color: '#8692A6', fontSize: 22, fontWeight: 'bold', alignSelf: 'center', paddingTop: 10 }}>Already have an account?
                <Text onPress={() => navigation.navigate('SignIn')} style={{ color: '#5F2EEA', fontSize: 22, fontWeight: 'bold', alignSelf: 'center' }}> Sign In</Text>
            </Text>
            
        </ScrollView>
    )
}


export default SignUp;