import type { JSX } from "react"

// get categories list
async function getCategories() {
  const response = await fetch("https://emojihub.yurace.pro/api/categories")

  if (!response.ok) {
    throw new Error("Cannot get all categories from API")
  }

  const data = await response.json()
  console.log("data")
  return data
}

export default async function Home(): Promise<JSX.Element> {
  // categories from api
  const categories = await getCategories()

  // render return
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col max-w-7xl rounded-lg border border-neutral-800 justify-center items-center p-5 min-h-40">
          <h1 className="text-white leading-snug text-lg mb-4">
            Select a category and start a new game
          </h1>

          <form className="w-full flex justify-center items-center gap-2">
            {/* start new game button */}
            <button className="bg-neutral-900 px-3 py-2 rounded-lg border border-neutral-700 hover:bg-neutral-800 transition-colors duration-200 ease-in-out cursor-pointer">
              start new game
            </button>

            {/* select category */}
            <select
              name="category"
              id="category"
              className="px-3 py-3 border border-neutral-800 rounded-lg"
            >
              <option>Select a category</option>
              {categories.map((category: string) => (
                <option value={category}>{category}</option>
              ))}
            </select>
          </form>
        </div>
      </div>
    </>
  )
}
