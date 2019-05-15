import React from "react";

export class CustomerDetailsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.Save = this.Save.bind(this);
        this.GetStateList = this.GetStateList.bind(this);
        this.GetCountryList = this.GetCountryList.bind(this);
    }

    componentDidMount(){
        this.GetCountryList();
    }

    GetCountryList() {
        alert("country selected");
    }

    GetStateList() {
        alert("country selected");
    }

    Save() {
        alert("Save customer");
    }

    render() {
        return (
            <div className="row">
                <div id="accordion" className="col-12">
                    <div className="card">
                        <div className="card-header  page_header" id="customer_heading_dv">
                            <h6 className="mb-0" data-toggle="collapse" data-target="#customerdetails_dv" aria-expanded="true" aria-controls="customerdetails_dv">
                                Personal
                        </h6>
                        </div>
                        <div id="customerdetails_dv" className="collapse show" aria-labelledby="customer_heading_dv" data-parent="#accordion">
                            <div className="card-body">
                                <form id="customerdetails">
                                    <div className="row">
                                        <div className="form-group col-4">
                                            <label for="txtFirstName">First Name</label>
                                            <input type="text" className="form-control" id="txtFirstName" />
                                        </div>
                                        <div className="form-group col-4">
                                            <label for="txtMiddleName">Middle Name</label>
                                            <input type="text" className="form-control" id="txtMiddleName" />
                                        </div>
                                        <div className="form-group col-4">
                                            <label for="txtLastName">Last Name</label>
                                            <input type="text" className="form-control" id="txtLastName" />
                                        </div>
                                        <div className="form-group col-4">
                                            <label for="txtContactNumber">Contact Number</label>
                                            <input type="phone" className="form-control" id="txtContactNumber" />
                                        </div>
                                        <div className="form-group col-4">
                                            <label for="txtemail">Email</label>
                                            <input type="Email" className="form-control" id="txtemail" />
                                        </div>
                                        <div className="form-group col-4">
                                            <label for="ddlGender">Gender</label>
                                            <select id="ddlGender" class="form-control">
                                                <option select>-- Select --</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header  page_header" id="customer_add_heading_dv">
                            <h6 className="mb-0" data-toggle="collapse" data-target="#customer_add_details_dv" aria-expanded="true" aria-controls="customer_add_details_dv">
                                Address
                        </h6>
                        </div>
                        <div id="customer_add_details_dv" className="collapse show" aria-labelledby="customer_add_heading_dv" data-parent="#accordion">
                            <div className="card-body">
                                <form id="customerdetails">
                                    <div className="row">
                                        <div className="form-group col-4">
                                            <label for="txtAddressLine1">Address Line 1</label>
                                            <input type="text" className="form-control" id="txtAddressLine1" />
                                        </div>
                                        <div className="form-group col-4">
                                            <label for="txtAddressLine2">Address Line2</label>
                                            <input type="text" className="form-control" id="txtAddressLine2" />
                                        </div>
                                        <div className="form-group col-4">
                                            <label for="ddlCountry">Country</label>
                                            <select id="ddlCountry" class="form-control"
                                                onChange={this.GetStateList}>
                                                <option select>-- Select --</option>
                                                <option>India</option>
                                                <option>America</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-4">
                                            <label for="ddlCountry">State</label>
                                            <select id="ddlCountry" class="form-control">
                                                <option select>-- Select --</option>
                                                <option>UP</option>
                                                <option>Delhi</option>
                                                <option>Goa</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary float-right"
                        onClick={this.Save}>Save</button>
                </div>
            </div>
        );
    }
}