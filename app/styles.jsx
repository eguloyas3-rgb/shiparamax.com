import styled from "styled-components";

export const Headerss = styled.header`
    background-color: #4e148c;
    color: whitesmoke;
     font-family: var(--font-geist-sans); 
   
 
    .main{
        display: flex;
        width: 80%;
        margin: auto;
        justify-content: space-between;
        align-items: center;
        padding: 3px 10px;
    }

    .left{
        display: flex;
        gap: 10px;
        align-items: center;
        font-size: 15px;
        cursor: pointer;
        padding: 5px;
    }
    .phonecontact{
    display: flex;
    align-items: center;
    gap: 10px;
    
    }

   .emailcontact{
    display: flex;
    align-items: center;
    gap: 10px;
    color: blue;
    justify-content: center;
    
   }

   .address{
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
   }


   .right{
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 15px;
    cursor: pointer;
   }

   .right span:nth-child(2):hover{
    transform: scale(1.6);
    rotate: calc(-60deg);
   }
   .right span:nth-child(3):hover{
    rotate: calc(60deg);
    transform: scale(1.6);
   }
   .right span:nth-child(4):hover{
    rotate: calc(-60deg);
    transform: scale(1.6);
   }
   .right span:nth-child(5):hover{
    rotate: calc(60deg);
    transform: scale(1.6);
   }
   
`




export const Navbar = styled.nav`
    box-shadow: 2px 2px 4px;
    padding: 10px 10px;
   font-family: var(--font-geist-sans); 

    .main{
        width: 80%;
        margin: auto;
        justify-content: space-between;
        display: flex;
        align-items: center;
    }

    .images{
        cursor: pointer;
    }

    .images:hover{
        transform: scale(1.05);
    }

    .middle{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
        font-size: 20px;
        margin-left: 10rem;
        text-transform: capitalize;
        cursor: pointer;
    }

    .middle a:hover{
    color: #360966;
    transform: scale(1.1);
    }

    .about a{
    color: black;
    }

     .about a:hover{
    color: #360966;
    transform: scale(1.1);
     }


     .about{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
     }

     .openabouton{
            display: flex;
        flex-direction: column;
        gap: 10px;
        position: absolute;
        top: 100%;
        padding: 10px 20px;
        color: whitesmoke;
        background-color: #ff4612;
        /* align-items: center; */
        text-align: center;
        z-index: 10;
     }
     .openabout{
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: absolute;
        z-index: 10;
        top: 100%;
        padding: 10px 20px;
        width: 280px;
        background-color: #ff4612;
        /* align-items: center; */
        text-align: center;
     }

     .openabout a{
      color: whitesmoke;
     }
     .openabouton a{
            color: whitesmoke;
     }

    

    .right button{
      background-color: #ff4612;
      color: whitesmoke;
      text-transform: uppercase;
      padding: 6px 10px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .right button:hover{
        background-color: #2e2d2d;
        transform: scale(1.04);
    }


`





