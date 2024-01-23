import { useParams } from "react-router-dom";

const ScriptPage = () => {
  const { scriptId } = useParams();

  return (
    <>
      <p>{scriptId}</p>
    </>
  );
};

export default ScriptPage;
