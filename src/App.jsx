import React from 'react';

function App(){

    const cssStyle={

    };
    let curDate = new Date();
    curDate=curDate.getHours();
    // by using gethours method you get the current time in integers
    let greeting=" ";
    if(curDate>=1 && curDate<12){
      greeting="Good Morning";
      cssStyle.color="green";
    }else if(curDate>=12 && curDate<19){
      greeting="Good Afternoon";
      cssStyle.color="Orange";
    }else{
      greeting="Good Night";
      cssStyle.color="Blue";
    }
    return(
        <>
            <div>
              <h1>HELLO SIR,<span style={cssStyle}>{greeting}</span></h1>
            </div>
            
        </> 
    );
}
export default App;