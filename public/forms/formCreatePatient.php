
<div class="container">
    <div id="patient">
        <div class="card shadow">
            <div class="card-header py-3 bg-general-color">
                <h3 class="m-0 font-weight-bold text-white">New Patient</h3>
            </div>
            <div class="card-body">

                <div class="row">
                    <form class="w-100 user">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="validatedCustomFile" required>
                            <label class="custom-file-label" for="validatedCustomFile">Browse a picture...</label>
                        </div>
                        <h3 class="py-3">General Informations </h3>
                        <div class="form-group row">
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-user" id="firstName" name="firstName" placeholder="First Name">
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-user" id="lastName" name="lastName" placeholder="Last Name">
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control form-control-user" id="email" name="email" placeholder="Email Address">
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-6">
                                <label for="typeDiet">Diet Type</label>
                                <select class="form-control" id="typeDiet" name="typeDiet">
                                    <option>For sport</option>
                                    <option>Loss of fat</option>
                                    <option>Weight gain</option>
                                    <option>Special diet</option>
                                </select>
                            </div>
                            <div class="col-sm-6">
                                <label for="foodType">Food Type</label>
                                <select class="form-control" id="foodType" name="foodType">
                                    <option>Eat everything</option>
                                    <option>Vegetarian</option>
                                    <option>Vegan</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <h6>Birth Date</h6>
                            <input type="date" class="form-control form-control-user" id="dateBirth" name="dateBirth">
                        </div>
                        <hr class="w-100"/>
                        <h3 class="py-3"> Address Informations </h3>
                        <div class="form-group row">
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-user" id="address" name="address" placeholder="Address">
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-user" id="city" name="city" placeholder="City">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-user" id="zipcode" name="zipcode" placeholder="ZipCode">
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-user" id="country" name="country" placeholder="Country">
                            </div>
                        </div>
                        <hr class="w-100"/>
                        <h3 class="py-3"> Body Informations </h3>
                        <div class="form-group row">
                            <div class="col-sm-6">
                                <input type="number" step="0.01" min="0" class="form-control form-control-user" id="height" name="height" placeholder="Height">
                            </div>
                            <div class="col-sm-6">
                                <input type="number" step="0.01" min="0" class="form-control form-control-user" id="weight" name="weight" placeholder="Weight">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-6">
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="male" name="gender" class="custom-control-input">
                                    <label class="custom-control-label" for="male">Male</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="female" name="gender" class="custom-control-input">
                                    <label class="custom-control-label" for="female">Female</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="unspecified" name="gender" class="custom-control-input">
                                    <label class="custom-control-label" for="unspecified">Unspecified</label>
                                </div>
                            </div>
                            <div class="col-sm-6 custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="smoker" name="smoker" placeholder="Smoking">
                                <label class="custom-control-label" for="smoker">Smoker</label>
                            </div>

                        </div>
                        <div class="form-group">
                            <label for="measurements">Measurements</label>
                            <textarea class="form-control" id="measurements" name="measurements" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="sports">Sport</label>
                            <textarea class="form-control" id="sports" name="sports" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="medicaments">Medicaments</label>
                            <textarea class="form-control" id="medicaments" name="medicaments" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="diseases">Diseases</label>
                            <textarea class="form-control" id="diseases" name="diseases" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="allergy">Allergy</label>
                            <textarea class="form-control" id="allergy" name="allergy" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="familyHistory">Family History</label>
                            <textarea class="form-control" id="familyHistory" name="familyHistory" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="details">More Details</label>
                            <textarea class="form-control" id="details" name="details" rows="3"></textarea>
                        </div>



                        <a href="login.html" class="btn btn-success btn-user btn-block">
                            Create The Patient
                        </a>
                    </form>
            </div>
        </div>
    </div>

</div>