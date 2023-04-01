// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });
// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();


var main = document.querySelector("#main")
var nav1h2 = document.querySelector("#nav1 h2")
var nav1h1 = document.querySelector("#nav1 h1")
var i = document.querySelector("#nav3-prt0")
var nav = document.querySelector("#nav")
var nav3prt1 = document.querySelector("#nav3-prt1")
var nav3prt2 = document.querySelector("#nav3-prt2")
var nav3prt2h4 = document.querySelector("#nav3-prt2 h4")
var nav2  = document.querySelector("#nav2")
var line1 = document.querySelector("#line1")
var line2 = document.querySelector("#line2")
var line3 = document.querySelector("#line3")
var page0 = document.querySelector("#page0")
var oneimg = document.querySelector("#one img")
var twoimg = document.querySelector("#two img")
var threeimg = document.querySelector("#three img")
var fourimg = document.querySelector("#four img")
var fiveimg = document.querySelector("#five img")
var siximg = document.querySelector("#six img")
var sevenimg = document.querySelector("#seven img")
var flag  = 0


nav2.addEventListener("click",function(){
    if(flag == 0){
    gsap.to("#line1", {
        transform:"rotate(33deg)",
        duration:0.5
    })
    gsap.to("#line2", {
        right:"100%",
        duration:0.5
    })
    gsap.to("#line3", {
        transform:"rotate(-33deg)" ,
        duration:0.5
    })

    // line2.style.opacity = 0
    // line1.style.rotate = "44deg"
    // line3.style.rotate = "-45deg"
    page0.style.scale= 1
    oneimg.style.opacity = 1
    twoimg.style.opacity = 1
    threeimg.style.opacity = 1
    fourimg.style.opacity = 1
    fiveimg.style.opacity = 1
    siximg.style.opacity = 1
    sevenimg.style.opacity = 1
    page0.style.top = 0
    page0.style.overflowY = "hidden"
    page0.style.overflowX = "hidden"
    page0.style.overflow = "hidden"
    // page0.style.clipPath ="inset(0 0 0 0);";
    nav.style.backgroundColor = "transparent"
    nav1h1.style.color = "#FEF9F3"
    nav1h2.style.color = "#FEF9F3"
    line1.style.backgroundColor = "#FEF9F3"
    line3.style.backgroundColor = "#FEF9F3"
    i.style.color = "#FEF9F3"
    nav3prt1.style.color = "#FEF9F3"
    nav3prt2h4.style.color = "black"
    nav3prt2.style.backgroundColor = "#FEF9F3"
    nav.style.borderBottom = "1px solid white"
    nav3prt1.style.borderLeft = "1px solid white"
    // document.querySelector("window").style.overflow = "hidden"
    flag = 1
    }
    else{
        gsap.to("#line1", {
            transform:"rotate(0deg)",
            duration:1,
        })
        gsap.to("#line2", {
            right:0,
            duration:1,
        })
        gsap.to("#line3", {
            transform:"rotate(0deg)" ,
        duration:1,
    })
    // line2.style.opacity = 1
    // line1.style.rotate = "0deg"
    // line3.style.rotate = "0deg"
    page0.style.scale = 0
    page0.style.scale= 0
    oneimg.style.opacity = 0
    twoimg.style.opacity = 0
    threeimg.style.opacity = 0
    fourimg.style.opacity = 0
    fiveimg.style.opacity = 0
    siximg.style.opacity = 0
    sevenimg.style.opacity = 0

    
    nav.style.backgroundColor = "#FEF9F3"
    nav1h1.style.color = "black"
    nav1h2.style.color = "black"
    line1.style.backgroundColor = "black"
    line3.style.backgroundColor = "black"
    i.style.color = "black"
    nav3prt1.style.color = "black"
    nav3prt2h4.style.color = "#FEF9F3"
    nav3prt2.style.backgroundColor = "black"
    flag = 0
    }
})

gsap.to("#loader-in",{
    left:0,
    duration:4,
    delay:0.2,
    repeat:-1
})



document.querySelector(".elem").addEventListener("mousemove",function(dets){
    document.querySelector('.cursor ').style.left = (dets.x - 300) + "px"
    document.querySelector('.cursor ').style.top = (dets.y -400) + "px"
})
// document.querySelector(".elem").addEventListener("mousemove",function(dets){
//     document.querySelector('#c2 ').style.left = (dets.x - 300) + "px"
//     document.querySelector('#c2 ').style.top = (dets.y -400) + "px"
// })




// var option1in = document.querySelector("#option1-in")
// var option2in = document.querySelector("#option2-in")
// var up = document.querySelector("#up h1")
// var img = document.querySelector("#page3-prt2-right")

// option2in.addEventListener("click",function(){
    
// })

const listen = document.querySelector(".listen");
document.addEventListener("mousemove",function(e){
       cursor.style.top = e.pageY +"px";
       cursor.style.left = e.pageX +"px";
})






// var option1 = document.querySelector("#option1")
// var option2 = document.querySelector("#option2")
// var uph1 = document.querySelector("#up h1")
// var rimage = document.querySelector("#page3-prt2-right")

