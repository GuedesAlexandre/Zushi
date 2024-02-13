CREATE TABLE box(
   box_id BIGINT,
   nom VARCHAR(50) NOT NULL,
   prix DOUBLE NOT NULL,
   pieces INT,
   image VARCHAR(50) NOT NULL,
   saveurs VARCHAR(50),
   PRIMARY KEY(box_id)
);

CREATE TABLE aliments(
   aliment_id VARCHAR(50),
   nom VARCHAR(50) NOT NULL,
   quantite VARCHAR(50) NOT NULL,
   PRIMARY KEY(aliment_id)
);

CREATE TABLE panier(
   panier_id INT,
   PRIMARY KEY(panier_id)
);

CREATE TABLE commande(
   commande_id INT,
   _date DATETIME DEFAULT CURRENT_TIMESTAMP,
   prix DOUBLE,
   panier_id INT NOT NULL,
   PRIMARY KEY(commande_id),
   FOREIGN KEY(panier_id) REFERENCES panier(panier_id)
);

CREATE TABLE contient(
   box_id BIGINT,
   aliment_id VARCHAR(50),
   PRIMARY KEY(box_id, aliment_id),
   FOREIGN KEY(box_id) REFERENCES box(box_id),
   FOREIGN KEY(aliment_id) REFERENCES aliments(aliment_id)
);

CREATE TABLE avoir(
   box_id BIGINT,
   panier_id INT,
   PRIMARY KEY(box_id, panier_id),
   FOREIGN KEY(box_id) REFERENCES box(box_id),
   FOREIGN KEY(panier_id) REFERENCES panier(panier_id)
);
INSERT INTO box(box_id, nom, prix, pieces, image, saveurs) VALUES
(1, 'Box 1', 10.0, 5, 'image1.jpg', 'Sweet'),
(2, 'Box 2', 15.0, 7, 'image2.jpg', 'Salty'),
(3, 'Box 3', 20.0, 10, 'image3.jpg', 'Spicy');

INSERT INTO aliments(aliment_id, nom, quantite) VALUES
('A1', 'Aliment 1', '10'),
('A2', 'Aliment 2', '20'),
('A3', 'Aliment 3', '30');

INSERT INTO panier(panier_id) VALUES
(1),
(2),
(3);

INSERT INTO commande(commande_id, _date, prix, panier_id) VALUES
(1, NOW(), 10.0, 1),
(2, NOW(), 15.0, 2),
(3, NOW(), 20.0, 3);

INSERT INTO contient(box_id, aliment_id) VALUES
(1, 'A1'),
(2, 'A2'),
(3, 'A3');

INSERT INTO avoir(box_id, panier_id) VALUES
(1, 1),
(2, 2),
(3, 3);