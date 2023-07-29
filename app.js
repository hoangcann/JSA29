let today = new Date();
let current_day = today.getDay();
let day_name;
switch (current_day) {
    case 0:
        day_name = "Chủ nhật";
        break;
    case 1:
        day_name = "Thứ hai";
        break;
    case 2:
        day_name = "Thứ ba";
        break;
    case 3:
        day_name = "Thứ tư";
        break;
    case 4:
        day_name = "Thứ năm";
        break;
    case 5:
        day_name = "Thứ sáu";
        break;
    case 6:
        day_name = "Thứ bảy";
        break;
}
let date = day_name + ", " + today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
document.getElementById("date").innerHTML = date;

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#top-up').fadeIn(200);
    }
    else {
        $('#top-up').fadeOut(200);
    }
});

$(function () {
    $('#top-up').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 600);
    });
});


$(document).ready(function () {
    $("#open-nav").click(function () {
        $("#nav-res-border").slideToggle("medium");
    });
});

let count_nav_toggle = 0;
let toggle_icon_1 = document.getElementById("toggle-icon-1");
let toggle_icon_2 = document.getElementById("toggle-icon-2");
let toggle_icon_3 = document.getElementById("toggle-icon-3");
document.getElementById("open-nav").addEventListener("click", function () {
    if (count_nav_toggle % 2 == 0) {
        toggle_icon_1.style.transform = "rotate(45deg)";
        toggle_icon_1.style.top = "0";
        toggle_icon_3.style.transform = "rotate(-45deg)";
        toggle_icon_3.style.top = "0";
        if (localStorage.getItem("darkmode") != undefined) {
            toggle_icon_2.style.backgroundColor = "black";
        } else {
            toggle_icon_2.style.backgroundColor = "white";
        }
        count_nav_toggle++;
    } else {
        toggle_icon_1.style.transform = "";
        toggle_icon_1.style.top = "-8px";
        toggle_icon_3.style.transform = "";
        toggle_icon_3.style.top = "8px";
        if (localStorage.getItem("darkmode") != undefined) {
            toggle_icon_2.style.backgroundColor = "white";
        } else {
            toggle_icon_2.style.backgroundColor = "black";
        }
        count_nav_toggle++;
    }
});