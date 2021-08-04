import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: "123",
        icon: "home",
        location: "Maison",
        destination: "27 Avenue Mahatma Gandhi, Ste Suzanne, La Réunion"
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Bureau",
        destination: "Lotissement cojondé, Zone de cambaie, 97460, La Réunion"
    }
];

const NavFavourites = () => {
    return (
        <FlatList 
            data={data}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, { height:0.5 }]} />
            )}
            renderItem={({item: { location, destination, icon }}) => (
                <TouchableOpacity style={tw`flex-row items-center p-5`}>
                    <Icon 
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={icon} 
                        color="white" 
                        type="ionicon"
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-500`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavourites

const styles = StyleSheet.create({})
