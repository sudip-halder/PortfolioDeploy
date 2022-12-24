document.addEventListener('DOMContentLoaded', function () {
    const window_height=screen.height;
    
    const footer = document.querySelector('#footer');
    const mobileNavList = document.querySelector('#mobileNavList');
    const mNavListElement = document.querySelectorAll('.mNavListElement-animation');
    const bar_icon = document.querySelector('#bar-icon');

    //function to add links to elements
    function add_link(id, link) {
        document.querySelector(`#${id}`).addEventListener("click", function () {
            location.href = link;
        });
    }

    //add links to elements
    add_link("home-icon", "/");
    add_link("projects-link", "");
    add_link('photography-link', 'photography');
    add_link("m-projects-link", "");
    add_link('m-photography-link', 'photography');

    //fix the footer to the bottom

    window.addEventListener("resize",function(){
        footer.style.top=`${window_height}px`;
    });



    function setAnimationName(element, name) {
        element.style.animationName = name;
    }

    let checker = "inactive";
    bar_icon.addEventListener("click", function () {



        if (checker === "inactive") {
            //spreads the mobile navigation bar list and make it visible
            setAnimationName(mobileNavList, "mobileNavListActive");
            mobileNavList.style.display = "flex";

            //rotate the bar icon
            setAnimationName(bar_icon, "rotate-bar-icon");

            // changes opacity 0 to 1 of mobile nav bar list elements
            mNavListElement.forEach(function (element) {

                setAnimationName(element, "mNavListElementDisplay");
                element.style.animationDirection = "normal";
            });

            checker = "active";
        }
        else {

            // wraps the navigation bar list and hide it after a delay of 800ms
            setAnimationName(mobileNavList, "mobileNavListInActive");
            setTimeout(function () {
                mobileNavList.style.display = "none";
            }, 800);

            //rotates back the bar icon
            setAnimationName(bar_icon, "rotate-back-bar-icon");

            // changes opacity 1 to 0 of mobile nav bar list elements
            mNavListElement.forEach(function (element) {
                element.style.animationDirection = "reverse";
            });

            checker = "inactive";
        };



    }); //button action ends




}); // DOM content load action ends