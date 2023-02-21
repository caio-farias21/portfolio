let profile = document.querySelector('#profile-image');
let hand = document.querySelector('#hand');
let shareBtn = document.querySelector('#share-btn');
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

document.querySelector('#share-btn').addEventListener('click', function() {
    navigator.clipboard.writeText("https://portfolio-caiofarias21.vercel.app/");
});

document.querySelector('#hand').addEventListener('mouseover', function() {
        hand.style.transform = 'rotate(-15deg)';
        setTimeout(() => {
            hand.style.transform = 'rotate(15deg)';
            setTimeout(() => { hand.style.transform = 'rotate(0deg)'; }, 200);
        }, 200);
});
