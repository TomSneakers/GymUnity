import {useEffect, useState} from "react";
import {Text, TextInput, View} from "react-native";

export function StrengthExerciseConfigurator({onChange}) {
    const [name, setName] = useState("");
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);
    const [restTime, setRestTime] = useState(0);

    useEffect(() => {
        onChange({name, sets, reps, weight, restTime});
    }, [name, sets, reps, weight, restTime]);

    return (
        <View>
            <Text>Nom de l'exercice</Text>
            <TextInput value={name} onChangeText={setName}/>
            <Text>Nombre de série</Text>
            <TextInput autoComplete={"cc-number"} value={sets} onChangeText={setSets}/>
            <Text>Nombres de répétitions</Text>
            <TextInput autoComplete={"cc-number"} value={reps} onChangeText={setReps}/>
            <Text>Poids</Text>
            <TextInput autoComplete={"cc-number"} value={weight} onChangeText={setWeight}/>
            <Text>Temps de repos</Text>
            <TextInput autoComplete={"cc-number"} value={restTime} onChangeText={setRestTime}/>
        </View>
    );
}