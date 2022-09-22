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
  const { disabled, task, send = () => {}, textButton } = props;

  return (
    <Container>
      <Form
        onSubmit={(e: any) => {
          // any
          const elements = e.target.elements;

          send(e, {
            type: elements.type.value,
            amount_of_milk_produced: parseInt(
              elements.amount_of_milk_produced.value
            ),
            number_of_cows_head: parseInt(elements.number_of_cows_head.value),
            had_supervision:
              elements.had_supervision.value === "true" ? true : false,
            farmer: {
              name: elements.farm_name.value,
              city: elements.city.value,
            },
            from: {
              name: elements.farmer_name.value,
            },
            to: {
              name: elements.supervision_name.value,
            },
            location: {
              latitude: -23.5,
              longitude: -46.6,
            },
            created_at: "2022-02-01T10:10:21.748Z",
            updated_at: "2022-02-01T10:10:21.748Z",
          });
        }}
      >
        <FormRow>
          <InputFull
            defaultValue={task?.farmer?.name}
            disabled={disabled}
            placeholder="Farm Name"
            name="farm_name"
          />
        </FormRow>
        <FormRow>
          <InputFull
            defaultValue={task?.from?.name}
            disabled={disabled}
            placeholder="Farmer Name"
            name="farmer_name"
          />
        </FormRow>
        <FormRow>
          {/* city e type */}
          <InputFull
            defaultValue={task?.farmer?.city}
            disabled={disabled}
            placeholder="City"
            name="city"
          />
          <Select name="type" defaultValue={task?.type} disabled={disabled}>
            <option value="Antibiótico">Antibiótico</option>
            <option value="BPA">BPA</option>
            <option value="BPF">BPF</option>
          </Select>
        </FormRow>
        <FormRow>
          {/* numero de vaca, de leite e se tem cuidador */}
          <InputHalf
            defaultValue={task?.number_of_cows_head}
            disabled={disabled}
            name="number_of_cows_head"
            type="number"
            placeholder="Cown quantity"
          />
          <InputHalf
            name="amount_of_milk_produced"
            defaultValue={task?.amount_of_milk_produced}
            disabled={disabled}
            type="number"
            placeholder="Milk production"
          />
          <Select
            name="had_supervision"
            defaultValue={`${task?.had_supervision}`}
            disabled={disabled}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
        </FormRow>
        <FormRow>
          {/* supervisor */}
          <InputFull
            defaultValue={task?.to?.name}
            disabled={disabled}
            name="supervision_name"
            placeholder="Supervision name"
          />
        </FormRow>
        <FormRow>{/* mapa */}</FormRow>
        {textButton && <SaveButton type="submit">{textButton}</SaveButton>}
      </Form>
    </Container>
  );
};

export default FormTask;
