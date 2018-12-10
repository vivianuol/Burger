create database burgers_db;

use burgers_db;

create table burgers (
    id int(8) auto_increment,
    burger_name VARCHAR(50) not null,
    devoured boolean,
    primary key (id)
)
