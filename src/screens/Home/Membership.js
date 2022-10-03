import React from 'react';
import { ScrollView, Text, TextInput, View, TouchableOpacity } from 'react-native';

const Membership = () => {
    return (<>
    <ScrollView>
        <View style={{ backgroundColor: '#FFF', alignItems: 'center', paddingTop: 80, paddingBottom: 80 }}>
            <View style={{ width: 370, height: 470, borderWidth: 1, borderColor: '#DEDEDE', borderRadius: 10, padding: 40, margin: 15, elevation: 2 }}>
                <View>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: '#4E4B66', paddingTop: 5 }}>Be the vanguard of the</Text>
                    <Text style={{ fontSize: 50, textAlign: 'center', color: '#5F2EEA', paddingBottom: 25}}>Moviegoers</Text>
                </View>
                <View style={{ borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 7, height: 60 }}>
                    <TextInput placeholder="Write your email" style={{ padding: 15, borderRadius: 5, flex: 1 }} autoCapitalize='none' keyboardType='email-address' />
                </View>
                <View style={{ paddingTop: 20 }}>
                    <TouchableOpacity style={{ backgroundColor: '#5F2EEA', borderRadius: 10, height: 60, paddingTop: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 25, textAlign: 'center' }}>Join Now</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 20, textAlign: 'center', color: '#4E4B66', paddingTop: 30 }}>
                    By joining you as a Tickitz member, we will always send you the latest updates via email
                </Text>
            </View>
        </View>
    </ScrollView>
    </>);
};

export default Membership;