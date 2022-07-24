select * from actors order by first_name ASC;

SELECT upper(last_name), extract(YEAR from age(date_birth))
FROM actors
order by age(date_birth) DESC;
