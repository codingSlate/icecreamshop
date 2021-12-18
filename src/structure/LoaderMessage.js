import { useEffect, useState } from "react"

const LoaderMessage = ({loadingMessage, isLoading}) =>{
    const [showLoadinMessage, setShowLoadingMessage] = useState()

    useEffect(()=>{
        let loadinMessageDelay

        if(isLoading){
            loadinMessageDelay = setTimeout(()=>{
                setShowLoadingMessage(true)
            }, 400)
        }

        return ()=>{
            clearTimeout(loadinMessageDelay)
            setShowLoadingMessage(false)
        }
    }, [isLoading])

    // return isLoading ? <p className="loading">{loadingMessage}</p> : null
    return showLoadinMessage ? <p className="loading">{loadingMessage}</p> : null
}
export default LoaderMessage