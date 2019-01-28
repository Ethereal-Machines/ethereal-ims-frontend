import React, { Component } from 'react';
import Button from '../../../../../components/form/button/button';

const DetailTemplate = () => {
    return(
        <table border="1">
            <thead>
                <tr>
                    <td colSpan="4">
                        <h3><b>Yet to be add</b></h3>
                    </td>
                </tr>
                <tr>
                    <th>Sr. </th>
                    <th>Product Name</th>
                    <th>Serial Number</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr>
                    <td colSpan="4" className="text-right">
                        
                    </td>                      
                </tr>
            </tfoot>
        </table>
    )
}

class OrderDetail extends Component {
    
    render(){
        let unproceedOrder, filterVendor;
        if(this.props.Orders.length > 0) {
            unproceedOrder = this.props.Orders.filter((orders) => orders.orderStatus.allocated === false);
            if(unproceedOrder.length > 0) {
                filterVendor = this.props.companies.filter((vendor) => vendor._id === unproceedOrder[0].vendorId)
            }
        }
        
        if(unproceedOrder !== undefined){
            if(unproceedOrder.length > 0){
                return(
                    <table border="1">
                        <thead>
                            <tr>
                            {
                                filterVendor !== undefined && filterVendor.length > 0 && (
                                    <td colSpan="4">
                                        <h3><b>{filterVendor[0] ? filterVendor[0].name : 'Yet to be add'}</b></h3>
                                        {filterVendor[0] ? filterVendor[0].location : ''}
                                    </td>
                                )
                            }
                            </tr>
                            <tr>
                                <th>Sr. </th>
                                <th>Product Name</th>
                                <th>Serial Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                unproceedOrder[0].products !== undefined && unproceedOrder[0].products.length > 0 && (
                                    unproceedOrder[0].products.map((product, index) => (
                                        <tr key={product._id}>
                                            <td>{index}</td>
                                            <td>{product.name}</td>
                                            <td>{product.machineSRN}</td>
                                            <td>
                                                <span><a href="javascript:;" onClick={() => this.props.removeProduct(product, unproceedOrder[0]._id)}>Remove</a></span>
                                            </td>
                                        </tr>
                                    ))
                                )
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="4" className="text-right">
                                    {
                                        unproceedOrder[0].products !== undefined && unproceedOrder[0].products.length > 0
                                        ? <Button isType="primary" onClick={() => this.props.proceedOrder(unproceedOrder[0]._id)}>Proceed</Button>
                                        : null
                                    }
                                </td>                       
                            </tr>
                        </tfoot>
                    </table>
                )
            }else{
                return <DetailTemplate/>
            }
        }else {
            return <DetailTemplate/>
        }
        
    }
}

export default OrderDetail