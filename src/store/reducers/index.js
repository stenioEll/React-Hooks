import numberReducer from "./number"
import userReducer from "./user"

export default function Reducer(state, action) {//recebe a versao mais atual do estado e uma ação. para saber como alterar o estado para uma nova versao
    let newState = numberReducer(state, action)
    return userReducer(newState, action)
}