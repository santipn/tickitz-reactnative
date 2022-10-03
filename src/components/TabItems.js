import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import IconHome from 'react-native-vector-icons/Entypo'

const TabItems = ({ isFocused, onPress, onLongPress, label }) => {
    const Icon = () => {
        if (label === "Home") return isFocused ? <IconHome name="home"/> : <IconHome />

        if (label === "Movies") return isFocused ? <MoviesActv /> : <IconMovies />

        if (label === "Profile") return isFocused ? <UserActv /> : <IconUser />
        
        return <IconHome />
    }
    return (
        <TouchableOpacity
            key={index}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center' }}>
            <IconHome />
            <Text style={{ fontSize: 15, marginTop: 5, color: isFocused ? '#5F2EEA' : '#6E7191' }}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItems

const styles = StyleSheet.create({})