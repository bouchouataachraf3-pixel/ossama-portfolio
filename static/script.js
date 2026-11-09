document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(
        "section, .skill-card, .project-card, .contact-card"
    );

    if (!("IntersectionObserver" in window)) {
        return;
    }

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.1
        }
    );

    elements.forEach(function (element) {
        element.classList.add("reveal");
    });

    document.body.classList.add("reveal-ready");

    elements.forEach(function (element) {
        observer.observe(element);
    });

});
