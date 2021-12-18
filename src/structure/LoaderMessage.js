import { useEffect, useState } from "react"
import PropTypes from 'prop-types'

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

LoaderMessage.propTypes = {
    loadingMessage: PropTypes.string.isRequired,
    isLoading:PropTypes.bool
}
export default LoaderMessage