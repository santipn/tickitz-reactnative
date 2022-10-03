import React, { useState, useEffect } from 'react'
import { ScrollView, Text, TextInput, View,Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AuthLogin } from '../../redux/actions/Auth'

const SignIn = ({ navigation }) => {
    const [ showPassword, setShowPassword ] = useState(false);
    const { loading, data, error, isLogin } = useSelector((state) => state.auth);
    const [ formLogin, setFormLogin ] = useState({email: '', password: ''});
    const dispatch = useDispatch();
    const handleLogin = (e) => {
      e.preventDefault()
      dispatch(AuthLogin(formLogin))
    }
    useEffect(() => {
      if (isLogin === true) {
        navigation.navigate('Home')
      } else {
        navigation.navigate('SignIn')
      }
    }, [isLogin])

    const handleInput = (name, text) => {
        setFormLogin({...formLogin, [text]: name})
        console.log(formLogin)
    }

    return (
        <ScrollView style={{ paddingHorizontal: 30, paddingVertical: 50, backgroundColor: '#FFFFFF'}}>
            <View>
                <Image source={require('../../assets/images/tickitz-purple.png')} style={{
                    width: 150, height: 50,
                }} />
                <Text style={{ color: '#000000', fontSize: 50, fontWeight: '600', paddingTop: 30 }}>Sign In</Text>
                <Text style={{ color: '#8692A6', fontSize: 20, fontWeight: '400', paddingBottom: 20 }}>
                    Sign in with your data that you entered during your registration
                </Text>
            </View>
            <View style={{ paddingBottom: 15 }}>
                <Text style={{ color: '#4E4B66', fontSize: 20, fontWeight: '200', marginBottom: 5 }}>Email</Text>
                <View style={{ borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 7, height: 60 }}>
                    <TextInput name={formLogin.email} onChangeText={name => handleInput(name, 'email')} placeholder="Write your email" style={{ padding: 8, borderRadius: 5, flex: 1 }} autoCapitalize='none' keyboardType='email-address' />
                </View>
            </View>
            <View style={{ paddingBottom: 15 }}>
                <Text style={{ color: '#4E4B66', fontSize: 20, fontWeight: '200', marginBottom: 5 }}>Password</Text>
                <View style={{ borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 7, height: 60, flexDirection: 'row' }}>
                    <TextInput name={formLogin.password} onChangeText={name => handleInput(name, 'password')} placeholder="Write your password" style={{ padding: 8, borderRadius: 5, flex: 1 }} autoCapitalize='none' secureTextEntry={showPassword ? false : true} />
                    <Text onPress={() => setShowPassword(!showPassword)} style={{ alignSelf: 'center', padding: 10 }}>{showPassword ? 'Hide' : 'Show'}</Text>
                </View>
            </View>
            <View style={{ paddingTop: 30 }}>
                <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: '#5F2EEA', padding: 10, borderRadius: 10, height: 60 }} android_ripple={{
                    color: "#fff",
                }}>
                    <Text style={{ color: '#fff', fontSize: 25, alignSelf: 'center'}}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <View style={{ paddingTop: 20 }}>
                <Text style={{ color: '#8692A6', fontSize: 22, fontWeight: 'bold', alignSelf: 'center'}}>
                    Forgot your password? 
                    <Text onPress={() => navigation.navigate('ForgotPassword')} style={{ color: '#5F2EEA' }}> Reset Now</Text>
                </Text>
                <Text style={{ color: '#8692A6', fontSize: 22, fontWeight: 'bold', alignSelf: 'center'}}>
                    Don't have an account?
                    <Text onPress={() => navigation.navigate('SignUp')} style={{ color: '#5F2EEA' }}> Sign Up</Text>
                </Text>
            </View>
        </ScrollView>
    )
}

export default SignIn;