// option2.addEventListener("click",function(){
//     uph1.innerHTML = "THE BREAK ROOM"
   
// })
// option1.addEventListener("click",function(){
//     uph1.innerHTML = "THE GROUP CHAT"
   





var gc = document.querySelector("#gc-img")
var br = document.querySelector("#br-img")
var option1 = document.querySelector("#option1")
var option1in = document.querySelector("#option1-in")
var option2 = document.querySelector("#option2")
var option2in = document.querySelector("#option2-in")

option2.addEventListener("click", function(){
    option2.style.backgroundColor = "black"
    option2in.style.backgroundColor = "#FEF9F3"
    option2in.style.top = "25%"
    option2in.style.left = "63%"
    option1.style.backgroundColor = "transparent"
    option1in.style.backgroundColor = "transparent"
    option1in.style.top = "27%"
    option1in.style.left = "10.1%"
    gsap.to("#gc-img",{
        scale:0,
        filter:"blur(1rem)",
        duration:0.3
    })
    gsap.to("#br-img",{
        scale:1,
        filter:"blur(0)",
        duration:0.3,
        delay:0.2
    })
    gsap.to("#group span",{
        top:100,
        stagger:0.15,
        duration:0.3
      

    })
    gsap.to("#break span",{
        top:0,
        stagger:0.15,
        duration:0.3,
        delay:0.7
    })
   

   
    
})
option1.addEventListener("click", function(){
    option1.style.backgroundColor = "black"
    option1in.style.backgroundColor = "#FEF9F3"
    option2in.style.top = "27%"
    option2in.style.left = "60%"
    option2.style.backgroundColor = "transparent"
    option2in.style.backgroundColor = "transparent"
    option1in.style.top = "25%"
    option1in.style.left = "13%"

    
    gsap.to("#br-img",{
        scale:0,
        filter:"blur(1rem)",
        duration:0.3,
        
    })
    gsap.to("#gc-img",{
        scale:1,
        filter:"blur(0)",
        duration:0.3,
        delay:0.2
    })
    gsap.to("#break span",{
        top:100,
        stagger:0.15,
        duration:0.3
        
    })
    gsap.to("#group span",{
        top:0,
        stagger:0.15,
        duration:0.3,
        delay:0.7
      

    })

 
    
    
})


// option1in.addEventListener("mousemove",function(){
//     option1.style.backgroundColor = "black"
//     option1in.style.backgroundColor = "#FEF9F3"
//     option1in.style.top = "25%"
//     option1in.style.left = "13%"
// })

// option1in.addEventListener("mouseleave",function(){
//     option1.style.backgroundColor = "transparent"
//     option1in.style.backgroundColor = "transparent"
//     option1in.style.top = "27%"
//     option1in.style.left = "10.1%"
// })



// option2in.addEventListener("mousemove",function(){
//     option2.style.backgroundColor = "black"
//     option2in.style.backgroundColor = "#FEF9F3"
//     option2in.style.top = "25%"
//     option2in.style.left = "63%"
// })

// option2in.addEventListener("mouseleave",function(){
//     option2in.style.top = "27%"
//     option2in.style.left = "60%"
//     option2.style.backgroundColor = "transparent"
//     option2in.style.backgroundColor = "transparent"
// })



var fir = 1
setInterval(function(){
    if(fir == 1){
        gsap.to("#fe1",{
           top:0,
            duration:0.6
        })
        gsap.to("#fe2",{
            top:0,
             duration:0.6
         })
        fir += 1
    }
    else if(fir ==2){
        gsap.to("#fe1",{
            top:"200%",
            duration:1.2
        })
        gsap.to("#fe2",{
            top:"200%",
            duration:1.2
        })
        gsap.to("#se1",{
            top:"0%",
            duration:1.2,
            delay:0.2
        })
        gsap.to("#se2",{
            top:"-80%",
            duration:1.2,
            delay:0.2
        })
        fir += 1
    }
    else if(fir ==3){
        gsap.to("#se1",{
            top:"200%",
            duration:1.2
        })
        gsap.to("#se2",{
            top:"200%",
            duration:1.2
        })
        gsap.to("#t1",{
            top:"-50%",
            duration:1.2,
            delay:0.2
        })
        gsap.to("#t2",{
            top:"-150%",
            duration:1.2,
            delay:0.2
        })
        fir += 1
    }
    else if(fir ==4){
        gsap.to("#t1",{
            top:"200%",
            duration:1.2
        })
        gsap.to("#t2",{
            top:"200%",
            duration:1.2
        })
        gsap.to("#fr1",{
            top:"-110%",
            duration:1.2,
        })
        gsap.to("#fr2",{
            top:"-180%",
            duration:1.2,
        })
        fir += 1
    }
    else if(fir ==5){
        gsap.to("#fr1",{
            top:"250%",
            duration:1.2
        })
        gsap.to("#fr2",{
            top:"220%",
            duration:1.2
        })
        gsap.to("#fe1",{
            top:0,
             duration:0.6
         })
         gsap.to("#fe2",{
             top:0,
              duration:0.6
          })
        fir=2
    }
},4000);

