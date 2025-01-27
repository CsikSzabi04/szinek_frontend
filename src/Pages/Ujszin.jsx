import React from 'react'
import { useState } from 'react'
import '../App.css'
import { Button, TextField } from '@mui/material'

export default function Ujszin() {
    const [refresh, setRefresh] = useState(false);
    const [nev, setNev] = useState('');
    const [kod, setKod] = useState('');

    async function addSzin() {
        const szinek = { nev, kod };
        const resp = await fetch("https://szinek-backend-8oow.onrender.com/szin", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(szinek),
        });
        setRefresh(!refresh);
      }

  return (
    <div>
        <div className='lista'>
            <TextField
                required
                label="Név"
                value={nev}
                className='tf'
                onChange={e => setNev(e.target.value)}
            />
            <TextField
                required
                label="Kód"
                value={kod}
                 className='tf'
                onChange={e => setKod(e.target.value)}
            />
            <Button className='add' variant="contained" color="success" onClick={addSzin}>
                Hozzáad
            </Button>
        </div>
    </div>
  )
}
