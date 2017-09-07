export const getApi = async () => { 
   try {  
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", { method: 'GET' })
                  const json = await response.json()
                  return json.slice(0, 50)
   } catch (e) {
         console.log('Error ' + e.name + ":" + e.message + "\n" + e.stack)
         return null
   }
}