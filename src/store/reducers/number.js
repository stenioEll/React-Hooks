export default function numberReducer(state, action) {//recebe a versao mais atual do estado e uma ação. para saber como alterar o estado para uma nova versao
    switch(action.type) { //toda ação tem atributo tipo e outras infos
        case 'numberAdd2':
            return {...state, number: state.number + 2} // clona e adiciona no number 2
        case 'multiply7': 
            return {...state, number: state.number * 7}
        case 'divide25': 
            return {...state, number: state.number / 25}
        case 'Parseint': 
            return {...state, number: parseInt(state.number)}
        case 'numberAddN':
            return {...state, number: state.number + action.payload} 
        default:
            return state // se n der certo retorna o estado atual
    }
}