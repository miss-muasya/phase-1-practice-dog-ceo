console.log('%c HI', 'color: firebrick')
// Challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
function renImgs(objc) {
    const img = document.createElement('img');
    img.src = objc
    img.style.height = "100px";

    document.getElementById("dog-image-container").appendChild(img);
}
fetch(imgUrl)
    .then(resp => resp.json())
    .then(obj => obj.message.forEach(element =>
        renImgs(element)));

// Challenge 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
function putInUl(obj) {
    const newLi = document.createElement("li");
    newLi.textContent = obj;
    newLi.addEventListener("click", () => {
        // Challenge 3
        newLi.style.color = "red"
        setTimeout(() => newLi.style.color = "blue")
    })
    document.getElementById("dog-breeds").appendChild(newLi);
}

fetch(breedUrl)
    .then(resp => resp.json())
    .then(obj => {
        for (element in obj.message) {
            putInUl(element);
        }
        document.getElementById("breed-dropdown").addEventListener("onchange",selected)
    });

// Challenge 4

function selected(letter) {
    const ul = document.getElementById("dog-breeds");
    const lis = ul.getElementsByTagName('li');
    for (let i = 0; i < lis.length; i++) {
        lis[i].textContent.charAt(0) === letter ?
            lis[i].style.display = "" :
            lis[i].style.display = "none";
    }
}