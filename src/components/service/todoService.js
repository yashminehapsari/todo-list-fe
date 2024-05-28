function TodoService() {
    let todos = [];

    const create =(todo) =>{
        return new Promise ((resolve, reject) =>{
            setTimeout(() => {
                if (todo) {
                    todos = [...todos,todo]
                    resolve("successfully added todo")
                }else {
                    reject("failed to add")
                }
            }, 2000);
        })
    }

    const getAll = () =>{
        return new Promise ((resolve, reject) =>{
            setTimeout(() => {
                if (todos.length>0) {
                    resolve(todos)
                }else {
                    reject("failed to fetch")
                }
            }, 1500);
        })

    }

    const update = (todo) =>{
        return new Promise ((resolve, reject) =>{
            setTimeout(() => {
                if (todo) {
                    todos = todos.map((t)=>{
                        if(t.id===todo.id) {
                            return{...todo}
                        }
                        return t;
                    })
                    resolve("successfully updated todo")
                }else {
                    reject("failed to update")
                }
            }, 1500);
        })
    }

    return{getAll,create,update}
}
export default TodoService;