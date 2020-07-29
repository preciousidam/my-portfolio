
export function MessageForm(){
    return(
        <div>
            <div className="row">
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                </div>
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-12">
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-12">
                    <textarea className="form-control" id="message" rows="5" placeholder="Message"></textarea>
                </div>
            </div>
            <button className="btn submit">Submit</button>
        </div>
    );
}