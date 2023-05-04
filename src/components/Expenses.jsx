import React from "react";

export default function Expenses() {
    return (
        <div className="col-12">
            <div className="expenses-card px-4 py-4">
                <h2>Expenses</h2>
                <div className="row">
                    <div className="col-6">
                        <h3>Expense Name</h3>
                    </div>
                    <div className="col-3">
                        <h3>Cost</h3>
                    </div>
                    <div className="col-3 text-end">
                        <h3>Actions</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <input
                            type="text"
                            placeholder="test"
                            className="input-expense"
                        />
                    </div>
                    <div className="col-3">
                        <input
                            type="text"
                            placeholder="12.00"
                            className="input-cost"
                        />
                    </div>
                    <div className="col-3 text-end">
                        <a className="delete-btn">
                            <i className="fa-sharp fa-solid fa-trash"></i>
                        </a>
                        <a className="ms-1 edit-btn">
                            <i className="fa-sharp fa-solid fa-pen-to-square"></i>
                        </a>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <a className="btn btn-md btn-outline-dark mt-4 px-5">
                        Add Expense
                    </a>
                </div>
            </div>
        </div>
    );
}
