import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Composant pour choisir le type d'exercice
function ChooseExercise({ onSelectExerciseType }) {
    const [exerciseType, setExerciseType] = useState('standard');

    const handleSelectExerciseType = (type) => {
        setExerciseType(type);
        onSelectExerciseType(type);
    };

    return (
        <View>
            <Text>Choisir le type d'exercice :</Text>
            <Picker selectedValue={exerciseType} onValueChange={handleSelectExerciseType}>
                <Picker.Item label="Exercice Standard" value="standard" />
                <Picker.Item label="Exercice Cardio" value="cardio" />
            </Picker>
        </View>
    );
}


export default ChooseExercise;
