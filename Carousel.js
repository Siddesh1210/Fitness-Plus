function Carousel() {
    var swiper = new Swiper(".swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 2,
        speed: 600,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: false,
        },
      })
      
  return (
    <>
    <div className="max-w-[1350px] flex justify-center py-5 text-center">
        <div className="basis-[100%]  text-[#fc3b00]">
            <h1 className="font-extrabold" style={{fontSize:"11vh"}}>TRANSFORM <span style={{WebkitTextStroke:"1px  #fc3b00",color:"transparent"}}>YOUR BODY <br></br> TRANSFORM YOUR</span> LIFE</h1>
        </div>
    </div>
    <div className="main-carousel-body mb-5">
        <div className="swiper">
      <div className="swiper-wrapper">
      <div
          className="swiper-slide"
          style={{backgroundImage:`url('https://images.unsplash.com/photo-1522898467493-49726bf28798?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}
        ></div>
        <div
          className="swiper-slide"
          style={{backgroundImage:`url('https://i.pinimg.com/564x/0d/12/c8/0d12c8df3a7c05bbfe552fd3fdfa8f6c.jpg')`}}
        ></div>
        <div
          className="swiper-slide"
          style={{backgroundImage:`url('https://i.pinimg.com/564x/47/90/7d/47907d6090bd8c3d00eb074fbdde9175.jpg')`}}
        ></div>
        <div
          className="swiper-slide"
          style={{backgroundImage:`url('https://i.pinimg.com/564x/cc/0d/e3/cc0de362cf86d0a3723e20e9f08dea82.jpg')`}}
        ></div>
        <div
          className="swiper-slide"
          style={{backgroundImage:`url('https://i.pinimg.com/564x/b0/34/26/b0342613dbe62fc3a8fc7f5c7368aa80.jpg')`}}
        ></div>
        <div
          className="swiper-slide"
          style={{backgroundImage:`url('https://i.pinimg.com/564x/ae/cb/c8/aecbc8749c28271bd421380f6b882a4a.jpg')`}}
        ></div>
        <div
          className="swiper-slide"
          style={{backgroundImage:`url('https://i.pinimg.com/564x/a7/c6/1f/a7c61f845fb72670b743eb6e045b1976.jpg')`}}
        ></div>
        
        <div
          className="swiper-slide"
          style={{backgroundImage:`url('https://i.pinimg.com/564x/db/a2/e4/dba2e4adbc3d510b2c52ab6a385e57f5.jpg')`}}
        ></div>
      </div>
    </div>
    </div>
    </>
    
  )
}

export default Carousel;