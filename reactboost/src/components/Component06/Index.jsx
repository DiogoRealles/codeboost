import { useEffect, useRef } from "react";

const Index = () => {
  const titleOne = useRef();

  useEffect(() => {
    let elemTitleOne = titleOne.current;
    alert(elemTitleOne.innerText);
  }, []);

  return (
    <div>
      <h2>Component 06</h2>
      <p>
        <strong>useRef:</strong> É um <strong>hook</strong> que permite
        referenciar algum elemento no component (button, video, input, etc),
        semelhante ao querySelector do JS. <br />
      </p>
      <br />

      <div>
        <h3 ref={titleOne}>Title One</h3>
      </div>
    </div>
  );
};

export default Index;
