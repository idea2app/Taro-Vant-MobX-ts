import { CellGroup, Form } from '@antmjs/vantui';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Component } from 'react';

import { AreaSelect } from '../components/AreaSelect';
import { MainNav } from '../components/MainNav';
import { RangeField } from '../components/RangeField';

definePageConfig({
  navigationBarTitleText: '高级组件演示'
});

@observer
export default class ComponentPage extends Component {
  @observable
  accessor range: [number, number] = [4, 6];

  @observable
  accessor areaCode = '';

  render() {
    const { range, areaCode } = this;

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
              onChange={({ detail }) => (this.range = detail)}
            />
            <AreaSelect
              title='所在地'
              name='area'
              value={areaCode}
              onChange={areaCode => (this.areaCode = areaCode)}
            />
          </CellGroup>
        </Form>

        <MainNav path='component' />
      </div>
    );
  }
}
