import { CellGroup, Form } from '@antmjs/vantui';
import { PureComponent } from 'react';

import { AreaSelect } from '../components/AreaSelect';
import { MainNav } from '../components/MainNav';
import { RangeField } from '../components/RangeField';

definePageConfig({
  navigationBarTitleText: '高级组件演示'
});

interface State {
  range: [number, number];
  areaCode?: string;
}

export default class ComponentPage extends PureComponent<{}, State> {
  state: Readonly<State> = {
    range: [4, 6]
  };

  render() {
    const { range, areaCode } = this.state;

    return (
      <div>
        <Form>
          <CellGroup title='高级控件'>
            <RangeField
              title='范围'
              unit='mm'
              name='range'
              max={100}
              value={range}
              onChange={({ detail }) => this.setState({ range: detail })}
            />
            <AreaSelect
              title='所在地'
              name='area'
              value={areaCode}
              onChange={areaCode => this.setState({ areaCode })}
            />
          </CellGroup>
        </Form>

        <MainNav path='component' />
      </div>
    );
  }
}
