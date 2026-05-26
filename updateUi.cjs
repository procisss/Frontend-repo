const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf8');

// Sidebar nav items
content = content.replace('{id:"inventory",label:"Inventory"', '{id:"inventory",label:"Ingredients Inventory"');

// Inventory page header
content = content.replace('<div style={styles.pageTitle}>Inventory Tracking</div>', '<div style={styles.pageTitle}>Ingredients Inventory</div>');
content = content.replace('Stock levels are sourced from your Products. Add products there to manage ingredients here.', 'Track and restock your raw ingredients. (Purchases automatically restock these items)');

// Recipes page header
content = content.replace('<div style={styles.pageTitle}>Recipe Management</div>', '<div style={styles.pageTitle}>Products</div>');
content = content.replace('Create and manage recipes and link them to ingredients.', 'Create products, set selling prices, and assign raw ingredients.');

// Add Recipe buttons -> Add Product
content = content.replace(/>\+ Add Recipe</g, '>+ Add Product<');
content = content.replace(/'✏️ Edit Recipe'/g, "'✏️ Edit Product'");
content = content.replace(/'➕ Add Recipe'/g, "'➕ Add Product'");
content = content.replace(/'Recipe Name \u002A'/g, "'Product Name *'");

// In POS
content = content.replace(/>Recipe</g, '>Product<');
content = content.replace(/>Recipes</g, '>Products<');

fs.writeFileSync('src/App.jsx', content);
console.log('App.jsx updated!');
