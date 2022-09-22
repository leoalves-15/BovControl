import React, {useRef, useEffect} from "react";
import { Container, Form, FormRow, InputFull, InputHalf, Select } from "./styles";

const FormTask = () => {
    const myref = useRef<HTMLFormElement>(null);
    useEffect(() => {
        console.log(myref.current)

    }, [myref.current])
    
  return (
    <Container>
      <Form ref={myref}>
        <FormRow>
          <InputFull placeholder="Farm Name"/>
        </FormRow>
        <FormRow>
          <InputFull placeholder="Farmer Name"/>
        </FormRow>
        <FormRow>
            {/* city e type */}
            <InputFull placeholder="City"/>
            <Select>
                <option value="Antibiótico">Antibiótico</option>
                <option value="BPA">BPA</option>
                <option value="BPF">BPF</option>
            </Select>
        </FormRow>
        <FormRow>
            {/* numero de vaca, de leite e se tem cuidador */}
            <InputHalf placeholder="Cown quantity"/>
            <InputHalf placeholder="Milk production"/>
            <Select>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </Select>
        </FormRow>
        <FormRow>
            {/* supervisor */}
          <InputFull placeholder="Supervision name"/>
        </FormRow>
        <FormRow>
            {/* mapa */}
        </FormRow>
      </Form>
    </Container>
  );
};

export default FormTask;
