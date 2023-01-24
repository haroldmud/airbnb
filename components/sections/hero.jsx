export default function Hero(){
  return(
    <>
      <div className="flex justify-center mb-[32px]">
      <div className="md:w-[395.91px] md:flex grid grid-cols-3 gap-[8.44px] mt-[26px]">
        <div className="w-[72.31px] mt-[48.81px]">
          <img src="/images/image1.png" alt="" />
        </div>
        <div className="w-[72.31px] flex flex-col gap-[8.44px] mt-[7.23px]">
          <img src="/images/image2.png" alt="" />
          <img src="/images/image3.png" alt="" />
        </div>
        <div className="w-[72.31px] flex flex-col gap-[8.44px] md:mt-[30.13px] mt-[100px]">
          <img src="/images/image4.png" alt="" />
          <img src="/images/image5.png" alt="" />
        </div>
        <div className="w-[72.31px] flex flex-col gap-[8.44px] md:mt-0 -mt-[153px]">
          <img src="/images/image6.png" alt="" />
          <img src="/images/image7.png" alt="" />
        </div>  
        <div className="w-[72.31px] flex flex-col gap-[8.44px] md:mt-[18.08px] -mt-[123px]">
          <img src="/images/image8.png" alt="" />
          <img src="/images/image9.png" alt="" />
        </div>
      </div>
    </div>
    <div className="ml-[36px] md:mr-0 mr-4">
      <h2 className="font-[600] text-[36px]">Online Experiences</h2>
      <p className="text-[16px] md:w-[50%]">
        Join unique interactive activities led by one-of-a-kind
        hosts—all without leaving home.
      </p>
    </div>
    </>
  )
}