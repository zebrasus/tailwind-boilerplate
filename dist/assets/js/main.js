document.getElementById('toggle-mobile-menu').addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector('.header nav').classList.toggle('hidden');
});

document.querySelectorAll('.toggle').forEach(function(a) {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        
        e.target.nextElementSibling.classList.toggle('hidden');
    });
});

document.querySelectorAll('.youtube a').forEach(function(a) {
    a.addEventListener('click', function(e) {
        e.preventDefault();

        e.target.nextElementSibling.src = e.target.href;
        e.target.nextElementSibling.style.display = "block";
    });
});