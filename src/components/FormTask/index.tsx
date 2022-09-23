import React, { FC, useState, useEffect } from "react";
import { FormTaskProps, Position } from "./FormTask.types";
import {
  Container,
  Form,
  FormRow,
  InputFull,
  InputHalf,
  Select,
  SaveButton,
  ContainMap,
} from "./styles";
import Map from "../Map";

const FormTask: FC<FormTaskProps> = (props) => {
  const {
    disabled,
    task,
    send = () => {},
    saveText,
    update = () => {},
    textButton,
  } = props;

  const [created, setCreated] = useState(false);
  const [hasSupervision, setHasSupervision] = useState(`${task?.had_supervision}`);
  const [id, setId] = useState("");

  const [newPosition, setNewPosition] = useState<Position>(
    task?.location
      ? { lat: task?.location.latitude, lng: task?.location.longitude }
      : { lat: 0, lng: 0 }
  );

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  useEffect(() => {
    setId(getRandomInt(0, 100000).toString());
  }, []);

  return (
    <Container>
      <Form
        onSubmit={(e: any) => {
          // any
          const elements = e.target.elements;
          setCreated(true);
          const data = {
            id,
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
              latitude: newPosition?.lat,
              longitude: newPosition?.lng,
            },
            created_at: "2022-02-01T10:10:21.748Z",
            updated_at: "2022-02-01T10:10:21.748Z",
          };
          if (saveText) {
            if (created) {
              update(e, data);
            } else {
              send(e, data);
            }
          } else {
            send(e, data);
          }
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
            onChange={(e: any) => setHasSupervision(e.target.value)}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </Select>
        </FormRow>
        <FormRow>
          {hasSupervision === "true" && (
            <InputFull
              defaultValue={task?.to?.name}
              disabled={disabled}
              name="supervision_name"
              placeholder="Supervision name"
            />
          )}
        </FormRow>
        <ContainMap>
          <Map setNewPosition={setNewPosition} center={newPosition} />
        </ContainMap>
        {textButton && (
          <SaveButton type="submit">
            {created && saveText ? saveText : textButton}
          </SaveButton>
        )}
      </Form>
    </Container>
  );
};

export default FormTask;
