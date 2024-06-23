//calculate random number
const getRandomInt = (max) => Math.floor(Math.random() * max);
const makeRandomColor = () => {
    const r = getRandomInt(255);
    const g = getRandomInt(255);
    const b = getRandomInt(255);

    // Calculate the relative luminance
    const luminance = (0.2126 * r / 255) + (0.7152 * g / 255) + (0.0722 * b / 255);
    const isDark = luminance < 0.5;

    return {
        color: `rgb(${r}, ${g}, ${b})`,
        isDark: isDark,
    };
};

const bgColor = document.querySelector('body');
const title = document.querySelector('h1');
const generateButton = document.querySelector('button');

generateButton.addEventListener('click', function () {
    const result = makeRandomColor();
    let newColor = result.color;
    let isDark = result.isDark;
    bgColor.style.backgroundColor = newColor;
    title.innerText = newColor;
    title.style.color = isDark ? 'white' : 'black';
});

