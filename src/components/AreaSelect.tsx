import { Area, FormItem, Popup } from '@antmjs/vantui';
import { AreaProps } from '@antmjs/vantui/types/area';
import { FormItemProps } from '@antmjs/vantui/types/form';
import { areaList } from '@vant/area-data';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Component, KeyboardEvent } from 'react';

export type Area = Record<'name' | 'code', string>;

export interface AreaSelectProps
  extends Pick<FormItemProps, 'name' | 'required'>,
    Omit<AreaProps, 'onChange'> {
  onChange: (value: string) => any;
}

@observer
export class AreaSelect extends Component<AreaSelectProps> {
  @observable
  accessor show = false;

  AreaMap = {
    ...areaList.province_list,
    ...areaList.city_list,
    ...areaList.county_list
  };

  get nameValue() {
    const { value } = this.props;

    return (
      value &&
      [...value]
        .map((_, index, code) =>
          index % 2
            ? this.AreaMap[
                code
                  .slice(0, index + 1)
                  .join('')
                  .padEnd(6, '0')
              ]
            : ''
        )
        .filter(Boolean)
        .join(' ')
    );
  }

  close = () => (this.show = false);

  handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();

      this.show = true;
    }
  };

  change: AreaProps['onConfirm'] = ({ detail: { value } }) => {
    this.close();

    this.props.onChange?.((value as Area[]).slice(-1)[0].code);
  };

  render() {
    const { title, name, value, columnsNum } = this.props,
      { show, nameValue } = this;

    return (
      <>
        <FormItem label={title} name={name}>
          <span
            role='button'
            tabIndex={0}
            onClick={() => (this.show = true)}
            onKeyDown={this.handleKeyDown}
          >
            {nameValue || '请选择地区'}
          </span>
        </FormItem>

        <Popup
          show={show}
          position='bottom'
          style={{ height: '50vh' }}
          onClose={this.close}
        >
          <Area
            title={title}
            areaList={areaList}
            columnsNum={columnsNum}
            value={value}
            onCancel={this.close}
            onConfirm={this.change}
          />
        </Popup>
      </>
    );
  }
}
