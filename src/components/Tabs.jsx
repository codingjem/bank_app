import React from "react";

export default function Tabs() {
    return (
        <div className="col-lg-6">
            <div className="row g-3">
                <div className="col-6">
                    <a className="tabs">
                        <div className="d-flex align-items-top">
                            <i className="fa-solid fa-money-bill large"></i>
                            <i className="fa-solid fa-plus small"></i>
                        </div>
                        <h2>Deposit</h2>
                    </a>
                </div>
                <div className="col-6">
                    <a className="tabs">
                        <i className="fa-solid fa-money-bill-transfer large"></i>
                        <h2>Send Money</h2>
                    </a>
                </div>
                <div className="col-6">
                    <a className="tabs">
                        <div className="d-flex align-items-top">
                            <i className="fa-solid fa-money-bill large"></i>
                            <i className="fa-solid fa-minus small"></i>
                        </div>

                        <h2>Withraw</h2>
                    </a>
                </div>
                <div className="col-6">
                    <a className="tabs">
                        <i className="fa-solid fa-user-group large"></i>
                        <h2>Friends</h2>
                    </a>
                </div>
            </div>
        </div>
    );
}
