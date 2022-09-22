import React, { useRef, useEffect, FC } from "react";
import { FormTaskProps } from "./FormTask.types";
import {
  Container,
  Form,
  FormRow,
  InputFull,
  InputHalf,
  Select,
} from "./styles";

const FormTask: FC<FormTaskProps> = (props) => {
  const { disabled } = props;

  const myref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    console.log(myref.current);
  }, []);

  return (
    <Container>
      <Form ref={myref}>
        <FormRow>
          <InputFull disabled={disabled} placeholder="Farm Name" />
        </FormRow>
        <FormRow>
          <InputFull disabled={disabled} placeholder="Farmer Name" />
        </FormRow>
        <FormRow>
          {/* city e type */}
          <InputFull disabled={disabled} placeholder="City" />
          <Select disabled={disabled}>
            <option value="Antibiótico">Antibiótico</option>
            <option value="BPA">BPA</option>
            <option value="BPF">BPF</option>
          </Select>
        </FormRow>
        <FormRow>
          {/* numero de vaca, de leite e se tem cuidador */}
          <InputHalf disabled={disabled} placeholder="Cown quantity" />
          <InputHalf disabled={disabled} placeholder="Milk production" />
          <Select disabled={disabled}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
        </FormRow>
        <FormRow>
          {/* supervisor */}
          <InputFull disabled={disabled} placeholder="Supervision name" />
        </FormRow>
        <FormRow>{/* mapa */}</FormRow>
      </Form>
    </Container>
  );
};

export default FormTask;
