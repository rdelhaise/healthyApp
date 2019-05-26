
<div class="container">
    <div id="patient">
        <div class="card shadow">
            <div class="card-header py-3 bg-general-color">
                <h3 class="m-0 font-weight-bold text-white">New Dietitian</h3>
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
                        <div class="form-group row">
                            <div class="col-sm-6">
                                <input type="tel" class="form-control form-control-user" id="phoneNumber" name="phoneNumber" placeholder="Phone Number">
                            </div>
                            <div class="col-sm-6">
                                <input type="tel" class="form-control form-control-user" id="mobileNumber" name="mobileNumber" placeholder="Mobile Number">
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control form-control-user" id="email" name="email" placeholder="Email Address">
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
                        <a href="login.html" class="btn btn-success btn-user btn-block">
                            Create The Dietitian
                        </a>
                    </form>
            </div>
        </div>
    </div>

</div>