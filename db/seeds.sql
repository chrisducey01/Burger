-- Only execute the use statement if hosting a local instance of MySQL
-- This will use the database you created in the schema.sql file.
-- If hosting on JawsDB, the database name was included in the connection
--   string so you won't have to specify it.
USE burgers_db;

-- Execute commands below to create a new table and populate seed data into it
TRUNCATE TABLE burgers;

INSERT INTO burgers(
    burger_name, 
    devoured
)
VALUES
(
    'Pepper Don''t Preach Burger',
    FALSE
),
(
    'Fig-eta Bout It Burger',
    TRUE
),
(
    'Olive And Let Die Burger',
    FALSE
),
(
    'Poblano Picasso Burger',
    FALSE
),
(
    'Salvador Cauliflower Burger',
    FALSE
)