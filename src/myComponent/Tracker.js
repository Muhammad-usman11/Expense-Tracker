import React, { useContext } from "react";
import { transactionContext,   } from "./TransContext";

export default function Tracker() {



  let { transactions } = useContext(transactionContext) 


  return (
    <>
      <div className=" section  py-[60px] px-[0px] max-w-md min-h-screen m-auto bg-slate-200">
        <h1 className="pt-6 text-4xl">Expense Tracker</h1>
        <h2 className="pt-6 text-2xl text-center">CURRENT BALENCE</h2>
        <div className="value text-center text-2xl"> $0.00 </div> 
        <div className="incomebox flex justify-around pt-6">
          <h3>
            INCOME
            <div>0.00</div>
          </h3>

          <div className="line "></div>

          <h3>
            EXPENSE
            <div>0.00</div>
          </h3>
        </div>
        <div className="transaction-history font-bold pt-6 ">
          <h2 className=" border-b-2 border-b-slate-500 border-solid pb-2  w-[290px] m-auto text-2xl " >Transaction History </h2> 
          <ul className="transaction-list">
            {
              transactions.map( (transObj, index )=>{
                return (
                  <li key={index} className=" flex justify-around bg-white shadow-md my-2 mx-0 py-2 px-1">
                    <span> {transObj.desc} </span>
                    <span> {transObj.amount} </span>
                  </li>

                )
              } )
            }
            
            

          </ul>  
        </div>
        <div className="add-transaction font-bold pt-6 text-2xl">
          <h2 className=" border-b-2 border-b-slate-500 border-solid pb-2  w-[290px] m-auto " >  Add New Transaction </h2>
        </div>
        <div className="form">
          {/* <!--
            This component uses @tailwindcss/forms

            yarn add @tailwindcss/forms
            npm install @tailwindcss/forms

            plugins: [require('@tailwindcss/forms')]
          --> */}

          <div className="max-w-screen-xl px-4  mx-auto sm:px-6 lg:px-8">
            <form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4">
              <div>
                <label for="email" className="sr-only">
                  Email
                </label>

                <div className="relative">
                  <h2>Description</h2>
                  <input required
                    type="text"
                    className="w-[300px] p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Details of Transaction"
                  />
                </div>
              </div>

              <div>
                <label for="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <h2>Transaction Amount</h2>
                  <input required
                    type="number"
                    className="w-[300px] p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Dollar Value of Transaction"
                  />
                </div>
              </div>

              <a
                className="inline-block px-[100px] py-3 text-sm font-medium text-white transition bg-indigo-600 rounded hover:scale-110 hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring"
                href=""
              >
                Add Transaction
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
