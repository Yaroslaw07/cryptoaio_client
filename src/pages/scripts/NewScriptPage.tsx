import {
  Card,
  Container,
  Step,
  StepLabel,
  Stepper,
  stepLabelClasses,
  styled,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import useAppBar from "../../hooks/useAppBar";
import NameStep from "../../components/new-script/NameStep";
import JsonStep from "../../components/new-script/JsonStep";
import FinishStep from "../../components/new-script/FinishStep";
import { useNavigate } from "react-router-dom";
import Script from "../../types/script";

import { v4 as uuidv4 } from "uuid";
import api from "../../api";

const ColorlibStepLabel = styled(StepLabel)(() => ({
  [`& .${stepLabelClasses.label}`]: {
    [`&.${stepLabelClasses.completed}`]: {
      color: "rgba(255, 255, 255, 1)",
    },
    [`&.${stepLabelClasses.active}`]: {
      color: "rgba(255, 255, 255, 1)",
    },
    color: "rgba(255, 255, 255, 0.3)",
    fontSize: "18px",
  },
}));

const addNewScript = async (script: Partial<Script>) => {
  return await api.post<Script>("scripts/", {
    id: uuidv4(),
    logs: "",
    status: "Stopped",
    ...script,
  });
};

const NewScriptPage: FC = () => {
  const navigate = useNavigate();
  const { setTitle } = useAppBar();

  const [activeStep, setActiveStep] = useState<number>(0);

  const [script, setScript] = useState<Partial<Script>>({
    name: "",
    config: JSON.parse("{}"),
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log(script);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    console.log(script);
  };

  useEffect(() => {
    setTitle("New Script");
  }, []);

  const submitName = (name: string) => {
    setScript({ ...script, name });
    handleNext();
  };

  const submitJson = (json: string) => {
    setScript({ ...script, config: JSON.parse(json) });
    handleNext();
  };

  const submitNewScript = async () => {
    try {
      const newScript = await addNewScript(script);

      const id = newScript.data.id;

      navigate("/scripts/" + id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center", gap: "40px" }}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        sx={{ maxHeight: "20px" }}
      >
        <Step key="Name">
          <ColorlibStepLabel>Name</ColorlibStepLabel>
        </Step>
        <Step key="JsonConfig">
          <ColorlibStepLabel>Json Config</ColorlibStepLabel>
        </Step>
        <Step key="FinishReview">
          <ColorlibStepLabel>Submit all</ColorlibStepLabel>
        </Step>
      </Stepper>

      <Card
        sx={{
          justifyContent: "start",
          paddingX: "60px",
          paddingY: "20px",
          width: "400px",
        }}
      >
        {activeStep === 0 && (
          <NameStep onSubmit={submitName} basicName={script.name!} />
        )}

        {activeStep === 1 && (
          <JsonStep
            basicJson={JSON.stringify(script.config, null, 2)}
            onSubmit={submitJson}
            onBack={handleBack}
          />
        )}

        {activeStep === 2 && (
          <FinishStep
            json={JSON.stringify(script.config, null, 2)}
            name={script.name!}
            onBack={handleBack}
            onSubmit={submitNewScript}
          />
        )}
      </Card>
    </Container>
  );
};

export default NewScriptPage;
