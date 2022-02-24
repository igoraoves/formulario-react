import React from 'react';


const App = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [tel, setTel] = React.useState('')
  const [pass, setPass] = React.useState('')
  const [repass, setRepass] = React.useState('')
  const [error, setError] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (validateTel(tel)) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  function handleSubmit(event){}
  function validateTel(value) {
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (!/^\d{7}-?\d{4}$/.test(value)) {
      setError('Preencha um número válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }
/*
  function validatePass(){
    const pass = document.getElementById(pass.value);
    const repass = document.getElementById(repass.value);
    console.log(pass)
    if (pass != repass) {
       alert("SENHAS DIFERENTES!\nFAVOR DIGITAR SENHAS IGUAIS"); 
    }else{
       handleSubmit();
    }
 }
 */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='nome'>Nome</label>
      <input 
      id='nome'
      type='text'
      value={nome}
      maxlength="120"
      required
      onChange={(event) => setNome (event.target.value)}
      />

      <label htmlFor='email'>E-mail</label>
      <input 
      id='email'
      type='email'
      value={email}
      maxlength="120"
      required
      onChange={(event) => setEmail (event.target.value)}
      />

      <label htmlFor='tel'>Celular</label>
      <input
      id='tel'
      type='number'
      value={tel}
      placeholder = '(xx)xxxxx-xxxx'
      required
      onChange={(event) => setTel (event.target.value)}
      />
      
      {error && <p>{error}</p>}

      <label htmlFor='pass'>Senha</label>
      <input
      id='pass'
      type='password'
      value={pass}
      minlength='6'
      required
      onChange={(event) => setPass (event.target.value)}
      />
      
      <label htmlFor='repass'>Repita a senha</label>
      <input 
      id='repass'
      type='password'
      value={repass}
      minlength='6'
      required
      onChange={(event) => setRepass (event.target.value)}
      />

      <button>Enviar</button>
    </form>
  )
}

export default App;
