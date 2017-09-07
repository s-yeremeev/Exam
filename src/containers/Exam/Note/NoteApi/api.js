export const getApi = async () => { 
   try {  
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", { method: 'GET' })
                  const json = await response.json()
                  console.log(json)
                  return json
   } catch (e) {
         console.log('Error ' + e.name + ":" + e.message + "\n" + e.stack)
         return null
   }
}