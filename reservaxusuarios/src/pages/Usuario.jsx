import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { createContext, useContext } from 'react';

const UserContext = createContext();
function Usuario(){
    const [Users, setUsers] = useState([]);
    const [selectUsers, setselectUsers] = useState([null]);
    const navigate = useNavigate()

    const listUser = async () => {
        try{
          const res = await axios.get('http://localhost:3307/api/usuarios');
          setUsers(res.data); 
          console.log(res.data)
        }
        catch (e){
          console.log(e)
          console.log(e.response)
        }
    }
    const selectUser = async (index) => {
        console.log(index)
        setselectUsers(index);
        navigate(`/usuario/${index}`)
    }
      useEffect(() =>{
        listUser()
      },[])
    return(
        <useContext value={selectUsers}>
        <div>
            <h1>Usuario</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map((index) => (
                        <tr key={index.id}>
                            <td>{index.id}</td>
                            <td>{index.nombre}</td>
                            <td>
                                <button onClick={() => selectUser(index.id)}>ver detalles</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </useContext>
    )
}

export default Usuario