(function ($) {
    $(document).ready(function () {
        
        /*slick*/
        $('.slick-item').slick({
            dots: true,
            infinite: true,
            arrows:false,
            swipe:true,
            touchMove:true
        });
        /*checkbox*/
        $(".checkboxAll").click(function(){
            console.log($(this).hasClass("checked"))
            if($(this).hasClass("checked")){
                $(this).removeClass("checked");
                $(".checkbox").removeClass("checked");
            }else{
                $(this).addClass("checked");
                $(".checkbox").addClass("checked");
            }
        });
        $(".checkbox").click(function(){
            $(this).toggleClass("checked");

        });
        window.addEventListener('resize', () => {
            // We execute the same script as before
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });

    });

})(this.jQuery);