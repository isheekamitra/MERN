import axios from "axios";
import { useEffect ,useState} from "react";
import { useRouteMatch } from "react-router";

const Edit = () => {
    const [todo, setTodo] = useState();
    const url = useRouteMatch();
    const getTodo = (id) => fetch(`http://localhost:3000/${id}`).then(res => res.json())
   useEffect(()=>{
     
    const fetchTodo = async () => {
        const todo = await getTodo(url.params._id);
        console.log(todo);
        setTodo(todo)
      }
      fetchTodo()
   },[])
    return (
<div>edit</div>
    )
}



export default Edit;