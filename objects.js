let size1 = false;
let size2 = false; 
let size3 = false;

let size1count = 0;
let size2count = 0;
let size3count = 0;


function setSize1() {
    if(size1count < 2)
    {
    size1 = true;
    size2 = false;
    size3 = false;
    size1count++
    }
}

function setSize2() {
    if(size2count < 2)
    {
    size1 = false;
    size2 = true;
    size3 = false;
    size2count++
    }
}

function setSize3() {
    if(size3count < 2)
    {
    size1 = false;
    size2 = false;
    size3 = true;
    size3count++
    }
}

/* Set ships to player battlefield */

function setShip() {
    if(StartPosition < 4 ){
        var x = Math.floor(event.offsetX/FIELD_SIZE);
        var y = Math.floor(event.offsetY/FIELD_SIZE);

        if(size1 && size1count < 2){
            
            setField(x,y, true);
            getColorField()
            size1count++
            StartPosition++
        }
        else if(size2 && size2count < 2){
            
            setField(x,y, true);
            if(x==9){
                setField(x-1,y, true);
            }
            else{
                setField(x+1,y, true);
            }
            getColorField()
            size2count++
            StartPosition++
        }
        else if (size3 && size3count < 2){
        
            setField(x,y, true);
            if(x>=8){
                setField(x-1,y, true);
                setField(x-2,y, true);
            }
            else{
                setField(x+1,y, true);
                setField(x+2,y, true);
            }
            getColorField()
            size3count++
            StartPosition++
        }

    }
    
}

function setCompShip () {
    var x =  Math.floor(Math.random() * Math.floor(10));
    var y =  Math.floor(Math.random() * Math.floor(10));

     //set size 1 ship for comp

     setFieldCP(x,y, true);
     
     //set size 2 ship for comp

     if (x >= 5) {
         if( y >= 5) {
            setFieldCP(x-2,y-1, true);
            setFieldCP(x-3,y-1, true);
         }else{
            setFieldCP(x-2,y+1, true);
            setFieldCP(x-3,y+1, true);
         }
     }else{
        if( y >= 5) {
            setFieldCP(x+2,y-1, true);
            setFieldCP(x+3,y-1, true);
         }else{
            setFieldCP(x+2,y+1, true);
            setFieldCP(x+3,y+1, true);
         }
     }

     //set size 3 ship for comp

     if (x >= 5) {
        if( y >= 5) {
           setFieldCP(x-3,y-3, true);
           setFieldCP(x-4,y-3, true);
           setFieldCP(x-5,y-3, true);
        }else{
           setFieldCP(x-3,y+3, true);
           setFieldCP(x-4,y+3, true);
           setFieldCP(x-5,y+3, true);
        }
    }else{
       if( y >= 5) {
           setFieldCP(x+3,y-3, true);
           setFieldCP(x+4,y-3, true);
           setFieldCP(x+5,y-3, true);
        }else{
           setFieldCP(x+3,y+3, true);
           setFieldCP(x+4,y+3, true);
           setFieldCP(x+5,y+3, true);
        }
    }
}