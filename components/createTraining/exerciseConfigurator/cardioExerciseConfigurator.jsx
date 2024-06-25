import { useEffect, useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

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
        placeholder="Durée de l'exercice en minutes"
        value={duration}
        onChangeText={(value) => setDuration(value)}
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
    borderColor: "#f5554a",
  },
});
