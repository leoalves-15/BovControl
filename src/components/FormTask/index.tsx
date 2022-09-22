import React, { FC } from "react";
import { FormTaskProps } from "./FormTask.types";
import {
  Container,
  Form,
  FormRow,
  InputFull,
  InputHalf,
  Select,
  SaveButton,
} from "./styles";

const FormTask: FC<FormTaskProps> = (props) => {
  const { disabled, task, send = () => {} } = props;

  return (
    <Container>
      <Form onSubmit={() => send()}>
        <FormRow>
          <InputFull
            value={task?.farmer?.name}
            disabled={disabled}
            placeholder="Farm Name"
          />
        </FormRow>
        <FormRow>
          <InputFull
            value={task?.from?.name}
            disabled={disabled}
            placeholder="Farmer Name"
          />
        </FormRow>
        <FormRow>
          {/* city e type */}
          <InputFull
            value={task?.farmer?.city}
            disabled={disabled}
            placeholder="City"
          />
          <Select value={task?.type} disabled={disabled}>
            <option value="Antibiótico">Antibiótico</option>
            <option value="BPA">BPA</option>
            <option value="BPF">BPF</option>
          </Select>
        </FormRow>
        <FormRow>
          {/* numero de vaca, de leite e se tem cuidador */}
          <InputHalf
            value={task?.number_of_cows_head}
            disabled={disabled}
            placeholder="Cown quantity"
          />
          <InputHalf
            value={task?.amount_of_milk_produced}
            disabled={disabled}
            placeholder="Milk production"
          />
          <Select value={`${task?.had_supervision}`} disabled={disabled}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
        </FormRow>
        <FormRow>
          {/* supervisor */}
          <InputFull
            value={task?.to?.name}
            disabled={disabled}
            placeholder="Supervision name"
          />
        </FormRow>
        <FormRow>{/* mapa */}</FormRow>
        <SaveButton type="submit">Add Task</SaveButton>
      </Form>
    </Container>
  );
};

export default FormTask;
