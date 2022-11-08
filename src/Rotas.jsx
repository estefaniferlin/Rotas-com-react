import { useParams } from "react-router-dom";

const Rotas = () => {

    const { id , mes } = useParams();

    return (
        <div>
            <h1>Entendendo o React Router</h1>
            {
                id && <h1>ID Recebido: {id} - Mês {mes}</h1>
            }
        </div>
    )
}

export default Rotas;