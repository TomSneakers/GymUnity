import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";

export function StrengthExerciseConfigurator({ onChange }) {
  const [name, setName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [restTime, setRestTime] = useState("");

  useEffect(() => {
    onChange({
      name,
      sets: sets ? parseInt(sets) : 0,
      reps: reps ? parseInt(reps) : 0,
      weight: weight ? parseFloat(weight) : 0,
      restTime: restTime ? parseInt(restTime) : 0,
    });
  }, [name, sets, reps, weight, restTime]);

  return (
    <View>
      <Text>Nom de l'exercice</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Nombre de série</Text>
      <TextInput
        keyboardType="numeric"
        value={sets}
        onChangeText={(value) => setSets(value)}
      />
      <Text>Nombres de répétitions</Text>
      <TextInput
        keyboardType="numeric"
        value={reps}
        onChangeText={(value) => setReps(value)}
      />
      <Text>Poids</Text>
      <TextInput
        keyboardType="numeric"
        value={weight}
        onChangeText={(value) => setWeight(value)}
      />
      <Text>Temps de repos</Text>
      <TextInput
        keyboardType="numeric"
        value={restTime}
        onChangeText={(value) => setRestTime(value)}
      />
    </View>
  );
}