export const Homepages = styled.main`
font-family: var(--font-geist-sans); 
position: relative;
  width: 100%;
  z-index: 1;
  background-color: transparent;
 overflow: hidden;
 min-height: 100vh;


    
    .images{
        position: absolute;
        position: fixed;
        object-fit: cover;
        object-position: center;
        z-index: -1;
        
    }

  
  .middlewrite{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 80%;
    margin: auto;
    text-align: center;
  }

  .track span:nth-child(1){
    font-weight: 800;
    font-size: 50px;
  }
  .track span:nth-child(2){
    font-weight: 800;
    font-size: 20px;
  }

  .track{
    display: flex;
    flex-direction: column;
    color: white;
  }

  .trackinID{
    width: 35%;
    display: flex;
    margin: auto;
    gap: 10px;
    margin-block: 10px;
  }

  .trackinID input{
    background-color: whitesmoke;
    color: black;
    padding: 10px 10px;
    text-transform: uppercase;
    width: 100%;
    outline: none;
    border: 1px solid light gray;
  }

   .trackinID input:hover{
    border: 2px solid  green;
   }

    .trackinID button{
          background-color: #ff4612;
          padding: 10px 10px;
          cursor: pointer;
    }
     .trackinID button:hover{
        background-color: #2e2d2d;
     }


.shipment{
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    gap: 2px;
    padding: 15px 0px;
}

.shipment div{
    background-color: whitesmoke;
    display: flex;
    justify-content:center ;
    align-items: center;
    flex-direction: column;
    padding: 30px 30px;
    gap: 15px;
    color: #4e148c;
    font-size: 20px;
    cursor: pointer;

}

.shipment div span:nth-child(1){
    color: #ff4612;
    font-size: 30px;
}

.shipment div span:hover{
     color: whitesmoke;
}

.shipment div:hover{
    background-color: #4e148c;
    transform: scale(1.07);
    color: whitesmoke;
}

    

    .whoweae{
       color: black;
       padding: 10px 0px;
       background-color: white;
    }

    .whoweareimage{
        width: 80%;
        padding: 10px 0px;
    }

    .whoweae .main{
        display: flex;
        width: 80%;
        margin: auto;
        justify-content: space-between;
        align-items: center;
        padding: 10 20px;
    
    }

  

    .whoare{
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1;
    }  

    .whoare h2{
       color: #4e148c;
       font-weight: 600;
       font-size: 30px;
    }

    .whoare h3{
        color: #ff4612;
        font-size: 20px;
    }

    .whoare p{
        font-size: 16px;
    }

    .botton button{
     background-color: #ff4612;
     color: whitesmoke;
     padding: 10px 20px;
     cursor: pointer;
    }


    .Delivery{
        width: 80%;
        margin: 5rem auto;
       
        
    }

    .deliver{
        width: 70%;
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 5px;
        margin:auto ;
    }

    .deliver p{
      color:  #ff4612;
      font-weight: 500;
      font-size: 20px;
    }
    .deliver h2{
        font-size: 30px;
        color: #4e148c;
        font-weight: 800;
    }



    .fastdeliry{
        padding: 20px 0px;
        width: 100%;
    }

    .fast{
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        cursor: pointer;
      
    }

    .box{
        flex: 1;
       border-radius: 10px;
        box-shadow: 4px 4px 8px;
    }

    .imgaesbox{
        width: 100%;

    }

    .imgs{
        width: 100%;
        /* height: 250px; */
    }

    .witep{
        padding: 16px 20px;
        display: flex;
        flex-direction: column;
        gap: 7px;
        
    }

    .witep>p{
          color: #4e148c;
          font-weight: 600;
          font-size: 17px;
    }
     .witep>span{
opacity: .7;
     }



     .review{
        background-color: #010048;
        padding: 30px 0px;
        color: whitesmoke;
     }

     .review>div{
        width: 80%;
        margin: auto;
   
     }

     .tipic{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 1rem;
     }

     .tipic h2{
        font-size: 30px;
          
     }
     .tipic p{
        font-family: italic;
          color:  #ff4612;
          font-size: 18px;
     }

     .myreview{
       display: flex;
        flex-direction: column;
        gap: 10px;
     }
     .stars{
        display: flex;
        gap: 6px;
        margin-bottom: 1rem;
        
     }
         .stars span{
         color:  #ff4612;
         font-size: 20px;
         }

     .comments{
        display: flex;
       gap: 16px;
        align-items: center;
        margin-block: 1rem;
     }

     .nameofcomment{
        display: flex;
        flex-direction: column;
        gap: 4px;
     }

     .cargoship{
        display: flex;
        flex-direction: column;
        gap: 10px;
     }

     .navigatecomment{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
     }
     .navigatecomment span{
        cursor: pointer;
        background-color: #ff4612;
        padding: 10px 10px;
     }

     .navigatecomment span:hover{
        color: green;
        transform: scale(1.09);
     }


     .DeliverAnything{
        padding: 40px 0px;
        width: 80%;
        margin: auto;
     }

     .DeliverAny{
        display: flex;
        flex-direction: column;
        gap: 5px;
    
        justify-content: center;
        align-items: center;
     }

     .DeliverAny p{
        color:#ff4612;
        font-size: 15px;
     }
     .DeliverAny h1{
        color:#010048;
        font-size: 30px;
        font-weight: 700;
     }

     .freightmain{
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
        gap: 8px;
        padding: 40px 0px;
     }
     .freight{
        display: flex;
        flex-direction: column;
        gap: 20px;
        box-shadow: 2px 2px 4px;
        flex: 1;
        padding: 20px 20px;
     }

      .freight >div p{
        color:#010048;
        font-size: 20px;
        font-weight: 700;
      }
     .freight >div{
        display: flex;
        gap: 10px;
        flex-direction: column;
     }

     .icons{
        font-size: 40px;
        color:#010048;
    
     }



     .extrafeatures{
        width: 80%;
        margin: auto;
        display: flex;
        padding: 40px 0px;
     }


     .Extra{
  flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
     }

     .Extra span{
        color: #ff4612;
        font-weight: 700;
     }
     .Extra p{
        opacity: .7;
        /* font-weight: 700; */
     }
     .Extra h1{
        color: #4e148c;
        font-weight: 700;
        font-size: 25px;
     }

     .imagesdelivery{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
     }



   
`




export const Fedes = styled.main`
    
    
     .mainotthercourir{
        background-color: lightgray;
     }

     .otthercourir{
        width: 80%;
        margin: auto;
        padding: 60px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

     }
`


export const Footers = styled.footer`
    background-color: #222;
    font-family: var(--font-geist-sans); 


    .footers{
        padding: 40px 0px;
        display: flex;
        justify-content: space-between;
        margin: auto;
        width: 80%;
        color: whitesmoke;
    }

    .footers p{
       font-size: larger;
       font-weight: 700;
       margin-bottom: 10px;
    }
    ul{
        display: flex;
        flex-direction: column;
        gap: 17px;
        list-style-type: none;
    }

    .subscribe{
        margin-block:10px
    }

    .subscribe input{
        background-color: whitesmoke;
        padding: 10px 10px;
        outline: none;
        color: black;
    }
    .subscribe button{
        background-color: #ff4612;
        padding: 10px 10px;
        cursor: pointer;
    }

    .bottom{
       background-color: #050505;
    }

    .bottom .Copyright©{
        display: flex;
        color: whitesmoke;
        width: 80%;
        margin: auto;
        justify-content: space-between;
        align-items: center;
    }

    .cards{
        display: flex;
        justify-content: space-between;
        font-size: 40px;
        gap: 10px;
        align-items: center;
        padding: 10px 0px;
    }
`






export const Aboutus = styled.main`

font-family: var(--font-geist-sans);
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  z-index: 1;

  .background {
    position: fixed; /* full-page background */
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -2; /* behind content */
  }

  .content {
    position: relative;
    z-index: 1;
    padding: 2rem;
    color: white; /* make text visible */
  }

  .aboutus{
    justify-content: center;
    align-items: center;
    display: flex;
    min-height: 100vh;
  }

  .aboutus h1{
    font-size: 30px;
    color: whitesmoke;
    font-weight: 800;
  }

`