function happyButton() {
    const audio = document.getElementById("Happy_Birthday");
    audio.play();

    confetti({
        particleCount: 300,
        spread: 100,
        origin: { y: 0.5 }
    });
}