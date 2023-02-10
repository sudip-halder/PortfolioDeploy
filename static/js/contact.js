document.addEventListener('DOMContentLoaded',function(){

            //function to add links to elements
            function add_link(id, link) {
                document.querySelector(`#${id}`).addEventListener("click", function () {
                    location.href = link;
                });
            }

    add_link("linkedin", "https://linkedin.com/in/sudiphalder");
    add_link("twitter", "https://twitter.com/sudip__halder");
    add_link("instagram", "https://instagram.com/sudip__halder");

    document.querySelector("#reset-container").addEventListener("click",function () {
        document.querySelector("#contact-form").reset();
    });

});