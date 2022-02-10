import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { API_BASE_URL, SECONDS_JS } from '../config';
import Transaction from './Transaction';
import { useNavigate } from "react-router-dom";


const POOL_INTERVAL = 10 * SECONDS_JS;

function TransactionPool(){
    const [transactions, setTransactions] = useState([]);
    const navigate = useNavigate();
    const fetchMineBlock = () => {
        fetch(`${API_BASE_URL}/blockchain/mine`)
            .then(() => {
                alert("Successfully Mined a Block!");
                
                navigate('/blockchain')
            })
    }

    const fetchTransactions = () => {
        fetch(`${API_BASE_URL}/transactions`)
            .then(response => response.json())
            .then(json => { 
                console.log('transaction json', json); 
                setTransactions(json);
            })

    }

    useEffect(() => {
        fetchTransactions();
        const intervalID = setInterval(fetchTransactions, POOL_INTERVAL);
        return () => clearInterval(intervalID);
    }, [])

    return (
        <div className="TransactionPool">
            <Link to="/">Home</Link>
            <hr />
            <h3>Transaction Pool</h3>
            <br />
            <div>
                <Button onClick={fetchMineBlock}>Mine a block of these transactions</Button>
            </div>
            <div>
                {
                    transactions.map(transaction => (
                            <div key={transaction.id}>
                                <hr />
                                <Transaction transaction={transaction} />
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default TransactionPool;