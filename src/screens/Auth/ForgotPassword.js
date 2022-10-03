import React from 'react'
import { ScrollView, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
const ForgotPassword = ({ navigation }) => {
    return (
        <ScrollView style={{ paddingHorizontal: 30, paddingVertical: 50, backgroundColor: '#FFFFFF' }}>
            <View>
                <Image source={require('../../assets/images/tickitz-purple.png')} style={{
                    width: 150, height: 50,
                }} />
                <Text style={{ color: '#000000', fontSize: 50, fontWeight: '600', paddingTop: 30 }}>Forgot Password</Text>
                <Text style={{ color: '#8692A6', fontSize: 20, fontWeight: '400', paddingBottom: 20 }}>
                    We'll send a link to your email shortly
                </Text>
            </View>
            <View style={{ paddingBottom: 15 }}>
                <Text style={{ color: '#4E4B66', fontSize: 20, fontWeight: '200', marginBottom: 5 }}>Email</Text>
                <View style={{ borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 7, height: 60 }}>
                    <TextInput placeholder="Write your email" style={{ padding: 8, borderRadius: 5, flex: 1 }} autoCapitalize='none' keyboardType='email-address' />
                </View>
            </View>
            <View style={{ paddingTop: 30 }}>
                <TouchableOpacity onPress={() => navigation.navigate('NewPassword')} style={{ backgroundColor: '#5F2EEA', padding: 10, borderRadius: 10, height: 60 }}>
                    <Text style={{ color: '#fff', fontSize: 25, alignSelf: 'center' }}>Send</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


export default ForgotPassword;