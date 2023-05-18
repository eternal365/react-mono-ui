import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  Button,
  Checkbox,
  Container,
  Header,
  Heading,
  Input,
  Paragraph,
  Radio,
  Section,
  Select,
  TextArea,
} from 'components';
import { Ui } from 'contexts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Ui.Provider>
      <Header title="mono ui" />
      <Section>
        <Container>
          <Heading>welcome to mono ui!</Heading>
          <Paragraph>here is a demo of the components.</Paragraph>
          <Input placeholder="input placeholder example" />
          <TextArea placeholder="textarea placeholder example" />
          <Select>
            <Select.Group label="select group example">
              <Select.Option>option example #1</Select.Option>
              <Select.Option>option example #2</Select.Option>
              <Select.Option>option example #3</Select.Option>
            </Select.Group>
            <Select.Group label="another group example">
              <Select.Option>option example #4</Select.Option>
              <Select.Option>option example #5</Select.Option>
              <Select.Option>option example #6</Select.Option>
              <Select.Option>option example #7</Select.Option>
            </Select.Group>
          </Select>
          <Checkbox>checkbox example #1</Checkbox>
          <Checkbox>checkbox example #2</Checkbox>
          <Checkbox>checkbox example #3</Checkbox>
          <Radio name="radio">radio example #1</Radio>
          <Radio name="radio">radio example #2</Radio>
          <Radio name="radio">radio example #3</Radio>
          <Button>button example</Button>
          <Button outlined>outlined button example</Button>
        </Container>
      </Section>
    </Ui.Provider>
  </React.StrictMode>,
);
