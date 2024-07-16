import {useEffect} from 'react'

const add = (a, b) => return a + b

useEffect(() => {
    document.title = "Dineshkumar"
})

// const add = (a, b) => {
//   useEffect(() => {
//     document.title = 'Dineshkumar'
//   })
//   return a + b
// }

  //   if (true) {
  //     const [name, setName] = useState(0)
  //   }
  // for (let i = 0; i < 10; i += 1) {
  //     useEffect(() => {
  //       document.title = 'Dinesh'
  //     })
  //   }
  //   return <div>Welcome</div>

const Welcome = () => {
  return <div>{add(1, 2)}</div>
}

export default Welcome
