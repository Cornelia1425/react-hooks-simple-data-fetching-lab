// create your App component here
import {useEffect, useState} from 'react'

export default function App (){
    
    const [dogImage, setDogImage] = useState('')
    useEffect (()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res=>res.json())
        .then((data)=>{
            setDogImage(data.message)
        })
        //
    }, [])


return (
    <div>
        { dogImage? (<img src={dogImage} alt="A Random Dog"/>)  : (<p>Loading...</p>)
        }
    </div>
)
}