    function popup(){
        $('.contactForm').fadeToggle();
        $(document).mouseup(function (e) {
        var container = $(".contactForm");
    
        if (!container.is(e.target) && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container.fadeOut();
            }
        });
    }
