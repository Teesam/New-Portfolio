import React, { useReducer } from 'react';

export const Context = React.createContext();


function reducer(state, action) {
    switch(action.type){
        case 'SWITCH':
            return{  checked: !state.checked }
            default: 
        return state
    }
}


const Store = (props) => {

    

    const [ state, dispatch ] = useReducer(reducer, { checked: true} )

    return(
        <Context.Provider value = {{ state, dispatch }}>
            { props.children }
        </Context.Provider>
    )
    
}

export default Store;