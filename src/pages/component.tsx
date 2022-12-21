import { PureComponent } from 'react';
import { Cell, Form } from '@taroify/core';

import { MainNav } from '../components/MainNav';
import { RangeField } from '../components/RangeField';
import { AreaSelect } from '../components/AreaSelect';

definePageConfig({
  navigationBarTitleText: '高级组件演示'
});

interface State {
  range: [number, number];
  areaValues?: string[];
}

export default class ComponentPage extends PureComponent<{}, State> {
  state: Readonly<State> = {
    range: [4, 6]
  };

  render() {
    const { range, areaValues } = this.state;

    return (
      <div>
        <Form>
          <Cell.Group title="高级控件">
            <RangeField
              title="范围"
              unit="mm"
              name="range"
              max={100}
              value={range}
              onChange={range => this.setState({ range })}
            />
            <Form.Item>
              <Form.Label>所在地</Form.Label>
              <Form.Control>
                <AreaSelect
                  value={areaValues}
                  onChange={areas =>
                    this.setState({
                      areaValues: areas.map(({ value }) => value)
                    })
                  }
                />
              </Form.Control>
            </Form.Item>
          </Cell.Group>
        </Form>

        <MainNav path="component" />
      </div>
    );
  }
}
