import { useContext, useState, useEffect } from "react";
import { UserContext } from "./Usuario"; 
import { useParams } from "react-router-dom";
import axios from "axios";

function UserDetails() {
    const { id } = useParams();
    const { selectedUser } = useContext(UserContext);

    const [user, setUser] = useState(selectedUser || null);

    useEffect(() => {
        if (!selectedUser) {
            const fetchUser = async () => {
                try {
                    const res = await axios.get(`http://localhost:3307/api/usuarios/${id}`);
                    setUser(res.data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchUser();
        }
    }, [id, selectedUser]);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>Detalles del usuario</h1>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Nombre:</strong> {user.nombre}</p>
            <p><strong>Email:</strong> {user.email || 'No disponible'}</p>
        </div>
    );
}

export default UserDetails;
