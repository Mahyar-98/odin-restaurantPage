function initializePage() {
    const contentElement = document.getElementById("content");
    const headerElement = document.createElement('h1');
    const introP = document.createElement('p');
    headerElement.textContent = "Welcome to our restaurant's website!";
    introP.textContent = "We take pride in being a 3-star fully vegan restaurant!";
    contentElement.appendChild(headerElement);
    contentElement.appendChild(introP);
}

export default initializePage