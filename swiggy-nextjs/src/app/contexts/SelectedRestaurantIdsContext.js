"use client"
import React, { createContext, useContext, useState } from 'react';

const SelectedRestaurantIdsContext = createContext();

export const useSelectedRestaurantIds = () => useContext(SelectedRestaurantIdsContext);

export const SelectedRestaurantIdsProvider = ({ children }) => {
    const [selectedRestaurantIds, setSelectedRestaurantIds] = useState([]);

    return (
        <SelectedRestaurantIdsContext.Provider value={{ selectedRestaurantIds, setSelectedRestaurantIds }}>
            {children}
        </SelectedRestaurantIdsContext.Provider>
    );
};
