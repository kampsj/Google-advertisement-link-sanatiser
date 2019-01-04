
// Catch mouseclicks
document.addEventListener('mousedown', linkClick, true);
// Catch touch'clicks'
document.addEventListener('touchstart', linkClick, true);



function linkClick(event) {
    // The proper link is present in the href on the google homepage.
    var target = event.target;

    // Check if target has an href attribute, if not go one level up.
    while (!target.href) {
        target = target.parentElement;
    }

    // Make sure Google's script wil not run.
    target.removeAttribute('onmousedown');
    target.removeAttribute('ontouchstart');



}