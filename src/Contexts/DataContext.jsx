import { createContext, useEffect, useReducer } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    useEffect(() => {
        fetchBooksData();
        getBooksData();
      }, []);
    
      const fetchBooksData = async () => {
        try {
          const { data } = await axios.get("/api/posts");
          dispatch({type: "FETCH_POSTS_DATA", payload: data.posts})
        }catch (error){
          console.error(error);
        }
      };

      const getBooksData = async() => {
        try{
          const { data } = await axios.get("/api/users");
          dispatch({type: "FETCH_USERS_DATA", payload: data.users})
        }catch(error){
          console.error(error);
        }
      }

      const initialState = {postsData: [], usersData: []}

      const reducerFunction = (state, action) => {

        switch(action.type){
            case "FETCH_POSTS_DATA":
                return {...state, postsData: action.payload};
                case "FETCH_USERS_DATA":
                  return {...state, usersData: action.payload};
            default :
            return state;
        }

      }

      const [state, dispatch] = useReducer(reducerFunction, initialState);

      const values = {state, dispatch}

      console.log(state.postsData);

    return(
        <DataContext.Provider value = {values}>
            {children}
        </DataContext.Provider>
    )

}