import React, {useState} from "react";
import {AiFillEdit, AiFillDelete} from "react-icons/ai";
import Pizza from "../models/Pizza";
import EditPizzaForm from "./EditPizzaForm";

interface SinglePizzaProps {
    pizza: Pizza
    updatePizza: (newPizza: Pizza) => void,
    deletePizza: (id: number) => void
}

const SinglePizza: React.FC<SinglePizzaProps> = ({pizza, updatePizza, deletePizza}) => {

    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit)
    }
    const handleToggleDelete = () => {
        deletePizza(pizza.id)
    }

    return (
        <div className="pizza">
            <img src={`/images/${pizza.img}`} alt={pizza.title}/>
            <h2>{pizza.title}</h2>
            <span>{pizza.price} ₽</span>
            <div className='pizza-controls'>
                <AiFillEdit onClick={handleToggleEdit}/>
                <AiFillDelete onClick={handleToggleDelete}/>
            </div>
            {edit ? <EditPizzaForm handleToggleEdit={handleToggleEdit} updatePizza={updatePizza} data={pizza} /> : null}
        </div>
    )
}

export default SinglePizza;