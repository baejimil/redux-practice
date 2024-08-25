let initialState = {
    count : 0,
    id : "",
    password: ""
}



function reducer(state = initialState, action){
    console.log(action)
    // if(action.type === "INCREMENT"){
    //     return {...state, count:state.count+ action.paypload.num}; //  reducer가 store의 값을 바꾸는데 return 값으로 바꾼다
    //                                             // ...state의 의미는 위에 정의된 여러개의 state들은 유지를 하되 , 뒤에 있는 state의 값만 바꾼다
    // }

    switch(action.type){
        case "INCREMENT":
        return{
            ...state,
            count: state.count+action.payload.num 
        }  
        
        case "DECREMENT":
        return{
            ...state,
            count: state.count-action.payload.num
        }

        case "LOGIN":
        return { 
            ...state, 
            id: action.payload.id,
            password: action.payload.password
        }
        default :
        return {...state}

    }
}

export default reducer;