import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
const getLocalStorage = () => {
	let list = localStorage.getItem("list");
	return list ? JSON.parse(localStorage.getItem("list")) : [];
};
export const useTodoHooks = () => {
	const [todo, setTodo] = useState({
		name: "",
		description: ""
	});
	const [list, setList] = useState(getLocalStorage());
	const [isEditing, setIsEditing] = useState(false);
	const [editId, setEditId] = useState(null);
	const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!todo.name || !todo.description) {
			showAlert(true, "danger", "please enter value");
		} else if (todo.name && todo.description && isEditing) {
			// deal with edit
			setList(
				list.map((item) => {
					if (item.id === editId) return { ...item, name: todo.name, description: todo.description };
					return item;
				})
			);
			setTodo({
				name: "",
				description: ""
			});
			setEditId(null);
			setIsEditing(false);
			showAlert(true, "success", "value changed");
		} else {
			// show alert
			const newItem = { id: v4(), name: todo.name, description: todo.description };
			setList([...list, newItem]);
			setTodo({
				name: "",
				description: ""
			});
			showAlert(true, "success", "item added to the list");
		}
	};

	const removeItem = (id) => {
		showAlert(true, "danger", "item remove");
		setList(list.filter((item) => item.id !== id));
	};

	const clearList = () => {
		showAlert(true, "danger", "empty list");
		setList([]);
	};

	const editItem = (id) => {
		const { name, description } = list.find((item) => item.id === id);
		setIsEditing(true);
		setEditId(id);
		setTodo({
			name,
			description
		});
	};

	const showAlert = (show = false, type = "", msg = "") => {
		setAlert({ show, type, msg });
	};

	useEffect(() => {
		localStorage.setItem("list", JSON.stringify(list));
	}, [list]);

	return { handleSubmit, isEditing, list, todo, setTodo, showAlert, clearList, editItem, removeItem, alert };
};
