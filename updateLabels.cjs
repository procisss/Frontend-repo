const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf8');

// The label for the section in the modal and card
content = content.replace(/>Products Used</g, '>Ingredients Used<');

// The table header in the modal
content = content.replace(/\['Product','Quantity','Unit',''\]/g, "['Ingredient','Quantity','Unit','']");

// The Add Row button
content = content.replace(/>\+ Add Product Row</g, '>+ Add Ingredient<');

// Placeholder for manual ingredient typing
content = content.replace(/placeholder="Type product name"/g, 'placeholder="Type ingredient name"');

// Submit button in the modal
content = content.replace(/>Add Recipe</g, '>Add Product<');

fs.writeFileSync('src/App.jsx', content);
console.log('App.jsx labels updated!');
