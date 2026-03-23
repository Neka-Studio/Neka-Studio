const items_slidebar = document.querySelectorAll(".category-left li");

items_slidebar.forEach(function(item) {
    const hasSubMenu = item.querySelector("ul");

    if (hasSubMenu) {
        const link = item.querySelector(":scope > a");

        if (link) {
            link.addEventListener("click", function(e) {
                e.preventDefault(); 
                e.stopPropagation(); 
                

                item.classList.toggle("block");
            });
        }
    }
});