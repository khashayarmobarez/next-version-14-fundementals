

function ServerToDoForm() {

  

  const addHandler = async (formData: FormData) => {
    'use server'
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    console.log('Title:', title)
    console.log('Description:', description)
    // Here you can add logic to save the ToDo item to a database or perform other actions
  } 

  return (
    <div>
      <form action={addHandler}>
        <div>
          <label htmlFor="title">title</label>
          <input type="text" id="title" name="title" />
        </div>
        <div>
          <label htmlFor="description">description</label>
          <input type="text" id="description" name="description" />
        </div>
        <button type="submit">Add ToDo</button>
      </form>
      
    </div>
  )
}

export default ServerToDoForm
