import './App.css'
import React, { useState } from "react";
import Transaction from "./components/Transaction.jsx";
import Card from "./components/Card.jsx";
import Montant from "./components/Montant.jsx";


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
    <div className="App w-[70%] m-auto my-12 flex flex-col gap-5 ">
      <header className="flex justify-between gap-5 ">
        <div className={"flex flex-col grow gap-5"}>
          <div className={"flex gap-5"}>
            <Card className={"grow"}>
              <input type={'number'} name={'taux'} step={'0.01'} placeholder={"Taux annuel (en %)"}
              className={"w-full h-full"}/>
            </Card>
            <Card className={"text-center text-3xl"}>
              Simulateur d'intérêts
            </Card>
          </div>
          <Card className={"grow"}>
            <input type={'number'} placeholder={'Montant (en €)'} name={'montant'} step={'0.01'} required/>
            <input type={'date'} placeholder={'Date'} name={'date'} required/>
            <div className={"flex justify-between"}>
              <div className={"flex flex-col"}>
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
              </div>
              <button type={'button'} onClick={ajouterTransaction} className={"bg-red-300/60 border border-red-400/60 rounded-full p-2 px-4"}>
                Ajouter
              </button>
            </div>
          </Card>

        </div>
        <Card className={"grow"}>
          <form>
            <input type={"date"} name={"dateInterets"} value={"2024-12-31"} required/>
          </form>
          <Montant montant={1200} taux={2}></Montant>
        </Card>
      </header>

      <Card>
        <div className={'transactions flex-col-reverse flex p-6 '}>
          {transactions}
        </div>
      </Card>

      <div className={"ball"} id={"red"}></div>
      <div className={"ball"} id={"green"}></div>
      <div className={"ball"} id={"blue"}></div>

    </div>
  )
}

export default App
