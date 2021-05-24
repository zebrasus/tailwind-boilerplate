document.getElementById('toggle-mobile-menu').addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector('.header nav').classList.toggle('open');
});

document.querySelectorAll('.dropdown a').forEach(function(a) {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        e.target.nextElementSibling.classList.toggle('open');
    });
});