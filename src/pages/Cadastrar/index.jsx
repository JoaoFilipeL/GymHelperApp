import FormularioCadastro from '../../componentes/FormularioCadastro';
import Header from '../../componentes/Header';
import './Cadastrar.css';

export default function Cadastrar() {
    return (
      <div className="App">
          <Header type={'logo'}/>
          <div className="linha-cadastro">Cadastrar</div>
              <div className='linha-titulo' /> 
          <FormularioCadastro />
      </div>
    );
  }