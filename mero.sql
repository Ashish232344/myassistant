CREATE DATABASE mero_ropai;
USE mero_ropai;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(100),
  street VARCHAR(100),
  city VARCHAR(50),
  state VARCHAR(50),
  pincode VARCHAR(10),
  country VARCHAR(50)
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  total INT,
  payment_method VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM orders;
SELECT * FROM users;

