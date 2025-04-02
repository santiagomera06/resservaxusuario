import Usuario from "./Usuario";
function UserDetails() {
    const{selectUsers}=Usuario()
    return (

        <div>
            <h1>Detalles del usuario</h1>
            <p><strong>Id:</strong>{selectUsers.id}</p>
            <p><strong>Nombre:</strong>{selectUsers.name}</p>
        </div>
    );
}
export default UserDetails;
{//un login un register solo los componentes visual//}
{//y el navar listo con el usuario y la reserva //}