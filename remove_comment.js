
var comment_elements = []

lookup_selectors = [
    "#commentSection",
    "[class*='discussion']",
    "[type*='comment']"
]

for (const lookup_element of lookup_selectors) {
    found = document.querySelectorAll(lookup_element)
    console.log(found)
    if (found != null){
        comment_elements.push.apply(comment_elements, found);
    }
}

if (comment_elements.length > 0){
    for (var i = 0; i < comment_elements.length; i++) {
        console.log("Removing: " + comment_elements[i]);
        if (comment_elements[i] != null){
            comment_elements[i].parentElement.removeChild(comment_elements[i]);
        }
    }
}

