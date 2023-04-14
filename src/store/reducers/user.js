export default function userReducer(state, action) {//recebe a versao mais atual do estado e uma ação. para saber como alterar o estado para uma nova versao
    
    switch(action.type) { //toda ação tem atributo tipo e outras infos
        case 'login': 
            return {...state, user: { name: action.payload}}
        default:
            return state // se n der certo retorna o estado atual
    }
}