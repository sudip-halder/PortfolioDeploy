document.addEventListener('DOMContentLoaded', function () {

    const frozen_box = document.querySelector("#frozen-box");
    const index_body = document.querySelector("#index-body");
    const inside_body = document.querySelector("#inside-body");

    //function to add links to elements
    function add_link(id, link) {
        document.querySelector(`#${id}`).addEventListener("click", function () {
            location.href = link;
        });
    }

    //add links to elements
    // navigation bar links in the layout.js

    function setAnimationName(element, name) {
        element.style.animationName = name;
    }

    // Scrolling function that changes front page to main page
    window.onscroll = function () { myFunction() };

    function myFunction() {
        if (document.documentElement.scrollTop != 0) {
            setAnimationName(index_body, "indexbody-hide");
            if (document.documentElement.scrollTop > 350) {
                setAnimationName(inside_body, "inside-body-show");
            }

        } else if (document.documentElement.scrollTop == 0) {
            setAnimationName(index_body, "indexbody-show");
            setAnimationName(inside_body, "inside-body-hide");
        }
    }

    //typing effect
    
    var self_description_1 = 'Hi, I am Sudip Halder';
    var self_description_2 = 'Web and Android App Developer';
    var self_description_3 = 'B.Tech in Computer Science and Engineering';
    var self_description_4 = 'Indian Institute of Information Technology SriCity';
    var typing_speed = 40;
    var type_counter1 = 0;
    var type_counter2 = 0;
    var type_counter3 = 0;
    var type_counter4 = 0;
        



    function typeWriter_sd1() {
        if (type_counter1 < self_description_1.length) {
            document.getElementById('sd1').innerHTML += self_description_1.charAt(type_counter1);
            type_counter1++;
            setTimeout(typeWriter_sd1, typing_speed);
        }
    }
    function typeWriter_sd2() {
        if (type_counter2 < self_description_2.length) {
            document.getElementById('sd2').innerHTML += self_description_2.charAt(type_counter2);
            type_counter2++;
            setTimeout(typeWriter_sd2, typing_speed);
        }
    }
    function typeWriter_sd3() {
        if (type_counter3 < self_description_3.length) {
            document.getElementById('sd3').innerHTML += self_description_3.charAt(type_counter3);
            type_counter3++;
            setTimeout(typeWriter_sd3, typing_speed);
        }
    }
    function typeWriter_sd4() {
        if (type_counter4 < self_description_4.length) {
            document.getElementById('sd4').innerHTML += self_description_4.charAt(type_counter4);
            type_counter4++;
            setTimeout(typeWriter_sd4, typing_speed);
        }
    }
    var typing_start_time = 3500 ;
    setTimeout(typeWriter_sd1, typing_start_time);
    setTimeout(typeWriter_sd2, typing_start_time +1500);
    setTimeout(typeWriter_sd3, typing_start_time+3500);
    setTimeout(typeWriter_sd4, typing_start_time+6000);


});