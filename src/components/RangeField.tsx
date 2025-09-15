import { Col, FormItem, Row, Slider } from '@antmjs/vantui';
import { FormItemProps } from '@antmjs/vantui/types/form';
import { SliderProps } from '@antmjs/vantui/types/slider';
import { FC } from 'react';

export interface RangeFieldProps
  extends Pick<FormItemProps, 'name' | 'required' | 'rules'>,
    Pick<SliderProps, 'min' | 'max' | 'onChange'> {
  title: string;
  unit?: string;
  value: [number, number];
}

export const RangeField: FC<RangeFieldProps> = ({
  title,
  unit,
  name,
  value,
  required = false,
  rules,
  ...rest
}) => (
  <>
    <FormItem label={title} {...{ name, required, rules }}>
      {value?.[0]} ~ {value?.[1]}
      {unit}
    </FormItem>

    <Row>
      <Col span='14' offset='8' className='py-3'>
        <Slider range value={Array.from(value)} {...rest} />
      </Col>
    </Row>
  </>
);
