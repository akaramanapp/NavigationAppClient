import { useEffect, useState } from "react"
import axios from "axios"
import { GET_MENU } from '../config/index'


export default function useMenu(){

    const [menu,setMenu] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        async function getMenu() {
            try {
                const response = await axios.get(GET_MENU);
                setMenu(response.data)
            } catch(err){
                setError(err)
            } finally{
                setLoading(false)
            }
        }

        getMenu();
    }, [])

    return { menu, error, loading }

}