INSERT INTO zvanje(naziv) VALUES ('Docent');
INSERT INTO zvanje(naziv) VALUES ('Redovan profesor');
INSERT INTO zvanje(naziv) VALUES ('Vanredni profesor');
INSERT INTO zvanje(naziv) VALUES ('Asistent');
INSERT INTO zvanje(naziv) VALUES ('Saradnik u nastavi');


INSERT INTO user (dtype,ime,password,prezime,username,broj_indexa,zvanje_id) VALUES ('Nastavnik','pera','pera','peric','pera',NULL,1);
INSERT INTO user (dtype,ime,password,prezime,username,broj_indexa,zvanje_id) VALUES ('Ucenik','nikola','nikola','nikolic','nikola','90',NULL);

-- INSERT INTO aktivnost(broj_bodova,naziv) VALUES (5,'nesto');
-- INSERT INTO aktivnost(broj_bodova,naziv) VALUES (2,'nesto');
