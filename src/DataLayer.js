import React, {createContext, useContext, useReducer} from 'react';

//preparing the data layer
export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

//anytime w=you ant to get a value from datalayer use this 
export const useDataLayerValue = () => useContext(DataLayerContext);