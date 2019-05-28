create database lista;
show databases;
use lista;
create table usuarios(
	id_Usuarios int PRIMARY KEY AUTO_INCREMENT,
    email varchar(40),
    nome varchar(20),
    senha varchar(20),
    unique(email)
);
SELECT * FROM usuarios where email="gabrielgianotti@outlook.com" or senha = 1234568;
drop table usuarios;
create table compra(
	id_Compra integer primary key auto_increment,
    produto varchar(20),
    quantidade int,
    descricao varchar(50),
    imagem varchar(20)
)
select * from usuarios;
insert into usuarios (email,nome,senha)values("gabrielgianotti@outlook.com","gabriel","12345678");