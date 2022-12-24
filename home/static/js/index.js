document.addEventListener('DOMContentLoaded', function () {

    const frozen_box = document.querySelector("#frozen-box");
    const index_body = document.querySelector("#index-body");
    const inside_body = document.querySelector("#inside-body");
    const box_icon = document.querySelector("#box-icon");
    const sidebar = document.querySelector("#sidebar");

    //function to add links to elements
    function add_link(id, link) {
        document.querySelector(`#${id}`).addEventListener("click", function () {
            location.href = link;
        });
    }

    //add links to elements
    add_link("home-icon", "/");
    add_link("projects-link", "projects");
    add_link("contact-link", "contact");
    add_link('photography-link', 'photography');

    function setAnimationName(element, name) {
        element.style.animationName = name;
    }

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

    let checker = "active";
    box_icon.addEventListener("click", function () {

        setAnimationName(box_icon, "box-icon-blink");
        setTimeout(function () {
            setAnimationName(box_icon, "");
        }, 200);

        if (checker === "inactive") {

            setAnimationName(sidebar, "sidebar-expand");
            sidebar.style.display = "flex";
            checker = "active";
        } else {
            setAnimationName(sidebar, "sidebar-shrink");
            setTimeout(function () {
                sidebar.style.display = "none";
            }, 400);
            checker = "inactive";
        }


    });

});