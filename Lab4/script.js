function getRandomInt(maxValue)
{
    return Math.floor(Math.random() * maxValue);
}

function getRandomColor()
{
    const maxRandomValue = 255;

    let r = getRandomInt(maxRandomValue);
    let g = getRandomInt(maxRandomValue);
    let b = getRandomInt(maxRandomValue);

    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function setRandomColors(element)
{
    element.style.color = getRandomColor();
    element.style.backgroundColor = getRandomColor(); 
}

window.onload = function()
{
    document.getElementById("clickable1").addEventListener("click", e => setRandomColors(e.target));
    document.querySelector("#clickable2").addEventListener("click", e => setRandomColors(e.target));
}


function handleAddImageClick()
{
    const imageHtml = `<a href="https://miskrada.kherson.ua/"><img src="https://media.slovoidilo.ua/media/scimage/165/164759-uk.png"/></a>`;

    document.getElementById("images-container").innerHTML += imageHtml;
}

function handleReduceImageClick()
{
    let container = document.getElementById("images-container");
    let images = container.children;

    if (images.length == 0)
    {
        return;
    }

    let image = images[images.length - 1].children[0];

    image.style.width = image.style.width == "" ? "100%" : (parseInt(image.style.width) / 1.2).toString() + "%";
}

function handleEnlargeImageClick()
{
    let container = document.getElementById("images-container");
    let images = container.children;

    if (images.length == 0)
    {
        return;
    }

    let image = images[images.length - 1].children[0];

    image.style.width = image.style.width == "" ? "100%" : (parseInt(image.style.width) * 1.2).toString() + "%";
}

function handleRemoveImageClick()
{
    let container = document.getElementById("images-container");
    let images = container.children;

    if (images.length == 0)
    {
        return;
    }

    container.removeChild(images[images.length - 1]);
}
