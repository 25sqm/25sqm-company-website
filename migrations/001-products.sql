-- Up

CREATE TABLE Product (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    productName TEXT,
    productDescription TEXT,
    productImage TEXT
);

INSERT INTO Product (productName, productDescription, productImage)
VALUES ("Profume: 99.8% Sulfuryl-Fluoride", "Broad-spectrum fumigant designed for quick and easy fumigation with guaranteed effects within 24hrs upon exposure", "https://picsum.photos/500/600");

INSERT INTO Product (productName, productDescription, productImage)
VALUES ("Vaporpho3s: 99% Phosphine ", "Pure phosphine for the fumigation of post-harvest products and/or storage structures. Designed for use in conjunction with Cytec-approved blending equipment capable of diluting the phosphine concentration to below its lower flammability limit of 1.8% (vol.).", "https://picsum.photos/500/600");

INSERT INTO Product (productName, productDescription, productImage)
VALUES ("Eco2fume: 2% Phosphine ", "A gaseous mixture of 2% phosphine (by weight) in carbon dioxide. Carbon dioxide is an excellent carrier for phosphine and diluting phosphine to this concentration ensuring that the fumigant is nonflammable in all proportions with air.", "https://picsum.photos/500/600");


-- Down

DROP TABLE Product;
