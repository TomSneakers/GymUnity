import {Button, Text, View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {useEffect, useState} from "react";
import {CardioExerciseConfigurator} from "./cardioExerciseConfigurator";
import {StrengthExerciseConfigurator} from "./strengthExerciseConfigurator";

export function ExerciseConfigurator({onChange, index, onRemove}) {
    const [type, setType] = useState("");
    const [exerciseConfig, setExerciseConfig] = useState({});

    useEffect(() => {
        onChange({index, type, ...exerciseConfig});
    }, [exerciseConfig, type]);

    function handleTypeChange(type) {
        setType(type);
        setExerciseConfig({});
    }

    return (
        <View>
            <Text>Choisir le type d'exercice :</Text>
            <Picker selectedValue={type} onValueChange={handleTypeChange}>
                <Picker.Item label="Exercice Standard" value="Strenght"/>
                <Picker.Item label="Exercice Cardio" value="Cardio"/>
            </Picker>
            {type === "Strenght" && <StrengthExerciseConfigurator onChange={setExerciseConfig}/>}
            {type === "Cardio" && <CardioExerciseConfigurator onChange={setExerciseConfig}/>}
            <Button title="Supprimer" onPress={() => onRemove(index)}/>
        </View>
    );
}

