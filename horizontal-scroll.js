document.addEventListener('DOMContentLoaded', function () {
    const imagesContainer = document.getElementById('imagesContainer');
    imagesContainer.style.cursor = 'grab';

    let pos = { left: 0, x: 0 };

    const mouseMoveHandler = event => {
        console.log(event.clientX)
        imagesContainer.style.cursor = 'grabbing';
        imagesContainer.style.userSelect = 'none';

        const dx = event.clientX - pos.x;
        imagesContainer.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = () => {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);

        imagesContainer.style.cursor = 'grab';
        imagesContainer.style.removeProperty('user-select');
    };

    const mouseDownHandler = event => {
        pos = {
            left: imagesContainer.scrollLeft,
            x: event.clientX,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    imagesContainer.addEventListener('mousedown', mouseDownHandler);
});