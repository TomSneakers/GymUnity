import { useEffect, useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nom de l'exercice"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={sets}
        placeholder="Nombre de série"
        onChangeText={(value) => setSets(value)}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Nombre de répétitions"
        value={reps}
        onChangeText={(value) => setReps(value)}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Poids en kg"
        value={weight}
        onChangeText={(value) => setWeight(value)}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Temps de repos en secondes"
        value={restTime}
        onChangeText={(value) => setRestTime(value)}
      />
    </View>
  );
}
//style
const styles = StyleSheet.create({
  container: {
    margin: 0,
  },
  input: {
    backgroundColor: "#FFF9F2",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#FFA500",
  },
});
