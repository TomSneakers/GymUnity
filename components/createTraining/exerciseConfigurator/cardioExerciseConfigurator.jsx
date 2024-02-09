import {useEffect, useState} from "react";
import {Text, TextInput, View} from "react-native";

export function CardioExerciseConfigurator({onChange}) {
    const [name, setName] = useState("");
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        onChange({name, duration});
    }, [name, duration]);

    return (
        <View>
            <Text>Nom de l'exercice</Text>
            <TextInput value={name} onChangeText={setName}/>
            <Text>Durée (en minutes)</Text>
            <TextInput value={duration} onChangeText={setDuration}/>
        </View>
    );

}