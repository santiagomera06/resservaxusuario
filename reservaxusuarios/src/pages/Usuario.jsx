import axios from "axios";  
import { useEffect, useState } from "react";  
import { useNavigate } from "react-router-dom";  
import { createContext, useContext } from "react";  

// 1. crear context
const UserContext = createContext();

function Usuarios() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setselectedUser] = useState(null);
    const navigate = useNavigate();

    const listUser = async () => {
        try {
            const respuesta = await axios.get(" http://localhost:3307/api/usuarios");
            setUsers(respuesta.data);
        } catch (error) {
            console.log("error al obtener los datos:", error);
        }
    };

    const selectUser = (index) => {
        console.log(index);
        setselectedUser(index);
        navigate(`/usuario/${index.id}`);
    };

    useEffect(() => {
        listUser();
    }, []);

    return (
        <UserContext.Provider value={{ selectedUser, setselectedUser }}>
            <div>
                <h1>COMPONENTE USUARIOS</h1>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>NOMBRE</th>
                    </thead>
                    <tbody>
                        {users.map((index) => (
                            <tr>
                                <td>{index.id}</td>
                                <td>{index.nombre}</td>
                                <td>
                                    <button onClick={() => selectUser(index)}>
                                        ver Detalle
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </UserContext.Provider>
    );
}

export default Usuarios;
export { UserContext };
