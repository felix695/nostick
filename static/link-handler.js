document.addEventListener("click", function(event) {
    var target = event.target;
    while (target != null && target.tagName != "A") target = target.parentNode;
    if (target && target.tagName == "A" && document.location.host == target.host) {
        event.preventDefault();
        document.location.href = target.href;
    }
});
