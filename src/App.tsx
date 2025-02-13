

import './App.css'



function App() {
 

  return (
    <>
    <div className="h-screen w-screen flex items-center justify-center ">
       <div className="  h-[96%] w-[96%] flex justify-evenly items-center bg-[#EFF6FC] rounded-[25px]">

        {/* left side div */}
          <div className="hidden md:flex flex-col justify-center  w-[133px] h-[90%] bg-[#6E00FF] rounded-[25px] items-center"> 
            <img src="https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?semt=ais_hybrid" alt="" className="w-[48px] h-[48px] rounded-[50%] mt-10 mb-10"  />
            <div className="flex flex-col flex-grow">
              <img src="./home.png" className="w-[38px] h-[38px] rounded-[50%] mb-10" alt="" />
              <img src="./Vector.png" className="w-[38px] h-[38px] rounded-[50%] mb-10" alt="" />
              <img src="./bell.png" className="w-[38px] h-[38px] rounded-[50%] mb-10" alt="" />
              <img src="./setting.png" className="w-[38px] h-[38px] rounded-[50%] mb-10" alt="" />
            </div>
            <img src="./door.png" className="w-[48px] h-[48px] rounded-[50%] mb-10" alt="" />
            
          </div>
        {/* middle div */}
          <div className="hidden md:flex flex-col  w-[30%] h-[90%] gap-[calc((100%-8%-30%-50%)/2)]  ">
            <div className="bg-[#FFFFFF] rounded-[25px] h-[8%] ">
              <input type="text" placeholder="write something here" className="w-full h-full rounded-[25px] focus:outline-none px-2" />
            </div>
            <div className="bg-[#FFFFFF] rounded-[25px]  h-[30%] "></div>
            <div className="bg-[#FFFFFF] rounded-[25px]  h-[50%] "></div>
          </div>

          {/* right side div */}
          <div className="  w-[100%] md:w-[50%] h-[90%] bg-[#FFFFFF] rounded-[25px] ">
          </div>
       </div>

    </div>
   
     
    </>
  )
}

export default App
