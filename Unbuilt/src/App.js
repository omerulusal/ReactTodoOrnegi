import React, { useState, useEffect, useRef } from 'react';
import { useTodoLayerDeger } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import "./Style/App.css"

const App = () => {
  const [{ todos }, dispatch] = useTodoLayerDeger();
  // dispatch fonksiyonu, uygulamadaki veri yönetimi işlemlerinin gerçekleştirilmesi için kullanılır.
  const [content, setContent] = useState("");

  const inputRef = useRef(null);
  // useRef hook'u, bileşen içinde DOM elemanlarına veya bileşen dışındaki değişkenlere erişmek için kullanılır.

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    // form sayfayı tekrardan yenilememesi için bu komutu verdim.

    if (!content && content.length < 1) return;
    // eğer content değeri yok ise return ile döndür.

    const newTodo = {
      id: Math.floor(Math.random() * 98476233),
      content: content,
      isCompleted: false
    };
    dispatch({
      type: "AddTodo",
      payload: newTodo,
    });
    setContent("")
  }

  return (
    <div className='container-fluid'>
      <div className="row row-cols-md-4 my-3 px-5">
        <form onSubmit={handleSubmit} className='todoForm'>
          <input type="text" className="form-control giris" onChange={e => setContent(e.target.value)} value={content} ref={inputRef} />
          <button className="btn tus" type='submit'>Ekle</button>
        </form>
      </div>
      {/* Todo Listesi  */}
      <TodoList todos={todos} />
    </div>
  );

}

export default App;