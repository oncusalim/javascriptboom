
        var i;
        var x;
        var dizi = [];
        var dizi2=[1,2,3,4,5,6,7,8,9];
        var text="";
        for (i=1; i<4; i++ ){
            x = Math.floor((Math.random()*9)+1);
            
            while (dizi.find((value)=> value==x)){
                
                x = Math.floor(Math.random()*9+1);
           }
            dizi.push(x);
      

        }
        var y=1;
        dizi2.forEach((arr) => {
            text += '<button onclick="kontrol(this)" class="btn" id ="' + arr + '"></button>';
            
        });
       
        document.getElementById("btns").innerHTML = text;
        text = "";
        
        
        function kontrol(value) {
            
            
            if (dizi.find((y)=>value.id==y)) {
                
              
                value.innerHTML="BOOOM";
             } else 
               value.innerHTML = "CLEAN"
        
            
        }

        
        

