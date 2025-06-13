function showBubble(el) {
    const bubble = el.querySelector('.bubble');
    bubble.classList.add('show');

    setTimeout(() => {
        bubble.classList.remove('show');
    }, 3000);
}

function showBubble(card) {
    document.querySelectorAll('.bg_cards_4Section').forEach(c => {
        c.classList.remove('active');
    });
    card.classList.add('active');

    setTimeout(() => {
        card.classList.remove('active');
    }, 3000);
}