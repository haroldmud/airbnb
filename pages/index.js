import Header from "../components/sections/header"
import Hero from "../components/sections/hero"
import Cards from "../components/sections/cards"

export default function Home() {
  return (
    <main className="flex justify-center bg-slate-500">
      <div className="max-w-7xl w-[100%] flex justify-center ">
        <div className="md:w-[54%] w-[100%] bg-white rounded-t-[10px] ">
          <Header/>
          <Hero/>
          <Cards/>
        </div>
      </div>
    </main>
  )
}
