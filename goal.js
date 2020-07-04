
            function calculate(){
                var total=0;
                var tickMark=document.getElementsByClassName("tickmark");
                var count=0;          
                  for(var i=0;i<7;i++){
                       if(tickMark[i].checked){
                            count++;
                        }
                    }
                if (count==1){
                    total=Math.floor((count/7)*100);
                    document.querySelector("#totals").innerHTML=total+"%";
                    }
                else if (count==2){
                    total=Math.floor((count/7)*100);
                    document.querySelector("#totals").innerHTML=total+"%";
                }
                else if (count==3){
                    total=Math.floor((count/7)*100);
                    document.querySelector("#totals").innerHTML=total+"%";
                }
                else if (count==4){
                    total=Math.floor((count/7)*100);
                    document.querySelector("#totals").innerHTML=total+"%";
                }
                else if (count==5){
                    total=Math.floor((count/7)*100);
                    document.querySelector("#totals").innerHTML=total+"%";
                }
                else if (count==6){
                    total=Math.floor((count/7)*100);
                    document.querySelector("#totals").innerHTML=total+"%";
                }
                else if (count==7){
                    total=Math.floor((count/7)*100);
                    document.querySelector("#totals").innerHTML=total+"%";
                }
                else{
                    document.querySelector("#totals").innerHTML="0%";
                }
            }