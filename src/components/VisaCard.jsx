import React from "react";

export default function VisaCard() {
    return (
        <div className="col-lg-6">
            <div className="visa-card px-4 py-1">
                <h1 className="pt-5 pb-5">$0.00</h1>
                <div className="card-details pt-3">
                    <h4 className="card-number">6353 7863 9817</h4>
                    <div className="row">
                        <div className="col-9">
                            <p>01/26</p>
                        </div>
                        <div className="col-3 d-flex justify-content-end">
                            <h3>VISA</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
