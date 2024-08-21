import styles from "./styles.module.css";

const Index = () => {
  return (
    <div>
      <h2>Component 11</h2>
      <p>
        <strong>CSS Module:</strong> Para importar o css module, é só importar
        styles passando caminho do arquivo. Deste modo o React gerencia para que
        não haja conflito de nome de classes entre outros commponents.
        <br />
      </p>
      <br />

      <div>
        <div className={styles.card}>
          <p className="text-purple">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            voluptatem maiores. Ut repellat accusamus quia, totam voluptatibus
            adipisci ducimus, voluptates perspiciatis atque illum rem placeat ad
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
