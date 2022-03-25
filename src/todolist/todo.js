import React, { useState } from "react";
import "./style.css";

const Todo = () => {
  const [inputdata, setinputdata] = useState("");
  const [items, setItems] = useState([]);
  const [isEditItem, setIsEditItem] = useState("");
  const [togglebutton, setTogglebutton] = useState(false);

  // How to add Items
  const additems = () => {
    if (!inputdata) {
      alert("fill the data");
    } else {
      const mynewData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };

      setItems([...items, mynewData]);
      setinputdata(" ");
    }
  };

  // How to delete items

  const deleteitems = (index) => {
    const updatedList = items.filter((curElem) => {
      return curElem.id != index;
    });
    setItems(updatedList);
  };

  // How to Clear All
  const Allclear = () => {
    setItems([]);
  };

  // How to Edit
  const editItems = (index) => {
    const items_todo_edited = items.find((curElem) => {
      return curElem.id === index;
    });
    setinputdata(items_todo_edited.name);
    setIsEditItem(index);
    setTogglebutton(true);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todo"></img>
            <figcaption>Add your List Here</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="Write"
              className="form-control"
              value={inputdata}
              onChange={(event) => {
                setinputdata(event.target.value);
              }}
            />
            {togglebutton ? (
              <i className="fa fa-check " onClick={additems}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={additems}></i>
            )}
          </div>

          {/* Show Items */}
          <div className="showItems">
            {items.map((currentElem) => {
              return (
                <div className="eachItems" key={currentElem.id}>
                  <h3> {currentElem.name} </h3>
                  <div className="todo-btn">
                    <i
                      class="fa fa-check"
                      onclick={() => editItems(currentElem.id)}
                    ></i>
                    <i
                      className="far fa-trash add-btn"
                      onClick={() => deleteitems(currentElem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={() => Allclear()}
            >
              <span>CHECK lIST</span>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
