import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, removeItem, editItem }) => (
	<div className="grocery-list">
		{items.map((item) => {
			const { id, name, description } = item;

			return (
				<article key={id} className="grocery-item">
					<div className="grocery-info">
						<p className="title">{name}</p>
						<p className="description">{description}</p>
					</div>
					<div className="btn-container">
						<button type="button" className="edit-btn" onClick={() => editItem(id)}>
							<FaEdit />
						</button>
						<button type="button" className="delete-btn" onClick={() => removeItem(id)}>
							<FaTrash />
						</button>
					</div>
				</article>
			);
		})}
	</div>
);

export default List;
