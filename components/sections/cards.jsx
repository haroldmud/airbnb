import Card from "../interface/card"

export default function Cards(){
  const collection = [
    {
      image: "imageA",
      state: "SOLD OUT",
      rate: "5.0",
      times: "6",
      description: "Life lessons with Katie Zaferes",
      price: "125"
    },
    {
      image:"imageB",
      state:"ONLINE",
      rate:"5.0",
      times:"30",
      description:"Learn wedding photography",
      price:"125"
    },
    {
      image:"imageC",
      state: false,
      style:"hidden",
      rate:"4.8",
      times:"2",
      description:"Group Mountain Biking",
      price:"50"
    }
  ];
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