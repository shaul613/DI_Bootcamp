-- All the items.
SELECT * FROM items;
-- All the items with a price above 80 (80 not included).
SELECT * FROM items WHERE item_price > '$80.00';
-- All the items with a price below 300. (300 included)
SELECT * FROM items WHERE item_price <= '$300.00';
-- All customers whose last name is ‘Smith’ (What will be your outcome?).
SELECT * from customers WHERE cust_last_name LIKE 'Smith'; --No records becasue noone has that name
-- All customers whose last name is ‘Jones’.
SELECT * from customers WHERE cust_last_name LIKE 'Jones';
-- All customers whose firstname is not ‘Scott’.
SELECT * from customers WHERE cust_first_name NOT LIKE 'Scott';
