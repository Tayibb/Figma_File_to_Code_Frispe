let screen = document.querySelector("#screen");
let btns = document.querySelectorAll(".btns");

let count = 1;

btns.forEach((items) => {
    items.addEventListener("click", () => {
        if (items.classList.contains("customNextBtn")) {
            count++;
            if (count > 4) {
                count = 0;
            }
        } else if (items.classList.contains("customPrevBtn")) {
            if (count <= 4) {
                count--;
                count = 4;
            }
        }
        screen.innerText = count;
    });
});

let clickOne = document.querySelector(".click1");
let toggleOne = document.querySelector(".toggle1");

clickOne.addEventListener("click", () => {
    if (toggleOne.style.display !== "block") {
        toggleOne.style.display = "block";
    } else {
        toggleOne.style.display = "none";
    }
});

let clickTwo = document.querySelector(".click2");
let toggleTwo = document.querySelector(".toggle2");

clickTwo.addEventListener("click", () => {
    if (toggleTwo.style.display !== "block") {
        toggleTwo.style.display = "block";
    } else {
        toggleTwo.style.display = "none";
    }
});

let clickThree = document.querySelector(".click3");
let toggleThree = document.querySelector(".toggle3");

clickThree.addEventListener("click", () => {
    if (toggleThree.style.display !== "block") {
        toggleThree.style.display = "block";
    } else {
        toggleThree.style.display = "none";
    }
});

let tabClick1 = document.querySelector(".tab_click1");
let tabClick2 = document.querySelector(".tab_click2");
let tabClick3 = document.querySelector(".tab_click3");
let tabClick4 = document.querySelector(".tab_click4");
let tabClick5 = document.querySelector(".tab_click5");
let tabClicked = document.querySelector(".tab_clicked");
let tabImg1 = document.querySelector(".tab_img1");
let tabImg2 = document.querySelector(".tab_img2");
let tabImg3 = document.querySelector(".tab_img3");
let tabImg4 = document.querySelector(".tab_img4");
let tabImg5 = document.querySelector(".tab_img5");

tabClick1.addEventListener("click", () => {
    tabImg1.style.display = "block";
    tabImg2.style.display = "none";
    tabImg3.style.display = "none";
    tabImg4.style.display = "none";
    tabImg5.style.display = "none";
    tabClicked.style.top = "0";
    tabClick1.classList.add("clicked");
    if (tabClick2.classList.contains("clicked") || tabClick3.classList.contains("clicked") || tabClick4.classList.contains("clicked") || tabClick5.classList.contains("clicked")) {
        tabClick2.classList.remove("clicked");
        tabClick3.classList.remove("clicked");
        tabClick4.classList.remove("clicked");
        tabClick5.classList.remove("clicked");
    }
});

tabClick2.addEventListener("click", () => {
    tabImg1.style.display = "none";
    tabImg2.style.display = "block";
    tabImg3.style.display = "none";
    tabImg4.style.display = "none";
    tabImg5.style.display = "none";
    tabClicked.style.top = "30px";
    tabClick2.classList.add("clicked");
    if (tabClick1.classList.contains("clicked") || tabClick3.classList.contains("clicked") || tabClick4.classList.contains("clicked") || tabClick5.classList.contains("clicked")) {
        tabClick1.classList.remove("clicked");
        tabClick3.classList.remove("clicked");
        tabClick4.classList.remove("clicked");
        tabClick5.classList.remove("clicked");
    }
});

tabClick3.addEventListener("click", () => {
    tabImg1.style.display = "none";
    tabImg2.style.display = "none";
    tabImg3.style.display = "block";
    tabImg4.style.display = "none";
    tabImg5.style.display = "none";
    tabClicked.style.top = "60px";
    tabClick3.classList.add("clicked");
    if (tabClick1.classList.contains("clicked") || tabClick2.classList.contains("clicked") || tabClick4.classList.contains("clicked") || tabClick5.classList.contains("clicked")) {
        tabClick1.classList.remove("clicked");
        tabClick2.classList.remove("clicked");
        tabClick4.classList.remove("clicked");
        tabClick5.classList.remove("clicked");
    }
});

tabClick4.addEventListener("click", () => {
    tabImg1.style.display = "none";
    tabImg2.style.display = "none";
    tabImg3.style.display = "none";
    tabImg4.style.display = "block";
    tabImg5.style.display = "none";
    tabClicked.style.top = "90px";
    tabClick4.classList.add("clicked");
    if (tabClick1.classList.contains("clicked") || tabClick2.classList.contains("clicked") || tabClick3.classList.contains("clicked") || tabClick5.classList.contains("clicked")) {
        tabClick1.classList.remove("clicked");
        tabClick2.classList.remove("clicked");
        tabClick3.classList.remove("clicked");
        tabClick5.classList.remove("clicked");
    }
});

