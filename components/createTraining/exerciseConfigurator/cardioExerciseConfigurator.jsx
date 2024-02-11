import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";

export function CardioExerciseConfigurator({ onChange }) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    onChange({
      name,
      duration: duration ? parseInt(duration) : 0,
    });
  }, [name, duration]);

  return (
    <View>
      <Text>Nom de l'exercice</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Durée (en minutes)</Text>
      <TextInput
        keyboardType="numeric"
        value={duration}
        onChangeText={(value) => setDuration(value)}
      />
    </View>
  );
}
