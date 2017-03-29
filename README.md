# TDD_bataille_navale

Projet de LPro


TODO : 

Création de 2 joueurs

Création de 2 grilles similaires remplies de 0

[Générer une liste de bateaux à placer]

Placer des bateaux sur la grille (aléatoirement au début)
	1 bateau = 	1 largeur, 
				1 longueur, 
				1 coordonnée(x;y) de placement de départ, 
				1 orientation
				1 tableau de coordonnées + état des cases occupées (détruites / indemnes)
				1 variable HP
				OU type (avec Hp)

	Tester point de départ (haut gauche) + non-dépassement de la grille vers la droite ET vers le bas
	Tester si chevauchement d'un autre bateau

Tirer sur la grille du joueur adverse
	Préciser 2 coordonnées [+ type de tir ?]
	Vérifier si le tir est dans la grille
	Vérifier si le tir touche un bateau
	[Vérifier si le tir peut affecter le bateau (en fonction de son type)]
	Marquer les dégâts