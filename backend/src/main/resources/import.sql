
INSERT INTO authority(name) VALUES ('ROLE_ADMIN');
INSERT INTO authority(name) VALUES ('ROLE_PROFESOR');
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

--username je ujedno i password
INSERT INTO user (dtype,ime,prezime,username,password) VALUES ('User','admin','admin','admin','$2a$10$li.uU23..9Ooi7HJUw4/ruUY5vaddV90XpqRGkcoPOM5XYc627Vs2');

INSERT INTO user (dtype,ime,prezime,username,password,zvanje_id) VALUES ('Nastavnik','pera','peric','pera','$2a$10$ZFf1hGTI48A7aSV9WCe0eOZaTG4lvfJBlT6sBNT3pc98AK2A7mLaW',1);
INSERT INTO user (dtype,ime,prezime,username,password,zvanje_id) VALUES ('Nastavnik','milan','milanovic','milan','$2a$10$jteOSXcC4faS7qExcbZ7NuBoAFBR/yZXQgyv3VR1Uwsxf5SJt/BO.',2);
INSERT INTO user (dtype,ime,prezime,username,password,zvanje_id) VALUES ('Nastavnik','dragan','draganovic','dragan','$2a$10$Lpbxw7WbCTEkpEnRFQXXwOf4qtbE5WOD2SpKOeH5y2uZJjkZcfRyq',3);
INSERT INTO user (dtype,ime,prezime,username,password,zvanje_id) VALUES ('Nastavnik','maja','peric','maja','$2a$10$0hEaVAd1uHSIB4TY1m.cMu15I0XVllircAtyGPgFegKW3pyehlZmi',4);
INSERT INTO user (dtype,ime,prezime,username,password,zvanje_id) VALUES ('Nastavnik','ognjen','adamovic','ognjen','$2a$10$SKrcMUOCjVaAe3zfn0Aw.uaIn0TMD0AhIsa1ABXNl/X6K1tiFa58y',2);
INSERT INTO user (dtype,ime,prezime,username,password,zvanje_id) VALUES ('Nastavnik','miroslav','mirovic','miroslav','$2a$10$I5cy8vrxtFepvRwsO8CjJe0gNGCqBM8JcFHVt/JxdDx93i43oRi.e',5);
INSERT INTO user (dtype,ime,prezime,username,password,zvanje_id) VALUES ('Nastavnik','olgica','rakic','olgica','$2a$10$IQycgT1TLcxyphNrmVj96.EUudf0/OicWU/0CLSRQjPiIWP/H7Rmi',2);

INSERT INTO user (dtype,ime,prezime,username,password,broj_indexa) VALUES ('Ucenik','natasa','nikolic','natasa','$2a$10$hafZ0YM7M9zh2.AQ21H3X.YDe21q/XOVv9ZN9Hak4MLrjfA5SSlAC','sf1/2015');
INSERT INTO user (dtype,ime,prezime,username,password,broj_indexa) VALUES ('Ucenik','dobrivoje','juric','dobrivoje','$2a$10$/lR1RgOs2cL.7HaWNUP9KuNR2q/kuEs1qm.PR06EhFUokMiANqhQC','sf2/2015');
INSERT INTO user (dtype,ime,prezime,username,password,broj_indexa) VALUES ('Ucenik','mladen','jakovljevic','mladen','$2a$10$VsUp2MKm6yrK2flgYCpbB.e7WIUbpHMhFZRFpamWv5.nLAE4tWVbC','sf3/2015');
INSERT INTO user (dtype,ime,prezime,username,password,broj_indexa) VALUES ('Ucenik','maja','glumac','maki','$2a$10$oaZPkAwjnSZ7/5tEVMOjNeXK5cgWgAThORE1vE82..971eYpM1M8K','sf4/2015');
INSERT INTO user (dtype,ime,prezime,username,password,broj_indexa) VALUES ('Ucenik','marija','kostov','marija','$2a$10$QJjHD2jkesWw1y8.c2ZaX.5/j3ydqa8p3EM6mGbXkL.RDkpVNnmQG','sf5/2015');
INSERT INTO user (dtype,ime,prezime,username,password,broj_indexa) VALUES ('Ucenik','ivan','petrovic','ivan','$2a$10$aVAbQXy9LbGEzR1oSKaOa.m0wtzI.ZnkZl/THJRCOYfHv6NvHE2la','sf6/2015');
INSERT INTO user (dtype,ime,prezime,username,password,broj_indexa) VALUES ('Ucenik','rade','andric','rade','$2a$10$sygXTGu8FGOXnMtoEvfoPOpiVzwwBjSm0KU.axD43TW/7vHFY6ATy','sf7/2015');
INSERT INTO user (dtype,ime,prezime,username,password,broj_indexa) VALUES ('Ucenik','tijana','matic','tijana','$2a$10$4iozrsG4aZTSViPw.DXX.eEmEWw7hnAoWSgcaGKN8o7ymIaH9D5Pu','sf8/2015');