var sec =1
setInterval(function(){
    if(sec == 1){
        gsap.to("#bi1",{
            scale:1,
            filter:"blur(0)",
            duration:0.6
        })
        sec += 1
    }
    else if(sec == 2){
        gsap.to("#bi1",{
            scale:0,
            duration:0.6,
            filter:"blur(1rem)",
            // delay:4
           })
        gsap.to("#bi2",{
            scale:1,
            filter:"blur(0)",
            duration:0.6,
            // delay:4.5
           })
        sec += 1
    }
    else if(sec == 3){
        gsap.to("#bi2",{
            scale:0,
            filter:"blur(1rem)",
            duration:0.6,
            // delay:8
           })
        gsap.to("#bi3",{
            scale:1,
            filter:"blur(0)",
            duration:0.6,
            // delay:9
           })
        sec += 1
    }
    else if(sec == 4){
        gsap.to("#bi3",{
            scale:0,
            duration:0.6,
            filter:"blur(1rem)",
            // delay:12
           })
        gsap.to("#bi4",{
            scale:1,
            filter:"blur(0)",
            duration:0.6,
            // delay:13
           })
        sec += 1
    }
    else if(sec == 5){
        gsap.to("#bi4",{
            scale:0,
            duration:0.6,
            filter:"blur(1rem)",
            // delay:16
           })
           gsap.to("#bi1",{
            scale:1,
            filter:"blur(0)",
            duration:0.6
        })
        sec = 2
       
    }
  
   
},4000);


// var first =1
// setInterval(function(){
//     if(first == 1){
//         gsap.to("#fe1","#fe2",{
//             scale:1,
//             filter:"blur(0)",
//             duration:0.6
//         })
//         first += 1
//     }
//     else if(first == 2){
//         gsap.to("#fe1","#fe2",{
//             scale:0,
//             duration:0.6,
//             filter:"blur(1rem)",
//             // delay:4
//            })
//         gsap.to("#se1","#se2",{
//             scale:1,
//             filter:"blur(0)",
//             duration:0.6,
//             // delay:4.5
//            })
//         first += 1
//     }
//     else if(first == 3){
//         gsap.to("#se1","#se2",{
//             scale:0,
//             filter:"blur(1rem)",
//             duration:0.6,
//             // delay:8
//            })
//         gsap.to("#t1","#t2",{
//             scale:1,
//             filter:"blur(0)",
//             duration:0.6,
//             // delay:9
//            })
//         first += 1
//     }
//     else if(sec == 4){
//         gsap.to("#t1","#t2",{
//             scale:0,
//             duration:0.6,
//             filter:"blur(1rem)",
//             // delay:12
//            })
//         gsap.to("#fr1","#fr2",{
//             scale:1,
//             filter:"blur(0)",
//             duration:0.6,
//             // delay:13
//            })
//         first += 1
//     }
//     else if(sec == 5){
//         gsap.to("#fr1","#fr2",{
//             scale:0,
//             duration:0.6,
//             filter:"blur(1rem)",
//             // delay:16
//            })
//            gsap.to("#fe1","#fe2",{
//             scale:1,
//             filter:"blur(0)",
//             duration:0.6
//         })
//         first= 2
       
//     }
  
   
// },4000);



var third = 1

setInterval(function(){
   if(third ==1){
    gsap.to("#a1",{
        top:0,
        duration:0.7
     })
     third += 1
   }
    
   else if(third ==2){
    gsap.to("#a1",{
        top:"100%",
        duration:0.7
    })
    gsap.to("#a2",{
        top:"-100%",
        duration:0.7
    })

    third += 1
   }
   else if(third ==3){
    gsap.to("#a2",{
        top:"100%",
        duration:0.7
    })
    gsap.to("#a3",{
        top:"-200%",
        duration:0.7
    })

    third += 1
   }
   else if(third ==4){
    gsap.to("#a3",{
        top:"100%",
        duration:0.7
    })
    gsap.to("#a4",{
        top:"-300%",
        duration:0.7
    })

    third += 1
   }
   else if(third ==5){
    gsap.to("#a4",{
        top:"100%",
        duration:0.7
    })
    gsap.to("#a1",{
        top:0,
        duration:0.7
    })

    third = 2
   }
},4000);





gsap.from("#nav",{
top:"-100%",
duration:2,
delay:0.5
})

gsap.from("#left",{
  top:"1000%",
    duration:2,
    delay:0.9
    })

    gsap.from("#boxx",{
        scale:0,
          duration:0.6,
          delay:3
          })
          gsap.from("#loader",{
            top:"1000%",
              duration:2,
              delay:0.9
              })         
              gsap.from("#loader-bg",{
                top:"1000%",
                  duration:2,
                  delay:0.9
                  })         
                  gsap.from("#num2",{
                    top:"1000%",
                      duration:2,
                      delay:0.9
                      })         
                      gsap.from("#a1",{
                        top:"1000%",
                          duration:2,
                          delay:1.4
                          })         

                    