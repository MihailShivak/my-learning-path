import axios from "axios"
import { Dispatch } from "react"
import { userAction, userActionTypes } from "../../types/user"

export const fetchUsers = () => {
   return async(dispatch: Dispatch<userAction>) => {
      try{
         dispatch({type: userActionTypes.FETCH_USERS})
         const response = await axios.get("https://jsonplaceholder.typicode.com/users")
         setTimeout(()=>{
            dispatch({type: userActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
         }, 500)
      }catch(e){
         dispatch({type: userActionTypes.FETCH_USERS_ERROR, payload: "Произошла ошибка при загрузке пользователей"})
      }
   }
}