import { FC } from 'react';
import { Form, Slider } from '@taroify/core';
import { SliderProps } from '@taroify/core/slider';

export interface RangeFieldProps
  extends Pick<SliderProps, 'min' | 'max' | 'onChange'> {
  title: string;
  unit?: string;
  name: string;
  value: [number, number];
  required?: boolean;
  message?: string;
}

export const RangeField: FC<RangeFieldProps> = ({
  title,
  unit,
  name,
  value,
  required = false,
  message,
  ...rest
}) => (
  <>
    <Form.Item>
      <Form.Label>{title}</Form.Label>
      <Form.Control>
        {value?.[0]} ~ {value?.[1]}
        {unit}
      </Form.Control>
    </Form.Item>
    <Form.Item name={name} rules={[{ required, message }]}>
      <Form.Label></Form.Label>
      <Form.Control>
        <Slider range value={value} {...rest} />
      </Form.Control>
    </Form.Item>
  </>
);
