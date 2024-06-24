// userContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Chargement des données utilisateur depuis SecureStore au démarrage de l'application
        const fetchUser = async () => {
            try {
                const userData = await SecureStore.getItemAsync("userData");
                if (userData) {
                    setUser(JSON.parse(userData));
                }
            } catch (error) {
                console.log("Erreur lors du chargement des données utilisateur:", error);
            }
        };

        fetchUser();
    }, []);

    const updateUser = async (userData) => {
        try {
            setUser(userData);
            await SecureStore.setItemAsync("userData", JSON.stringify(userData));
            //montrer le token de l'utilisateur en console
        } catch (error) {
            console.log("Erreur lors de la mise à jour des données utilisateur:", error);
        }
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
