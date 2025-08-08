function updateScreenSizes() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(
        box => {
            const rect = box.getBoundingClientRect();
            const fontSize = Math.max(10, Math.min(24, rect.width / 10)); // Scale with width
            box.style.fontSize = `${fontSize}px`;

            box.style.whiteSpace = "pre-line";
            box.textContent = `height: ${Math.round(rect.height)}px\nwidth: ${Math.round(rect.width)} px`
        }
    );
}

updateScreenSizes();

window.addEventListener('resize', updateScreenSizes);