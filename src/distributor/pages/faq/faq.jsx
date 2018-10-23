import React, { Component } from 'react'
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

const text = (
    <p style={{ paddingLeft: 24 }}>
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    </p>
  );

class Faqs extends Component {
    render(){
        return(
            <div>
                <Collapse bordered={false} defaultActiveKey="1" accordion>
                    <Panel header="Driver" key="1">
                    <Collapse defaultActiveKey="1" accordion>
                        <Panel header="Driver Missing" key="1">
                            {text}
                        </Panel>
                        <Panel header="Driver installation" key="2">
                            {text}
                        </Panel>
                    </Collapse>
                    </Panel>
                    <Panel header="Components" key="2">
                        {text}
                    </Panel>
                </Collapse>
            </div>
        )
    }
}

export default Faqs