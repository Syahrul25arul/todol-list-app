import React from "react";
import Add from "../components/TodoAdd/Add";
import Cart from "../components/TodoCart/Cart";
import { useTodoHooks } from "../hooks/useTodoHooks";

function Main() {
	const { clearList, editItem, handleSubmit, isEditing, list, removeItem, setTodo, showAlert, todo, alert } = useTodoHooks();
	return (
		<section className="section-center">
			<Add alert={alert} handleSubmit={handleSubmit} isEditing={isEditing} list={list} todo={todo} setTodo={setTodo} showAlert={showAlert} />
			{list.length > 0 && <Cart clearList={clearList} editItem={editItem} list={list} removeItem={removeItem} />}
		</section>
	);
}

export default Main;
