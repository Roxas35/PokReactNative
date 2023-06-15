import React from "react"
import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const Colors = {
    normal : '#a8a878',
    grass : '#78c850',
    ground : '#e0c068',
    fighting : '#c03028',
    rock : '#b8a038',
    steel : '#b8b8d0',
    fire : '#f08030',
    electric : '#f8d030',
    flying : '#a890f0',
    psychic : '#f85888',
    bug : '#a8b820',
    dragon : '#7038f8',
    water : '#6890f0',
    ice : '#98d8d8',
    poison : '#a040a0',
    dark : '#705848',
    ghost : '#705898',
    fairy : '#ffaec9'
}

export const Detail = ({ route }) => {

    const { item } = route.params


    const index = item.url.split("/")[6];
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`;


    const[detail, setDetail] = React.useState({})
    const[colors, setColors] = React.useState(['#FFF', '#FFF'])

    React.useEffect(() => {
        fetch(item.url)
        .then(res => res.json())
        .then(data => {
            const colors = data.types.map(item =>
                Colors[item.type.name])
                if (colors.lenght === 1) colors.push
                (colors[0])
                setColors(colors)
                setDetail(data)
            })   
        .catch(e => console.log(e))
        return () => controller.abort()
    }, [])

    return(
        detail &&
        <LinearGradient style={{ flex: 1, alignItems: 'center' }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colors}>
            <Text style={styles.id}>#{detail.id} {detail.name}</Text>
            <View>
                <Image style={styles.image} source={{ uri: image }}></Image>
            </View>
            <FlatList 
            data={detail.types}
            renderItem={({item}) => {
            return <Text style= {[styles.types ,  { backgroundColor:Colors[item.type.name]}]} >{item.type.name}</Text>
            }}
            />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        height: 250,
        width: 250,
        justifyContent: 'space-around'
    },

    types: {
        height:30,
        borderRadius: 50,
        textAlign:'center',
        alignItems: 'center',
        marginLeft: 50,
        marginRight: 50,
    },
    id: {
        backgroundColor: 'white',
        textAlign:'center',
        borderRadius:10,
        margin: 40,
        marginLeft:40,
        paddingBottom:10,
        paddingTop:10,
    }
})
