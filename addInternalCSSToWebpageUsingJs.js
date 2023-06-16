// Create a new style element
const style = document.createElement('style');

// Set the CSS you want to add
style.textContent = `
  h1 {
    color: blue;
    font-size: 36px;
  }
  .adil{
    background-color: #293a46;
    color:#fff;
  }
`;

// Append the style element to the head of the document
document.head.appendChild(style);