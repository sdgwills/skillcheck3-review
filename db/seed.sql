-- DROP TABLES TO START FROM SCRATCH
DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS house;

-- CREATE TABLES
CREATE TABLE house(
  id SERIAL PRIMARY KEY,
  house_name TEXT,
  img TEXT,
  color_1 VARCHAR(7),
  color_2 VARCHAR(7),
  color_3 VARCHAR(7),
  description TEXT,
  patron_animal TEXT
);

CREATE TABLE student (
  student TEXT, 
  id SERIAL PRIMARY KEY,
  house_id INT REFERENCES house(id)
);

-- CREATE DUMMY DATA
INSERT INTO house(house_name, img, color_1, color_2, color_3, description, patron_animal)
VALUES
  ('Gryffindor', 'https://cdn10.bigcommerce.com/s-9p3fydit/products/370/images/1328/gryff1c__34591.1449620321.1200.1200.PNG?c=2', '#740001', '#ae0001', '#eeba30', 'Basic', 'Lion'),
  ('Slytherin', 'https://vignette.wikia.nocookie.net/pottermore/images/4/45/Slytherin_Crest.png/revision/latest?cb=20111112232353', '#1a472a', '#2a623d', '#5d5d5d', 'Ew', 'Ssssssnaaake'),
  ('Ravenclaw', 'https://vignette.wikia.nocookie.net/pottermore/images/4/40/Ravenclaw_Crest_1.png/revision/latest?cb=20140604194505', '#0e1a40', '#222f5b', '#946b2d', 'Objectively the best house', 'Eagle');
  ('Hufflepuff', 'https://i.ytimg.com/vi/y0Z5_wipT2o/maxresdefault.jpg', '#ecb939', '#f0c75e', '#726255', 'am hufflepuff', 'Badger?'),


INSERT INTO student(student, house_id)
VALUES 
  ('Jonathan', 3),
  ('Matt', 4),
  ('David', 2),
  ('Christian', 1)
;
