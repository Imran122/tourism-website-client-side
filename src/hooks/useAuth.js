import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

//useauth using authcontext
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;