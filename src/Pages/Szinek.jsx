import React from 'react'
import '../App.css'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Szinek({szinek, setSzinek}) {
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        async function getSzinek(){
           const resp = await fetch("https://szinek-backend-8oow.onrender.com/szinek");
           const json = await resp.json();
           setSzinek( json);
        }
        getSzinek();
     }, [refresh]);

     async function delSzin(id) {
        const szinek = { id };
        const resp = await fetch("https://szinek-backend-8oow.onrender.com/szin", {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(szinek),
        });
        setRefresh(!refresh);
      }

  return (
    <div>
        <div className='lista'>
            {szinek.map(x => <div key={x.id} className='k'> <span className='negyzet' style={{"backgroundColor": x.kod}}></span> {x.nev} ({x.kod}) <span className='del' onClick={() => delSzin(x.id)}>X</span></div>)}
        </div>
    </div>
  )
}
