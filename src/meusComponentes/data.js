import { Component } from "react"; // Precisa das chaves entre o Component, pois é a classe

export default class Data extends Component{

    constructor(props){
        super(); // Executa o costructor do pai
        this.props = props;
        this.dataAtual = new Date().toLocaleString();
    }

    //Fase de Montagem
    componentDidMount(){ 
        console.log("O componente foi montado.");
        this.dataAtual = new Data().toLocaleString();
    }
    componentDidUpdate(){
        console.log("O componenten foi atualizado!");
    }
    //Sobrestrita de método

    render(){ //Retorna a aparencia de um componente, onde é ecessario sempre usar, pois ele vai retornar no fial uma aparecia
        return (
            <h1>{ this.props.texto || "" }{this.dataAtual}</h1> // Dentro de chaves, seria o javascript -> {} // Coloca o | para se acaso não excutar o codigo do js
        )
    }
}