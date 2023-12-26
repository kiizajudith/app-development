import React from 'react'
import HostelsList from '../data/HostelsList'

function ViewHostels() {
    return (
        <div class="container-fluid">

            <div class="col-lg-12">
                <div class="row">

                    <div class="col-md-12">

                        <div class="card">
                            <div class="card-header">
                                <b>Available Hostels </b>
                            </div>
                            <div class="card-body">
                                <table class="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th class="text-center">#</th>
                                            <th class="text-center">Hostel</th>
                                            <th class="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="table-body">
                                    { HostelsList && HostelsList.length > 0 
                                    ? HostelsList.map((item) => {
                                        return (
                                            <tr>
                                            <td class="text-center">{item.id}</td>
                                            <td class="">
                                                <p id="hostel_no" >Hostel #: <b>{item.id}</b></p>
                                                <p><small>Hostel Type: <b>{item.Type}</b></small></p>
                                                <p><small>Description: <b>{item.Description}</b></small></p>
                                                <p><small>Price: <b>{item.Price}</b></small></p>
                                            </td>
                                            <td class="text-center">
                                                <button class="btn btn-sm btn-primary book_hostel" type="button">Book</button>
                                            </td>

                                        </tr>
                                        )
                                    }) : ("No hostels data")
                                    }
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default ViewHostels