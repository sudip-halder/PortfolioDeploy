document.addEventListener('DOMContentLoaded', function() {
    const window_width=window.innerWidth;
    const phto_display_container=document.querySelector('#photo-display-container');
    const photo_cancel =document.querySelector('#photo-display-cancel-icon');


    photo_cancel.addEventListener('click',function(){
        phto_display_container.style.display="none";
    });

    function create_image_grid(){
        const total_images=17;
        if(window_width>950){
            for(let i=1; i<=total_images;i++){
                const image_element =document.createElement('img');
                image_element.src= `static/media/photography/img-${i}.jpg`;
                image_element.style.width="100%";
                image_element.style.boxSizing="border-box";
                image_element.style.cursor="pointer";
                image_element.style.paddingLeft="2px";
                image_element.style.paddingRight="2px";
                if ((i-1)%4 ===0){
                    document.getElementById('photo-column-1').appendChild(image_element);
                }
                else if((i-2)%4 ===0){
                    document.getElementById('photo-column-2').appendChild(image_element);
                }
                else if((i-3)%4 ===0){
                    document.getElementById('photo-column-3').appendChild(image_element);
                }
                else if((i-4)%4 ===0){
                    document.getElementById('photo-column-4').appendChild(image_element);
                }else{
                    continue;
                };   
            };
        }else{
            for(let i=1; i<=total_images;i++){
                const image_element =document.createElement('img');
                image_element.src=`static/media/photography/img-${i}.jpg`;
                image_element.style.width="100%";
                image_element.style.boxSizing="border-box";
                image_element.style.cursor="pointer";
                image_element.style.paddingLeft="2px";
                image_element.style.paddingRight="2px";
                if (i%2 ===0){
                    document.getElementById('photo-column-2').appendChild(image_element);
                }
                else if(i%2 !==0) {
                    document.getElementById('photo-column-1').appendChild(image_element);
                }
  
            };

        }

    };

    create_image_grid();

    document.querySelectorAll('img').forEach(function(image){
        
        image.onclick= function(){
            const image_src= image.src;
            phto_display_container.style.display="flex";
            document.querySelector('.display-photo').src = image_src;
        };
    });

});