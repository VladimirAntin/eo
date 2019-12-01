
INSERT INTO authority(name) VALUES ('ROLE_ADMIN');
INSERT INTO authority(name) VALUES ('ROLE_PROFESSOR');
INSERT INTO authority(name) VALUES ('ROLE_STUDENT');

INSERT INTO zvanje(naziv) VALUES ('Docent');
INSERT INTO zvanje(naziv) VALUES ('Redovan profesor');
INSERT INTO zvanje(naziv) VALUES ('Vanredni profesor');
INSERT INTO zvanje(naziv) VALUES ('Asistent');
INSERT INTO zvanje(naziv) VALUES ('Saradnik u nastavi');

INSERT INTO tip_dokumenta(naziv) VALUES ('Izvod iz maticne knjige rodjenih');
INSERT INTO tip_dokumenta(naziv) VALUES ('Diploma srednje skole');
INSERT INTO tip_dokumenta(naziv) VALUES ('Diploma takmicenja matematike');
INSERT INTO tip_dokumenta(naziv) VALUES ('Diploma takmicenja engleskog jezika');

INSERT INTO tip_aktivnosti(naziv) values ('Kolokvijum 1');
INSERT INTO tip_aktivnosti(naziv) values ('Kolokvijum 2');
INSERT INTO tip_aktivnosti(naziv) values ('Kolokvijum 3');
INSERT INTO tip_aktivnosti(naziv) values ('Kolokvijum 4');
INSERT INTO tip_aktivnosti(naziv) values ('Projekat');
INSERT INTO tip_aktivnosti(naziv) values ('Usmeni ispit');
INSERT INTO tip_aktivnosti(naziv) values ('Pismeni ispit');

--username je ujedno i password
INSERT INTO user (dtype,ime,prezime,username,email,password,online,picture) VALUES ('User','Admin','Admin','admin','admin@localhost.com','$2a$10$li.uU23..9Ooi7HJUw4/ruUY5vaddV90XpqRGkcoPOM5XYc627Vs2', false, 'api/files/profiles/default.png');
INSERT INTO user_authority(user_id, authority_id) VALUES (1,1);

