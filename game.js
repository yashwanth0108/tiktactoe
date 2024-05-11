var p1=document.getElementById('p1').Value
var p2=document.getElementById('p2').innerHTML
let a = document.getElementsByClassName('hi')
var ar = Array.from(a)
var count = 0;
function starts(){
    ar.forEach((i)=>{
        i.innerHTML="start";
        document.getElementById('win').innerHTML = ""
        document.getElementById('loss').innerHTML = ""
        count=0;

    })


}
document.getElementById('start').addEventListener('click',starts)
ar.forEach((i, b) => {
    i.addEventListener('click', () => {
        if (count % 2 == 0) {
            i.innerHTML = 1;
        }
        else {
            i.innerHTML = 0;
        }
        if (b == 0) {
            if (ar[1].innerHTML == 0 && ar[2].innerHTML == 0 && ar[0].innerHTML == 0 || ar[0].innerHTML == 0 && ar[3].innerHTML == 0 && ar[6].innerHTML == 0||ar[4].innerHTML == 0 && ar[8].innerHTML == 0 && ar[0].innerHTML == 0) {
                
                document.getElementById('win').innerHTML = "YASH WON"
                document.getElementById('loss').innerHTML = "RISHI loss"


            }
            else if (ar[1].innerHTML == 1 && ar[2].innerHTML == 1 && ar[0].innerHTML == 1 || ar[0].innerHTML == 1 && ar[3].innerHTML == 1 && ar[6].innerHTML == 1||ar[4].innerHTML == 1 && ar[8].innerHTML == 1 && ar[0].innerHTML == 1) {
        
                document.getElementById('win').innerHTML = "RISHI won"
                document.getElementById('loss').innerHTML = "YASH loss"

            }

        }
        else if (b == 1) {
            if (ar[1].innerHTML == 0 && ar[0].innerHTML == 0 && ar[2].innerHTML == 0 || ar[1].innerHTML == 0 && ar[4].innerHTML == 0 && ar[7].innerHTML == 0) {
                
                document.getElementById('win').innerHTML = "YASH won"
                document.getElementById('loss').innerHTML = "RISHI loss"

            }
            else if (ar[1].innerHTML == 1 && ar[0].innerHTML == 1 && ar[2].innerHTML == 1 || ar[1].innerHTML == 1 && ar[4].innerHTML == 1 && ar[7].innerHTML == 1) {
                
                document.getElementById('win').innerHTML = "RISHI won"
                document.getElementById('loss').innerHTML = "YASH loss"
            }
        }
        else if (b == 2) {
            if (ar[1].innerHTML == 0 && ar[0].innerHTML == 0 && ar[2].innerHTML == 0 || ar[2].innerHTML == 0 && ar[5].innerHTML == 0 && ar[8].innerHTML == 0||ar[2].innerHTML == 0 && ar[4].innerHTML == 0 && ar[6].innerHTML == 0) {
                
                document.getElementById('win').innerHTML = "YASH won"
                document.getElementById('loss').innerHTML = "RISHI loss"
            }
            else if (ar[1].innerHTML == 1 && ar[0].innerHTML == 1 && ar[2].innerHTML == 1 || ar[2].innerHTML == 1 && ar[5].innerHTML == 1 && ar[8].innerHTML == 1||ar[2].innerHTML == 1 && ar[4].innerHTML == 1 && ar[6].innerHTML == 1) {
                
                document.getElementById('win').innerHTML = "RISHI won"
                document.getElementById('loss').innerHTML = "YASH loss"
            }
        }
        else if (b == 3) {
            if (ar[3].innerHTML == 0 && ar[0].innerHTML == 0 && ar[6].innerHTML == 0 || ar[3].innerHTML == 0 && ar[4].innerHTML == 0 && ar[5].innerHTML == 0) {
                
                document.getElementById('win').innerHTML = "YASH won"
                document.getElementById('loss').innerHTML = "RISHI loss"
            }
            else if (ar[3].innerHTML == 1 && ar[0].innerHTML == 1 && ar[6].innerHTML == 1 || ar[3].innerHTML == 1 && ar[4].innerHTML == 1 && ar[5].innerHTML == 1) {
                
                document.getElementById('win').innerHTML = "RISHI won"
                document.getElementById('loss').innerHTML = "YASH loss"
            }
        }
        else if (b == 4) {
            if (ar[3].innerHTML == 0 && ar[5].innerHTML == 0 && ar[4].innerHTML == 0 || ar[1].innerHTML == 0 && ar[4].innerHTML == 0 && ar[7].innerHTML == 0||ar[4].innerHTML == 0 && ar[8].innerHTML == 0 && ar[0].innerHTML == 0||ar[2].innerHTML == 0 && ar[4].innerHTML == 0 && ar[6].innerHTML == 0) {
                
                document.getElementById('win').innerHTML = "YASH won"
                document.getElementById('loss').innerHTML = "RISHI loss"
            }
            else if (ar[3].innerHTML == 1 && ar[5].innerHTML == 1 && ar[4].innerHTML == 1 || ar[1].innerHTML == 1 && ar[4].innerHTML == 1 && ar[7].innerHTML == 1||ar[2].innerHTML == 1 && ar[4].innerHTML == 1 && ar[6].innerHTML == 1||ar[4].innerHTML == 1 && ar[8].innerHTML == 1 && ar[0].innerHTML == 1) {
                
                document.getElementById('win').innerHTML = "RISHI won"
                document.getElementById('loss').innerHTML = "YASH loss"
            }
        }
        else if (b == 5) {
            if (ar[3].innerHTML == 0 && ar[5].innerHTML == 0 && ar[4].innerHTML == 0 || ar[5].innerHTML == 0 && ar[2].innerHTML == 0 && ar[8].innerHTML == 0) {
                
                document.getElementById('win').innerHTML = "YASH won"
                document.getElementById('loss').innerHTML = "RISHI loss"
            }
            else if (ar[3].innerHTML == 1 && ar[5].innerHTML == 1 && ar[4].innerHTML == 1 || ar[5].innerHTML == 1 && ar[2].innerHTML == 1 && ar[8].innerHTML == 1) {
                
                document.getElementById('win').innerHTML = "RISHI won"
                document.getElementById('loss').innerHTML = "YASH loss"
            }
        }
        if (b == 6) {
            if (ar[6].innerHTML == 0 && ar[7].innerHTML == 0 && ar[8].innerHTML == 0 || ar[0].innerHTML == 0 && ar[3].innerHTML == 0 && ar[6].innerHTML == 0||ar[2].innerHTML == 0 && ar[4].innerHTML == 0 && ar[6].innerHTML == 0) {
                
                document.getElementById('win').innerHTML = "YASH won"
                document.getElementById('loss').innerHTML = "RISHI loss"
            }
            else if (ar[6].innerHTML == 1 && ar[7].innerHTML == 1 && ar[8].innerHTML == 1 || ar[0].innerHTML == 1 && ar[3].innerHTML == 1 && ar[6].innerHTML == 1||ar[2].innerHTML == 1 && ar[4].innerHTML ==1 && ar[6].innerHTML == 1) {
                
                document.getElementById('win').innerHTML = "RISHI won"
                document.getElementById('loss').innerHTML = "YASH loss"
            }

        }
        else if (b == 7) {
            if (ar[6].innerHTML == 0 && ar[7].innerHTML == 0 && ar[8].innerHTML == 0 || ar[1].innerHTML == 0 && ar[4].innerHTML == 0 && ar[7].innerHTML == 0) {
                
                document.getElementById('win').innerHTML = "YASH won"
                document.getElementById('loss').innerHTML = "RISHI loss"
            }
            else if (ar[6].innerHTML == 1 && ar[7].innerHTML == 1 && ar[8].innerHTML == 1 || ar[1].innerHTML == 1 && ar[4].innerHTML == 1 && ar[7].innerHTML == 1) {
                
                document.getElementById('win').innerHTML = "RISHI won"
                document.getElementById('loss').innerHTML = "YASH loss"

            }
        }
        else if (b == 8) {
            if (ar[6].innerHTML == 0 && ar[7].innerHTML == 0 && ar[8].innerHTML == 0 || ar[5].innerHTML == 0 && ar[2].innerHTML == 0 && ar[8].innerHTML == 0||ar[4].innerHTML == 0 && ar[8].innerHTML == 0 && ar[0].innerHTML == 0) {
                
                document.getElementById('win').innerHTML = "YASH won"
                document.getElementById('loss').innerHTML = "RISHI loss"

            }
            else if (ar[6].innerHTML == 1 && ar[7].innerHTML == 1 && ar[8].innerHTML == 1 || ar[5].innerHTML == 1 && ar[2].innerHTML == 1 && ar[8].innerHTML == 1||ar[4].innerHTML == 1 && ar[8].innerHTML == 1 && ar[0].innerHTML == 1) {
                
                document.getElementById('win').innerHTML = "RISHI won"
                document.getElementById('loss').innerHTML = "YASH loss"
            }
        }


        count++;

    })
    return;
})