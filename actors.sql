DROP TABLE IF EXISTS actors;

CREATE TABLE actors (
    id SERIAL primary key,
    name VARCHAR(255) NOT NULL,
    age INT,
    Oscars INT
);

INSERT INTO actors (name,age,Oscars)
VALUES ('Leonardo Di Caprio', 41 , 1);

INSERT INTO actors (name,age,Oscars)

VALUES ('Jennifer Lawrence', 30 , 1);

INSERT INTO actors (name,age,Oscars)
VALUES ('Samuel L. Jackson', 67 , 0);

INSERT INTO actors (name,age,Oscars)
VALUES ('Meryl Streep', 66 , 3);

INSERT INTO actors (name,age,Oscars)
VALUES ('John Cho', 43 , 0);

SELECT * FROM actors;

SELECT * FROM actors WHERE Oscars > 1;

SELECT * FROM actors WHERE age > 30;

DROP TABLE
CREATE TABLE
INSERT 0 1
INSERT 0 1
INSERT 0 1
INSERT 0 1
INSERT 0 1

 id |        name        | age | oscars
----+--------------------+-----+--------
  1 | Leonardo Di Caprio |  41 |      1
  2 | Jennifer Lawrence  |  30 |      1
  3 | Samuel L. Jackson  |  67 |      0
  4 | Meryl Streep       |  66 |      3
  5 | John Cho           |  43 |      0
(5 rows)

 id |     name     | age | oscars
----+--------------+-----+--------
  4 | Meryl Streep |  66 |      3
(1 row)

 id |        name        | age | oscars
----+--------------------+-----+--------
  1 | Leonardo Di Caprio |  41 |      1
  3 | Samuel L. Jackson  |  67 |      0
  4 | Meryl Streep       |  66 |      3
  5 | John Cho           |  43 |      0
(4 rows)