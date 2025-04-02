import React, { useEffect, useState} from 'react'
import axios from 'axios'

function Reserva(){
    const [reservas, setReservas] = useState([]);

    const listReserva = async () => {
        try{
          const res = await axios.get('http://localhost:3307/api/reservas');
          setReservas(res.data); 
          console.log(res.data)
        }
        catch (e){
          console.log(e)
          console.log(e.response)
        }
    }
    
      useEffect(() => {
        listReserva()
      }, [])
    return(
        <div>
            <h1>Reserva</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>fechaReserva</th>
                        <th>lugar</th>
                        <th>nombreReserva</th>
                        <th>usuario_id</th>
                    </tr>
                </thead>
                <tbody>
                    {reservas.map((index) => (
                        <tr key={index.id}>
                            <td>{index.id}</td>
                            <td>{index.fechaReserva}</td>
                            <td>{index.lugar}</td>
                            <td>{index.nombreReserva}</td>
                            <td>{index.usuario_id}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
        </div>
    )
}

export default Reserva;
                    