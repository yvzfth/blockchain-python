import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import { FormGroup, FormControl, Button } from 'react-bootstrap'
// import History from '../history';
import { useNavigate } from "react-router-dom";


function ConductTransaction(){
  const [amount, setAmount] = useState(0);
  const [recipient, setRecipient] = useState('');
  const [knownAddresses, setKnownAddresses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${API_BASE_URL}/known-addresses`)
      .then(response => response.json())
      .then(json => setKnownAddresses(json));
  }, []);

  const updateRecipient = (event) => {
    setRecipient(event.target.value);
  }

  const updateAmount = (event) => {
    setAmount(Number(event.target.value));
  }

  const sumbitTransaction = (event) => {
    fetch( `${API_BASE_URL}/wallet/transact`, { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({recipient, amount})
    }).then( (response) => response.json())
      .then(json => { 
        alert('Success!');
        navigate('/transaction-pool');
      })
  }

  return (
    <div className="ConductTransaction">
      <Link to="/">Home</Link>
      <hr />
      <h3>Conduct a Transaction</h3>
      <br />
      <FormGroup>
        <FormControl 
          input="text"
          placeholder="recipient"
          value={recipient}
          onChange={updateRecipient}
        />
      </FormGroup>
      <br />
      <FormGroup>
        <FormControl 
          input="number"
          placeholder="amount"
          value={amount}
          onChange={updateAmount}
        />
      </FormGroup>
      <br />
      <div>
        <Button variant="danger" onClick={sumbitTransaction}>Submit</Button>
      </div>


      <br />
      <div>
        {
          knownAddresses.map((knownAddress, i) => {
            return (<span key={knownAddress}>
              <u>{knownAddress}</u>{i !== knownAddress.length-1? ', ': ''}
            </span>
          )})
        }
      </div>
    </div>
  )
}

export default ConductTransaction;