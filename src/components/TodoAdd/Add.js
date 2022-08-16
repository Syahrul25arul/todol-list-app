import React from "react";
import Alert from "../Alert/Alert";

function Add({ alert, handleSubmit, showAlert, list, todo, setTodo, isEditing }) {
	return (
		<form className="grocery-form" onSubmit={handleSubmit}>
			{alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
			<h3>Todo List</h3>
			<input type="text" className="grocery" placeholder="name" value={todo.name} onChange={(e) => setTodo({ ...todo, name: e.target.value })} />
			<input type="text" className="grocery" placeholder="description" value={todo.description} onChange={(e) => setTodo({ ...todo, description: e.target.value })} />

			<div className="form-control">
				<button type="submit" className="submit-btn">
					{isEditing ? "edit" : "submit"}
				</button>
			</div>
		</form>
	);
}

export default Add;
