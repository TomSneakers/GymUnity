// composant pour acceptez ou non la politique de confidentialité

import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, Image } from "react-native";


const ButtonAccepte = ({ navigation }) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);



    return (
        //Switch accepte ou refuse la politique de confidentialité
        <View style={styles.container}>
            <View style={styles.settingContainer}>
                <Text style={styles.settingLabel}>Accepter la politique de confidentialité</Text>
                <Switch
                    value={isSwitchOn}
                    onValueChange={onToggleSwitch}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    settingContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    settingLabel: {
        fontSize: 16,
        marginRight: 10,
    },
});

export default ButtonAccepte;