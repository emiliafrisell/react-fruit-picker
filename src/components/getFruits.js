// import { useState, useEffect} from 'react'

//  const GetFruits = () => {
//     const [ fruits, setFruits ] = useState([])
    
//     var emojis = 'https://emoji-api.com/categories/food-drink?access_key=2cd4db7574dbf75434cc4821a522b44bace32bc1'

//     useEffect(() => {
//         fetch(emojis)
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     setFruits(result.filter(res => res.subGroup === 'food-fruit' ))
//                 },
//                 // Note: it's important to handle errors here
//                 // instead of a catch() block so that we don't swallow
//                 // exceptions from actual bugs in components.
//                 (error) => {
//                     console.log('there is an error');
//                     // setIsLoaded(true);
//                     // setError(error);
//                 }
//             )
//     }, [])

//     return fruits

// }

// export default GetFruits