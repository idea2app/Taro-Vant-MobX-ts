import { PureComponent } from 'react';
import { View } from '@tarojs/components';
import { AreaPicker, Popup } from '@taroify/core';
import { AreaPickerProps } from '@taroify/core/area-picker/area-picker';
import { areaList } from '@vant/area-data';

export interface Area {
  value: string;
  label: string;
}

export interface AreaSelectProps extends Pick<AreaPickerProps, 'depth'> {
  title?: string;
  value?: string[];
  onChange?: (value: Area[]) => any;
}

interface State {
  open: boolean;
}

export class AreaSelect extends PureComponent<AreaSelectProps, State> {
  state: Readonly<State> = {
    open: false
  };

  AreaLevels = [
    areaList.province_list,
    areaList.city_list,
    areaList.county_list
  ];

  AreaMap = {
    ...areaList.province_list,
    ...areaList.city_list,
    ...areaList.county_list
  };

  close = () => this.setState({ open: false });

  change = (values: string[]) => {
    this.close();

    this.props.onChange?.(
      values.map((value, index) => ({
        value,
        label: this.AreaLevels[index][value]
      }))
    );
  };

  render() {
    const { title, value, depth } = this.props,
      { open } = this.state;

    return (
      <>
        <View onClick={() => this.setState({ open: true })}>
          {value
            ? value
                .filter(Boolean)
                .map(code => this.AreaMap[code!])
                .join(' ')
            : '请选择地区'}
        </View>

        <Popup
          open={open}
          placement="bottom"
          style={{ height: '50vh' }}
          onClose={this.close}
        >
          <AreaPicker
            depth={depth}
            value={value}
            onCancel={this.close}
            onConfirm={this.change}
          >
            <AreaPicker.Toolbar>
              <AreaPicker.Button>取消</AreaPicker.Button>
              <AreaPicker.Title>{title}</AreaPicker.Title>
              <AreaPicker.Button>确认</AreaPicker.Button>
            </AreaPicker.Toolbar>

            <AreaPicker.Columns children={areaList} />
          </AreaPicker>
        </Popup>
      </>
    );
  }
}
