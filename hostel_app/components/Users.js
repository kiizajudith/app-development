import React from 'react'

function Users() {
    return (
        <div class="container-fluid">

            <div class="row">
                <div class="col-lg-12">
                    <button class="btn btn-primary float-right btn-sm" id="new_user"><i class="fa fa-plus"></i> New user</button>
                </div>
            </div>
            <br />
            <div class="row">
                <div class="card col-lg-12">
                    <div class="card-body">
                        <table class="table-striped table-bordered col-md-12">
                            <thead>
                                <tr>
                                    <th class="text-center">#</th>
                                    <th class="text-center">Name</th>
                                    <th class="text-center">Username</th>
                                    <th class="text-center">Type</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td class="text-center">
                                        3
                                    </td>
                                    <td>
                                        name
                                    </td>

                                    <td>
                                        username
                                    </td>
                                    <td>
                                        type
                                    </td>
                                    <td>
                                        <center>
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-primary">Action</button>
                                                <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span class="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item edit_user" href="#">'Edit</a>
                                                </div>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item delete_user" href="#">Delete</a>
                                            </div>

                                        </center>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div >

        </div >
    )
}

export default Users