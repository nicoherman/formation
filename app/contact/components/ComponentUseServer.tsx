"use server"



export default async function ComponentUseServer() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

    const post = await response.json()

  return (
    <div className="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
            <span className="font-light text-gray-600">mar 10, 2019</span>
            <a className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500" href="#">Design</a>
        </div>
        <div className="mt-2">
            <a className="text-2xl text-gray-700 font-bold hover:text-gray-600" href="#">{post.title}</a>
            <p className="mt-2 text-gray-600">{post.body}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
            <a className="text-blue-600 hover:underline" href="#">Read more</a>
            <div>
                <a className="flex items-center" href="#">
                    <h1 className="text-gray-700 font-bold">Khatab wedaa</h1>
                </a>
            </div>
        </div>
    </div>
  )
}