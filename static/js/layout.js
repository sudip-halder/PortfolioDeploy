document.addEventListener('DOMContentLoaded', function () {

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
        add_link('blogs-link', 'blogs');


    function setAnimationName(element, name) {
        element.style.animationName = name;
    }

    let checker = "inactive";
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