tabClick5.addEventListener("click", () => {
    tabImg1.style.display = "none";
    tabImg2.style.display = "none";
    tabImg3.style.display = "none";
    tabImg4.style.display = "none";
    tabImg5.style.display = "block";
    tabClicked.style.top = "120px";
    tabClick5.classList.add("clicked");
    if (tabClick1.classList.contains("clicked") || tabClick2.classList.contains("clicked") || tabClick3.classList.contains("clicked") || tabClick4.classList.contains("clicked")) {
        tabClick1.classList.remove("clicked");
        tabClick2.classList.remove("clicked");
        tabClick3.classList.remove("clicked");
        tabClick4.classList.remove("clicked");
    }
});

let screen1 = document.querySelector("#screen1");
let tabList = document.querySelectorAll(".tab_click");

let counter = 1;

tabList.forEach((items) => {
    items.addEventListener("click", () => {
        if (items.classList.contains("tab_click1")) {
            counter = `01`;
        } else if (items.classList.contains("tab_click2")) {
            counter = `02`;
        } else if (items.classList.contains("tab_click3")) {
            counter = `03`;
        } else if (items.classList.contains("tab_click4")) {
            counter = `04`;
        } else if (items.classList.contains("tab_click5")) {
            counter = `05`;
        }
        screen1.innerText = counter;
    });
});

let rotateRight1 = document.querySelector(".orange_right");
let rotateLeft1 = document.querySelector(".orange_left");
let right1 = document.querySelector(".right");
let left1 = document.querySelector(".left");

left1.addEventListener("click", () => {
    if ((left1.style.display = "block")) {
        left1.style.display = "none";
        rotateLeft1.style.display = "block";
        rotateRight1.style.display = "none";
        right1.style.display = "block";
    }
});

right1.addEventListener("click", () => {
    if ((right1.style.display = "block")) {
        right1.style.display = "none";
        rotateRight1.style.display = "block";
        rotateLeft1.style.display = "none";
        left1.style.display = "block";
    }
});

let rotateRight2 = document.querySelector(".orange_right2");
let rotateLeft2 = document.querySelector(".orange_left2");
let right2 = document.querySelector(".right2");
let left2 = document.querySelector(".left2");

left2.addEventListener("click", () => {
    if ((left2.style.display = "block")) {
        left2.style.display = "none";
        rotateLeft2.style.display = "block";
        rotateRight2.style.display = "none";
        right2.style.display = "block";
    }
});

right2.addEventListener("click", () => {
    if ((right2.style.display = "block")) {
        right2.style.display = "none";
        rotateRight2.style.display = "block";
        rotateLeft2.style.display = "none";
        left2.style.display = "block";
    }
});

let rotateRight3 = document.querySelector(".orange_right3");
let rotateLeft3 = document.querySelector(".orange_left3");
let right3 = document.querySelector(".right3");
let left3 = document.querySelector(".left3");

left3.addEventListener("click", () => {
    if ((left3.style.display = "block")) {
        left3.style.display = "none";
        rotateLeft3.style.display = "block";
        rotateRight3.style.display = "none";
        right3.style.display = "block";
    }
});

right3.addEventListener("click", () => {
    if ((right3.style.display = "block")) {
        right3.style.display = "none";
        rotateRight3.style.display = "block";
        rotateLeft3.style.display = "none";
        left3.style.display = "block";
    }
});

let box1 = document.querySelector(".help_box1");
let box2 = document.querySelector(".help_box2");
let box3 = document.querySelector(".help_box3");
let orange = document.querySelector(".orange_arrow2");
let white = document.querySelector(".white_arrow2");
let text = document.querySelector(".text_mid");

box1.addEventListener("mouseover", () => {
    box2.style.background = "white";
    if ((text.style.color = "#FFFFFF")) {
        text.style.color = "#000000";
    }
    if ((white.style.display = "block")) {
        white.style.display = "none";
        orange.style.display = "block";
    }
});
box1.addEventListener("mouseout", () => {
    box2.style.background = "#FF5722";
    if ((text.style.color = "#000000")) {
        text.style.color = "#FFFFFF";
    }
    if ((white.style.display = "none")) {
        white.style.display = "block";
        orange.style.display = "none";
    }
});

box3.addEventListener("mouseover", () => {
    box2.style.background = "white";
    if ((text.style.color = "#FFFFFF")) {
        text.style.color = "#000000";
    }
    if ((white.style.display = "block")) {
        white.style.display = "none";
        orange.style.display = "block";
    }
});
box3.addEventListener("mouseout", () => {
    box2.style.background = "#FF5722";
    if ((text.style.color = "#000000")) {
        text.style.color = "#FFFFFF";
    }
    if ((white.style.display = "none")) {
        white.style.display = "block";
        orange.style.display = "none";
    }
});
