import { FC } from 'react';
import { FormItem, Slider } from '@antmjs/vantui';
import { FormItemProps } from '@antmjs/vantui/types/form';
import { SliderProps } from '@antmjs/vantui/types/slider';

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

    <div className="row py-3 px-5">
      <div className="col-3" />
      <div className="col-9">
        <Slider range value={value} {...rest} />
      </div>
    </div>
  </>
);
