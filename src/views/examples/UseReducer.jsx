import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store'
import { numberAdd2, login } from '../../store/actions' 

const UseReducer = (props) => {
   
    const [state, dispatch]= useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span>
                : <span className="text">Sem usuário</span> }
                
                <span className="text">{state.number}</span>
                <div>
                    <button 
                        className="btn" 
                        onClick={() => numberAdd2(dispatch)}>
                            +2
                    </button>
                    <button 
                        className="btn" 
                        onClick={() => dispatch( { type: 'multiply7'})}> 
                                * 7
                    </button>
                    <button 
                        className="btn" 
                        onClick={() => dispatch( { type: 'divide25'})}> 
                                / 25
                    </button>
                    <button 
                        className="btn" 
                        onClick={() => dispatch( { type: 'Parseint'})}> 
                                Converter para inteiro
                    </button>
                    <button 
                        className="btn" 
                        onClick={() => dispatch( { type: 'numberAddN', payload: 3})}> 
                                Adiciona valor
                    </button>
                    <button 
                        className="btn" 
                        onClick={() => login(dispatch, 'Stênio')}> 
                            Login 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
