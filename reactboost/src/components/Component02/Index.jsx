const Index = () => {
  return (
    <div>
      <h2>Component 02</h2>
      <p>
        <strong>Eventos:</strong> São ações de interatividade por parte dos
        usuários. A aplicação dispara uma função de aordo com a ação realizada e
        disponível. <br />
        onClick, onChange, Mouse, Keyboard, Resize, etc.
      </p>
      <br />

      <div>
        <p>
          <strong>onClick:</strong> Quando o usuário clica em algo que seja
          interativo. <br />
          <button onClick={() => alert("Clicked.")}>Click me</button>
        </p>
        <br />
      </div>

      <div>
        <p>
          <strong>onMouseLeave:</strong> Quando o usuário clica em algo que seja
          interativo. <br />
          <button onMouseLeave={() => alert("O mouse saiu.")}>
            Passe o mouse aqui e tire
          </button>
        </p>
        <br />
      </div>

      <div>
        <p>
          <strong>onMouseOver:</strong> Quando o usuário clica em algo que seja
          interativo. <br />
          <button onMouseOver={() => alert("Mouse passou por cima")}>
            Passe o mouse por cima
          </button>
        </p>
        <br />
      </div>
    </div>
  );
};

export default Index;
