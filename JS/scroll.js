document.addEventListener('DOMContentLoaded', function() {
    const scroll = document.querySelectorAll(".scroll-btn");
    scroll.forEach(Element => {
        Element.addEventListener("click", () => {
            const targetId = Element.getAttribute("data-target");
            const section = document.getElementById(targetId);
            if (section) {
                section.scrollIntoView({
                    behavior: "smooth", 
                    block : "start"
                });
            }
        });
    });
});