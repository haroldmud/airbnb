import Card from "../interface/card"
import data from "../data"

export default function Cards(){
  const collection = data;
  return(
    <section className="ml-[30px] scroll overflow-x-scroll mb-12 mt-10 pb-2">
      <section className="ml-[6px] w-[110%] flex gap-[18px] shink-0">
        {
          collection.map((item, id) => <div key={id}>
            <Card
              image={item.image}
              state={item.state}
              rate={item.rate}
              times={item.times}
              description={item.description}
              price={item.price}
            />
          </div>)
        }
      
    </section>
    </section>
  )
}