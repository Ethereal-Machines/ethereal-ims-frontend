import React, { Component } from 'react';
import Heading from '../../../../components/form/heading/heading'
import { Tabs, Icon } from 'antd';
import './agreement.css'

const TabPane = Tabs.TabPane;


class Agreement extends Component {
    render(){
        return(
            <div className="container flex-column">
                <Heading heading={<b>Vendor Agreement Service</b>}/>
                <div className="agreements">
                    Hi! I'm agreement and read me carefully for your safety
                    Hi! I'm agreement and read me carefully for your safety
                    Hi! I'm agreement and read me carefully for your safety
                    Hi! I'm agreement and read me carefully for your safety
                </div>
            </div>
        )
    }
}

export default Agreement