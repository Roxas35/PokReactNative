import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";

export const Pokemon = ({ nav, item }) => {
            const index = item.url.split("/")[6];
            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`;

        return (
     <TouchableOpacity activeOpacity={1} onPress={() => nav.navigate('Detail', {item})}>
        <View style={styles.container}>
            <View >
            <Image style={styles.image} source={{ uri: image }}></Image>
            </View>
            <Text style={{ textTransform: "capitalize"}}>{item.name}</Text>
        </View>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    container: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'

    },

    image: {
        resizeMode: 'contain',
        height: 150,
        width: 150
    }
})