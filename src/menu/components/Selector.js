import React, {useState} from 'react';
import {Content, Picker, Form, Icon} from 'native-base';

const Selector = () => {
  const [selected, setSelected] = useState('');

  const onValueChange = value => {
    setSelected(value);
  };

  return (
    <Content>
      <Form>
        <Picker
          note
          placeholder="Seleccione una nave"
          // iosIcon={<Icon name="arrow-down" />}
          mode="dropdown"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 369,
            height: 49,
            left: 13,
            top: 100,
            backgroundColor: '#000000',
            borderColor: '#FFFFFF',
            borderRadius: 4,
            borderWidth: 4,
            padding: 20,
          }}
          selectedValue={selected}
          onValueChange={onValueChange.bind(selected)}>
          <Picker.Item label="Wallet" value="key0" />
          <Picker.Item label="ATM Card" value="key1" />
          <Picker.Item label="Debit Card" value="key2" />
          <Picker.Item label="Credit Card" value="key3" />
          <Picker.Item label="Net Banking" value="key4" />
        </Picker>
      </Form>
    </Content>
  );
};

export default Selector;
