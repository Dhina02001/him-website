import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <br />
            <div class="d-flex justify-content-center">
                <div class="card w-50">
                    <div class="card-header d-flex justify-content-center">

                        <h2>LOGIN</h2>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <div class="d-flex justify-content-around">
                                <button type="submit" class="btn btn-primary ">Submit</button>
                                <Link to="/Register"><button type="submit" class="btn btn-primary ">Register</button></Link>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
            {/* <Routes>

                <Route path="/Register" element={<Register />} />
            </Routes> */}
        </>
    );
}
export default Login;