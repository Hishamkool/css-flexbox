function updateScreenSizes() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(
        box => {
            const rect = box.getBoundingClientRect();
            box.textContent = `width: ${Math.round(rect.width)} px`
        }
    );
}

updateScreenSizes();

window.addEventListener('resize', updateScreenSizes);