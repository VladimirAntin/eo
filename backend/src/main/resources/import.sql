
INSERT INTO authority(name) VALUES ('ROLE_ADMIN');
INSERT INTO authority(name) VALUES ('ROLE_PROFESOR');
INSERT INTO authority(name) VALUES ('ROLE_STUDENT');


INSERT INTO zvanje(naziv) VALUES ('Docent');
INSERT INTO zvanje(naziv) VALUES ('Redovan profesor');
INSERT INTO zvanje(naziv) VALUES ('Vanredni profesor');
INSERT INTO zvanje(naziv) VALUES ('Asistent');
INSERT INTO zvanje(naziv) VALUES ('Saradnik u nastavi');

INSERT INTO user (dtype,ime,prezime,username,password) VALUES ('User','admin','admin','admin','$2a$10$li.uU23..9Ooi7HJUw4/ruUY5vaddV90XpqRGkcoPOM5XYc627Vs2');
--admin
INSERT INTO user (dtype,ime,prezime,username,password,zvanje_id) VALUES ('Nastavnik','pera','peric','pera','$2a$10$ZFf1hGTI48A7aSV9WCe0eOZaTG4lvfJBlT6sBNT3pc98AK2A7mLaW',1);
-- pera
INSERT INTO user (dtype,ime,prezime,username,password,broj_indexa) VALUES ('Ucenik','nikola','nikolic','nikola','$2a$10$NR/hWZi.JcoUG6kz4r148u90k5as2nSe07.Uc9mWiHa9hRuCxM38.','90');
--nikola

INSERT INTO user_authority(user_id, authority_id) VALUES (1,1);
INSERT INTO user_authority(user_id, authority_id) VALUES (2,2);
INSERT INTO user_authority(user_id, authority_id) VALUES (3,3);


-- INSERT INTO aktivnost(broj_bodova,naziv) VALUES (5,'nesto');
-- INSERT INTO aktivnost(broj_bodova,naziv) VALUES (2,'nesto');


