var acc = document.getElementsByName("change");
var f = document.getElementsByName("first");
var s = document.getElementsByName("sec");
var t = document.getElementsByName("third");
var f4 = document.getElementsByName("f4");
var base1 = f[0].style.backgroundColor;
var base2 = s[0].style.backgroundColor;
var base3 = t[0].style.backgroundColor;
var base4 = f4[0].style.backgroundColor;

acc[0].addEventListener("click", function() {
f4[0].style.backgroundColor = "#FF6633";
s[0].style.backgroundColor = base2;
t[0].style.backgroundColor = base3;
t[1].style.backgroundColor = base3;
f[0].style.backgroundColor = base1;
}
);

acc[1].addEventListener("click", function() {
    t[0].style.backgroundColor = "#FF6633";
    t[1].style.backgroundColor = "#FF6633"
    s[0].style.backgroundColor = base2;
    f4[0].style.backgroundColor = base4;
    f[0].style.backgroundColor = base3;
}
);
acc[2].addEventListener("click", function() {
    f[0].style.backgroundColor = "#FF6633";
    s[0].style.backgroundColor = base2;
    t[0].style.backgroundColor = base3;
    t[1].style.backgroundColor = base3;
    f4[0].style.backgroundColor=base4;
}
);
acc[3].addEventListener("click", function() {
    s[0].style.backgroundColor = "#FF6633";
    f4[0].style.backgroundColor = base4;
    t[0].style.backgroundColor = base3;
    t[1].style.backgroundColor = base3;
    f[0].style.backgroundColor=base1;
}
);