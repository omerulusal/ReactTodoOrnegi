import React, { createContext, useContext, useReducer } from "react";

export const TodoLayerContext = createContext();
//  componentler arasında veri paylaşımını sağlamak için kullanılır.

export const TodoLayer = ({ initialState, reducer, children }) => (

    <TodoLayerContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </TodoLayerContext.Provider>
);

export const useTodoLayerDeger = () => useContext(TodoLayerContext);


/*
"TodoLayer" Componenti, üç props alır:
initialState: Bağlamın ilk değeri
reducer : Bağlamdaki değişkeni yöneten işlev
children : Bu bağlamda erişebilen çocuk bileşenler.
*/