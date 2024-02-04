import './App.css'
import React, { useState } from "react";
import Transaction from "./components/Transaction.jsx";



function App() {
  const [transactions, setTransactions] = useState([])

  function ajouterTransaction() {
    if (!document.querySelector('form').checkValidity()) {
      return
    }
    const montant = document.querySelector('input[name="montant"]').value
    const date = document.querySelector('input[name="date"]').value
    const type = document.querySelector('input[name="type"]:checked').value
    const transaction = <Transaction type={type} montant={montant} date={date}/>
    setTransactions([...transactions, transaction])
  }

  return (
    <div className="App">
      <form className="flex flex-col w-36">
        <input type={'number'} placeholder={'Montant (en €)'} name={'montant'} step={'0.01'} required/>
        <input type={'date'} placeholder={'Date'} name={'date'} required/>
        <div className="flex items-center">
          <input id="option1" type="radio" name="type" value="Dépot" required
                 className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"/>
          <label htmlFor="depot" className="ml-2 text-sm text-gray-700">Dépot</label>
        </div>
        <div className="flex items-center">
          <input id="option2" type="radio" name="type" value="Retrait" required
                 className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"/>
          <label htmlFor="retrait" className="ml-2 text-sm text-gray-700">Retrait</label>
        </div>
        <button type={'button'} onClick={ajouterTransaction} className={"bg-red-200" + " rounded-full"}>Ajouter</button>
      </form>
      <div className={'transactions flex-col-reverse flex p-6 '}>
        {transactions}
      </div>
    </div>
  )
}

export default App
