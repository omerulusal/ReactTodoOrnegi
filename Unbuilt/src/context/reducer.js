export const initialState = {
    todos: [],
};

const reducer = (state, action) => {
    // state: Store'un şu anki durumu. 
    // action: Store'a gönderilen hareket objesi.
    console.log(action);
    switch (action.type) {
        // action'un type propertysi AddTodo ise return içerisindeki işlem döndürülecektir.
        case "AddTodo":
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            };
        case "REMOVE_TODO":
            // action'un type propertysi REMOVE_TODO ise return içerisindeki işlem döndürülecektir.
            return {
                ...state,
                todos: [...state.todos].filter(todo => todo.id !== action.payload)
                // yeni bir array kopyası oluşturdum.
            };
        case "COMPLETE_TODO":
            return {
                ...state,
                //...state ile state nesnesinin içeriği kopyalanır. 
                todos: state.todos.map(todo => {
                    if (todo.id !== action.payload) {
                        //Eğer todoId'si action objesinin payload'u ile eşit değilse return ile geri döndürülür
                        return todo;
                    }
                    return {
                        ...todo, isCompleted: !todo.isCompleted
                        //Eğer eşit ise, todo item'ın içeriği kopyalanır ve isCompleted property'si değiştirilir.
                    }
                })
            };
        case "UPDATE_TODO":
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id !== action.payload.todoId) {
                        return todo;
                    }
                    return {
                        ...todo,
                        content: action.payload.newValue,
                    }
                })
            };
        default:
            return {
                ...state,
            };
    }
};
export default reducer;