INSERT INTO user_authority(user_id, authority_id) VALUES (1,1);

INSERT INTO user_authority(user_id, authority_id) VALUES (2,2);
INSERT INTO user_authority(user_id, authority_id) VALUES (3,2);
INSERT INTO user_authority(user_id, authority_id) VALUES (4,2);
INSERT INTO user_authority(user_id, authority_id) VALUES (5,2);
INSERT INTO user_authority(user_id, authority_id) VALUES (6,2);
INSERT INTO user_authority(user_id, authority_id) VALUES (7,2);
INSERT INTO user_authority(user_id, authority_id) VALUES (8,2);

INSERT INTO user_authority(user_id, authority_id) VALUES (9,3);
INSERT INTO user_authority(user_id, authority_id) VALUES (10,3);
INSERT INTO user_authority(user_id, authority_id) VALUES (11,3);
INSERT INTO user_authority(user_id, authority_id) VALUES (12,3);
INSERT INTO user_authority(user_id, authority_id) VALUES (13,3);
INSERT INTO user_authority(user_id, authority_id) VALUES (14,3);
INSERT INTO user_authority(user_id, authority_id) VALUES (15,3);

INSERT INTO predmet(aktivnosti, broj_casova_vezbi, broj_casova_predavanja,naziv) VALUES ('kolokvijum;projekat',2,3,'Osnove programiranja');
INSERT INTO predmet(aktivnosti, broj_casova_vezbi, broj_casova_predavanja,naziv) VALUES ('kolokvijum1;projekat',3,3,'Osnove web programiranja');
INSERT INTO predmet(aktivnosti, broj_casova_vezbi, broj_casova_predavanja,naziv) VALUES ('projekat;usmeni deo ispita',3,3,'Web dizajn');
INSERT INTO predmet(aktivnosti, broj_casova_vezbi, broj_casova_predavanja,naziv) VALUES ('projekat;usmeni deo ispita',3,3,'Objektno orjetisano programiranje');
INSERT INTO predmet(aktivnosti, broj_casova_vezbi, broj_casova_predavanja,naziv) VALUES ('projekat;usmeni deo ispita',3,3,'Osnove baza podataka');

INSERT INTO predmet_nastavnik(predmet_id, nastavnik_id) VALUES (1,5);
INSERT INTO predmet_nastavnik(predmet_id, nastavnik_id) VALUES (2,2);
INSERT INTO predmet_nastavnik(predmet_id, nastavnik_id) VALUES (3,3);
INSERT INTO predmet_nastavnik(predmet_id, nastavnik_id) VALUES (4,4);
INSERT INTO predmet_nastavnik(predmet_id, nastavnik_id) VALUES (5,5);
INSERT INTO predmet_nastavnik(predmet_id, nastavnik_id) VALUES (5,6);
INSERT INTO predmet_nastavnik(predmet_id, nastavnik_id) VALUES (5,7);
INSERT INTO predmet_nastavnik(predmet_id, nastavnik_id) VALUES (4,8);

INSERT INTO predmet_ucenik(predmet_id, ucenik_id) VALUES (1,9);
INSERT INTO predmet_ucenik(predmet_id, ucenik_id) VALUES (2,10);
INSERT INTO predmet_ucenik(predmet_id, ucenik_id) VALUES (3,11);
INSERT INTO predmet_ucenik(predmet_id, ucenik_id) VALUES (4,12);
INSERT INTO predmet_ucenik(predmet_id, ucenik_id) VALUES (5,13);
INSERT INTO predmet_ucenik(predmet_id, ucenik_id) VALUES (2,14);
INSERT INTO predmet_ucenik(predmet_id, ucenik_id) VALUES (3,15);

INSERT INTO dokument(tip_id,ucenik_id) VALUES (1,8);
INSERT INTO dokument(tip_id,ucenik_id) VALUES (1,9);
INSERT INTO dokument(tip_id,ucenik_id) VALUES (1,10);
INSERT INTO dokument(tip_id,ucenik_id) VALUES (1,11);
INSERT INTO dokument(tip_id,ucenik_id) VALUES (1,12);
INSERT INTO dokument(tip_id,ucenik_id) VALUES (1,13);
INSERT INTO dokument(tip_id,ucenik_id) VALUES (1,14);
INSERT INTO dokument(tip_id,ucenik_id) VALUES (1,15);

-- INSERT INTO aktivnost(broj_bodova,naziv) VALUES (5,'nesto');
-- INSERT INTO aktivnost(broj_bodova,naziv) VALUES (2,'nesto');

INSERT INTO uplata(suma,ucenik_id,predmet_id) VALUES (10000,9,1);
INSERT INTO uplata(suma,ucenik_id,predmet_id) VALUES (10000,9,2);

