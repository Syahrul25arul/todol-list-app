import React from "react";
import List from "../TodoList/List";

function Cart({ list, removeItem, editItem, clearList }) {
	return (
		<div className="grocery-container">
			<List items={list} removeItem={removeItem} editItem={editItem} />
			<button className="clear-btn" onClick={clearList}>
				Clear Items
			</button>
		</div>
	);
}

export default Cart;
