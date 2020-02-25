import React, { Component } from "react";

class Tarefa extends Component {
  render() {
    return (
      /* Quando estamos Utilizando uma classe como Componente temos que
       ** Herdar o Componente do React, e também utilizar uma div ou fragment
       ** como pai do escopo geralmente pode utilizar ou <div> conteudo </div>
       ** ou <Fragment> conteudo </Fragment>
       ** ou apenas <> conteudo </>.
       */
      <>
        <h1>Entendendo o Fragment</h1>
      </>
    );
  }
}

export default Tarefa;
