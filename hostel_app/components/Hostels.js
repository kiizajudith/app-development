import React, { useState } from 'react'
import HostelsList from '../data/HostelsList';
import HostelTypes from '../data/HostelTypes';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid'

function Houses() {
	const [id, setId] = useState("");
	const [category, setCategory] = useState("");
	const [description, setDescription] =useState("")
	const [price, setPrice] = useState(0);

	let history = useNavigate();
	function handleDelete(id) {
		var index = HostelsList.map(function (e) {
			return e.id
		}).indexOf(id);

		HostelsList.splice(index, 1);

		history('/hostels')

	}

	function createHostel(e) {
		e.preventDefault();

		const ids = uuid();
		let uniqueId = ids.slice(0, 8);
		
		let a = id
		let b = category
		let c = description
		let d = price

		HostelsList.push({ id: a, Type: b, Description: c, Price: d  });
		history('/hostels')
	}
	
  return (
    <div class="container-fluid pt-4">

	<div class="col-lg-12">
		<div class="row">
			{/* Form code */}
			<div class="col-md-4">
				<form action="" id="manage-hostel">
					<div class="card">
						<div class="card-header">
							Hostel Form
						</div>
						<div class="card-body">
							<div class="form-group" id="msg"></div>
							<input type="hidden" name="id" />
							<div class="form-group">
								<label class="control-label">Hostel No</label>
								<input type="text" class="form-control" name="hostel_no" onChange={(e) => setId(e.target.value)} required="" />
							</div>
							<div class="form-group py-3">
								<label class="control-label">Category</label>
								<select  onChange={(e) => setCategory(e.target.value)} name="category_id" id="" class="custom-select" required>
										<option selected=""  disabled="">Check category list.</option>
										{
											HostelTypes && HostelTypes.length > 0
											? 
											HostelTypes.map((item) => {
												return (
													<option  value="">{item.type}</option>
												)
											}) : (
												"No hostel types listed"
											)
										}
								</select>
							</div>
							<div class="form-group">
								<label for="" class="control-label">Description</label>
								<textarea name="description" id="" cols="30" rows="4" class="form-control" onChange={(e) => setDescription(e.target.value)} required></textarea>
							</div>
							<div class="form-group">
								<label class="control-label">Price</label>
								<input type="number" class="form-control text-right" onChange={(e) => setPrice(e.target.value)} name="price" step="any" required="" />
							</div>
						</div>
						<div class="card-footer">
							<div class="row">
								<div class="col-md-12">
									<button onClick={(e) => createHostel(e)} class="btn btn-sm btn-primary col-sm-3 offset-md-3"> Save</button>
									<button class="btn btn-sm btn-default col-sm-3" type="reset"> Cancel</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
			
            {/* Table code */}
			<div class="col-md-8">
				<div class="card">
					<div class="card-header">
						<b>Hostel List</b>
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
							<tbody>
							{
								HostelsList && HostelsList.length > 0
								? 
								HostelsList.map((item) => {
									return(
										<tr>
										<td class="text-center">{item.id}</td>
										<td class="">
											<p>Hostel #: <b>{item.id}</b></p>
											<p><small>Hostel Type: <b>{item.Type}</b></small></p>
											<p><small>Description: <b>{item.Description}</b></small></p>
											<p><small>Price: <b>UGX{item.Price}</b></small></p>
										</td>
										<td class="text-center">
											<button class="btn btn-sm btn-primary edit_hostel" type="button" >Edit</button>
											<button class="btn btn-sm btn-danger delete_hostel" onClick={() => handleDelete(item.id)}  type="button" >Delete</button>
										</td>
									</tr>
									)
								}) : (
									"No hostels data"
								)
							}

									
								
							</tbody>
						</table>
					</div>
				</div>
			</div>

		</div>
	</div>

</div>
  )
}

export default Hostels