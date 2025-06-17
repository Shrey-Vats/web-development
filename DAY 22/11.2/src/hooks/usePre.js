import { useEffect } from "react"
import { useRef } from "react"

const usePre = (state) => {
    const ref = useRef()

    useEffect(()=>{
        ref.current = state
    }, [state])

    return ref.current
}

export default usePre