const ValueReducer=(state,action)=>{
        switch (action.type) {
            case 'INCREMENT':
                return state+action.value
            case 'DECREMENT':
                return state -action.value
            
            default:
                break;
        }
}

export default ValueReducer;