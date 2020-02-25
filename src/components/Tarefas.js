import React, { Component, Fragment } from "react";
import "./tarefas.css";
class Tarefa extends Component {

  constructor() {

    //super dispara o construtor da classe que está sendo extendida
    super();

    // boas práticas inicia o state com valor vazio
    this.state = {
      tarefa: "",
      tarefas: ["ir ao mercado", "lavar o banheiro", "alimentar a meg", "comprar um suco de uva", "dar uma estudada"]

    };

    //estou dizendo que a função handleChange recebe ela mesma
    this.handleChange = this.handleChange.bind(this);

    //estou dizendo que a função handleChange recebe ela mesma
    this.AddTask = this.AddTask.bind(this);
  }

  render() {
    return (
      <Fragment>
        <h1>Gerenciador de Tarefas</h1>
        <input
          onChange={this.handleChange}
          placeholder={this.state.placeholder}
          value={this.state.tarefa}
        />
        <button onClick={this.AddTask}>Add Todo</button>
        <ul>
          {this.state.tarefas.map(tarefa => <li>{tarefa}</li>)}
        </ul>
      </Fragment>
    );
  }
  AddTask() {
    this.setState({
      tarefa: "",
      placeholder: "Digite aqui seu Todo",
      tarefas: [].concat(this.state.tarefas, this.state.tarefa)
    })
  }

  handleChange(event) {
    this.setState({ tarefa: event.target.value });
  }
}

export default Tarefa;

/* Quando estamos Utilizando uma classe como Componente temos que
 ** Herdar o Componente do React, e também utilizar uma div ou fragment
 ** como pai do escopo geralmente pode utilizar ou <div> conteudo </div>
 ** ou <Fragment> conteudo </Fragment>
 ** ou apenas <> conteudo </>.
 */
