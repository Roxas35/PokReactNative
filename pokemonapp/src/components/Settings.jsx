import React from "react"
import { Button, View } from "react-native"
import { ContextSettings } from "./Context"

export const Setting = () => {
    const {setLimit, setOffset} = React.useContext(ContextSettings)

    const update = ({offset, limit}) => {
        setOffset(offset)
        setLimit(limit)
        //NavigationRouteContext.navigate('Home')
    }
    return(
        <View style={{ flex: 1, alignItems:'center', justifyContent: 'space-around'}}>
        <Button title="Kanto" onPress={() => update({offset: 0, limt:151})}></Button>
        <Button title="Jotho" onPress={() => update({offset: 151, limit:251})}></Button>
        </View>
    )
}