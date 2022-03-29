var btt = document.querySelector('#back-to-top');
var scrollAmount;

window.addEventListener('scroll', function() {
    scrollAmount = this.pageYOffset;
    //console.log(scrollAmount);
    if (scrollAmount > scrollAmount / 4) {
        btt.className = 'visible';
    } else {
        btt.classList.remove('visible');
    }
})
btt.addEventListener('click', function(e) {
    e.preventDefault();
    var scrollInterval = setInterval(() => {
        if (scrollAmount != 0) {
            window.scrollBy(0, -55)
                //console.log(scrollBy);
        } else {
            clearInterval(scrollInterval)
        }
    }, 10);
})