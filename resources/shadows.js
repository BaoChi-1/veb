var row1 = document.getElementsByName("1");
var row2 = document.getElementsByName("2");
var row3 = document.getElementsByName("3");
var row4 = document.getElementsByName("4");
var row5 = document.getElementsByName("5");
var row6 = document.getElementsByName("6");
var row7 = document.getElementsByName("7");
var col = document.getElementsByName("col");

col[0].addEventListener("click", function() {
i=0;
while (i<5){
row1[i].classList.toggle('shaddy');
i=i+1;
}
}
);

col[1].addEventListener("click", function() {
i=0;
while (i<5){
row2[i].classList.toggle('shaddy');
i=i+1;
}
}
);

col[2].addEventListener("click", function() {
i=0;
while (i<5){
row3[i].classList.toggle('shaddy');
i=i+1;
}
}
);
col[3].addEventListener("click", function() {
    i=0;
    while (i<5){
    row4[i].classList.toggle('shaddy');
    i=i+1;
    }
    }
    );
    col[4].addEventListener("click", function() {
        i=0;
        while (i<5){
        row5[i].classList.toggle('shaddy');
        i=i+1;
        }
        }
        );
        col[5].addEventListener("click", function() {
            i=0;
            while (i<5){
            row6[i].classList.toggle('shaddy');
            i=i+1;
            }
            }
            );
            col[6].addEventListener("click", function() {
                i=0;
                while (i<5){
                row7[i].classList.toggle('shaddy');
                i=i+1;
                }
                }
                );
