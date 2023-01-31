import React, { useState } from 'react';
import { GrFormClose, GrFormEdit, GrFormCheckmark } from "react-icons/gr";
import { useTodoLayerDeger } from "../context/TodoContext";
import clsx from 'clsx';

function Todo({ todo }) {
    const [, dispatch] = useTodoLayerDeger();

    const [editable, setEditable] = useState(false);
    const [content, setContent] = useState(todo.content)

    const removeTodo = (todoId) => {
        dispatch({
            type: "REMOVE_TODO",
            payload: todoId,
        });
    };


    const completeTodo = (todoId) => {
        dispatch({
            type: "COMPLETE_TODO",
            // COMPLETE_TODO tipinde bir action objesi gönderir. 
            payload: todoId,
            // Bu action objesi, payload(yük) olarak todoId'yi taşır. 
        });
        // Bu obje "COMPLETE_TODO" ile dispatch edilir ve reducerda kullanılır.
    };


    const updateTodo = ({ todoId, newValue }) => {
        dispatch({
            type: "UPDATE_TODO",
            // UPDATE_TODO tipinde bir action objesi gönderir. 
            payload: {
                todoId,
                newValue,
                // Bu action objesi, todoId ve newValue gibi iki property'i içerir ve bu property'ler, payload olarak taşınır.
            }
        });
        //reducer fonksiyonunda kullanılacak ve gönderilen todoId ve newValue verilerini kullanarak todo için güncelleme yapacaktır.
    };



    const todoStyle = clsx({
        // clsx, bir sınıf  veya sınıf adlarının bir dizisini alır ve belirli şartlara göre bu sınıf adlarını birleştirir.
        ["todoRow"]: true,
        ["okX"]: todo.isCompleted,

        // todoStyle her zaman "todoRow" sınıfını içerir. Eğer todo.isCompleted true ise, aynı zamanda "okX" sınıf adını içerecektir.
        //Eğer todo tamamlandıysa (isCompleted true) belirlenen sınıflara ek olarak "okX" sınıfıda kullanılabilir.
    });


    return (
        <div className='xcx'>
            <div className={todoStyle} onClick={() => editable ? "" : completeTodo(todo.id)}>
                {
                    editable ?
                        (<input type="text" value={content} onChange={e => setContent(e.target.value)} className='todoInputEdit' />) :
                        todo.content
                    // bir todo item'ının içeriğini düzenlemek veya tamamlamak için kullanılabilir bir div oluşturmaktır.
                }
            </div>
            <div className="todo-icons">
                <GrFormClose className='todo-icon' onClick={() => removeTodo(todo.id)} />
                {
                    editable ? <GrFormCheckmark className='todoIcon' onClick={() => {
                        updateTodo({
                            todoId: todo.id,
                            newValue: content
                        })
                        setContent("");
                        setEditable(false);
                    }} />
                        :
                        (<GrFormEdit className='todo-icon' onClick={() => setEditable(true)} />)
                }
            </div>
        </div>
    )
}

export default Todo;
