import { useState, useEffect } from "react";

//useEffect é um hook que permite gerenciar o ciclo de vida
//do componente quando ele é desolvido utilizando a sintaxe JSX

//SINTAXE ABAIXO:
/*
    useEffect( funcao(){
        return function() <-- willUnmont
    },[] didMount // Executa uma só vez)
    [lista de valores observador] didUpdate para cada valor que foi atualizado
*/
export default function DataV2(props){
    const [dataAtual,setDataAtual] = useState(new Date().toLocaleDateString());

    function pegaDateDe(timeZone){
        const dataAtual = new Date();
        let timeZoneFromDB = parseInt(timeZone);
        let diferencaTempo = timeZoneFromDB * 60 + dataAtual.getTimezoneOffset();
        let milisegundos = parseInt(dataAtual.getTime()+ (diferencaTempo *60 * 1000));
        const data = new Date(milisegundos);
        return data;
    }

    //exemplo de didMount
    useEffect(()=>{
        setDataAtual(new Date().toLocaleDateString()); // ATUALIZA O ESTADO DA DATA ATUAL
        return ()=>{}// RETORNA UMA FUNÇÃO -> willUnmont
    },[])

    //exemplo de didUpdate
    useEffect(()=>{ 
        setTimeout(()=>{ 
            setDataAtual(pegaDateDe(props.timeZone).toLocaleDateString());
        },1000);
    },[dataAtual]) //<-- O que observar para executar a função a cada atualização do que está sendo observado

    return(
        <>
            <h1>{props.texto || ""}{dataAtual}</h1> 
        </>
    );
}