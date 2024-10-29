select 1;

create table `user`(
id varchar(100),
first_name varchar(100),
last_name varchar(100),
phone varchar(10),
email varchar(100),
primary key (id)
);
 
INSERT INTO `user` 
VALUES('02','ramesh','p','6374535853','prs@gamil.com');

INSERT INTO `user` (id,first_name,last_name)
VALUES('03','poo','g');

select * from `user`;

alter table `user` add column access varchar(100);

UPDATE `user`
SET access='READ';