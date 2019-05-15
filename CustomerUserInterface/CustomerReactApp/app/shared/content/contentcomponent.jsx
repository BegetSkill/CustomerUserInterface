import React from 'react';
import { CustomerDetailsComponent } from '../../customer/customerdetails';

export class ContentComponent extends React.Component {
    render() {
        return (
            <div className="col-12">
                <CustomerDetailsComponent />
            </div>);

    }
}