import React, { useEffect, useState } from "react";
import {
  Button,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CardioExerciseConfigurator } from "./cardioExerciseConfigurator";
import { StrengthExerciseConfigurator } from "./strengthExerciseConfigurator";

export function ExerciseConfigurator({ onChange, index, onRemove }) {
  const [type, setType] = useState("");
  const [exerciseConfig, setExerciseConfig] = useState({});
  const [activeButton, setActiveButton] = useState(""); // State to track active button

  useEffect(() => {
    onChange({ index, type, ...exerciseConfig });
  }, [exerciseConfig, type]);

  function handleTypeChange(type) {
    setType(type);
    setExerciseConfig({});
    setActiveButton(type); // Set the active button when type changes
  }

  return (
    <View style={styles.configurator}>
      <Text style={styles.text}>Choisir le type d'exercice :</Text>
      <View style={styles.buttonContainer}>
        <View>
          <TouchableOpacity
            onPress={() => handleTypeChange("Strenght")}
            style={[
              styles.roundButton,
              activeButton === "Strenght" && styles.activeButton, // Apply active style conditionally
            ]}
          >
            <LinearGradient
              colors={["#004080", "#00aaff"]}
              style={styles.gradient}
            >
              <Image
                source={require("../../../assets/strenght.png")}
                style={styles.buttonImage}
              />
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.type}>Force</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => handleTypeChange("Cardio")}
            style={[
              styles.roundButton,
              activeButton === "Cardio" && styles.activeButtonCardio, // Apply active style conditionally
            ]}
          >
            <LinearGradient
              colors={["#004080", "#00aaff"]}
              style={styles.gradient}
            >
              <Image
                source={require("../../../assets/cardio.png")}
                style={styles.buttonImageCardio}
              />
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.type}>Cardio</Text>
        </View>
      </View>
      {type === "Strenght" && (
        <StrengthExerciseConfigurator onChange={setExerciseConfig} />
      )}
      {type === "Cardio" && (
        <CardioExerciseConfigurator onChange={setExerciseConfig} />
      )}
      <TouchableOpacity
        style={styles.button}
        title="Supprimer"
        onPress={() => onRemove(index)}
      >
        <Text style={styles.buttonText}>Supprimer</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  configurator: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: "#FFF9F2",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 28,
    color: "#004080",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  roundButton: {
    width: 120,
    height: 120,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Ensure the gradient and image fit within the button
  },
  type: {
    textAlign: "center",
    fontSize: 20,
    color: "#004080",
    fontWeight: "bold",
    paddingTop: 10,
  },
  gradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonImage: {
    width: 95,
    height: 95,
  },
  buttonImageCardio: {
    width: 90,
    height: 90,
  },
  activeButton: {
    borderWidth: 5,
    borderColor: "#FFA500",
  },
  activeButtonCardio: {
    borderWidth: 5,
    borderColor: "#f5554a",
  },
  button: {
    backgroundColor: "#f5554a",
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 50,
    width: "30%",
    alignItems: "center",
    marginTop: 20,
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
