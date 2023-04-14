import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => { // componente funcional(CF) atribuido a uma constante
    //criando estado dentro de um CF

    const [count, setCount] = useState(0) //valor inicial, array com o valor inicial e o segundo valor uma função
    const [name, setName] = useState("")

    return (
        <div className="UseState">
            <PageTitle 
                title= "Hook UseState"
                subtitle= "Estado em componentes funcionais!" />
            
            <SectionTitle title= "Exercício 01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn"
                        onClick={() => setCount(current => {
                            if(current <= 0) {
                               return current = 0 
                            }else {
                               return  current - 1
                            }
                        })}>-1</button>
                    <button className="btn"
                        onClick={() => setCount(count + 1)}>+1</button>
                    <button className="btn"
                        onClick={() => setCount(current => current + 10)}>+10</button>
                    <button className="btn"
                        onClick={() => setCount(0)}>Zerar</button>
                </div>
            </div>


            <SectionTitle title= "Exercício 02"/>
            <div className='textState'>
                <span className="text">{name}</span>
                <input type="text" className="input" 
                    value={name} onChange={e => setName(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseState
