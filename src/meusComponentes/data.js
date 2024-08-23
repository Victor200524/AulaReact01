import { Component } from "react"; // Precisa das chaves entre o Component, pois é a classe

export default class Data extends Component{

    constructor(props){
        super(); // Executa o costructor do pai
        this.props = props;
        this.state = {dataAtual : new Date().toLocaleString()} // A dataAtual, é o estado do componente
    }
    
    pegaDateDe(timeZone){
        const dataAtual = new Date();
        let timeZoneFromDB = parseInt(timeZone);
        let diferencaTempo = timeZoneFromDB * 60 + dataAtual.getTimezoneOffset();
        let milisegundos = parseInt(dataAtual.getTime()+ (diferencaTempo *60 * 1000));
        return data;

    }

    //Fase de Montagem
    componentDidMount(){ 
        console.log("O componente foi montado.");
        // Não é permitido atualizar o estado com componente de forma direta this.state = ....
        this.setState({
            dataAtual : new Date().toLocaleString()
        });
    }
    componentDidUpdate(){
        console.log("O componenten foi atualizado!");
        setTimeout(()=>{ 
            this.setState({
            dataAtual : new Date().toLocaleString()
        });
        },1000);
    }
    //Sobrestrita de método

    render(){ //Retorna a aparencia de um componente, onde é ecessario sempre usar, pois ele vai retornar no fial uma aparecia
        return (
            <h1>{ this.props.texto || "" }{this.state.dataAtual}</h1> // Dentro de chaves, seria o javascript -> {} // Coloca o || para se acaso não excutar o codigo do js
        )
    }
}