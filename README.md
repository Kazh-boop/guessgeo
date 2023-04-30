# GuessGeo

## Pourquoi ce projet, sa naissance

Ce projet est un projet personnel. 

En effet j'ai d'abord essayé de lancer le premier projet: Doodle. Malheureusement je n'ai jamais réussi à le faire fonctionner. J'avais toujours une erreur avec la partie back-end (erreur de création de table avec Quarkus, docker, etc). Après y avoir passé plusieurs heures à essayer de le faire fonctionner, j'ai décidé de regarder sur le second projet (Medium, Conduit). Malheureusement je n'ai jamais réussi à comprendre l'architecture de ce projet, où commencer, malgré toute la documentation de la partie back-end et front-end sur le site. Je n'arrivais pas à trouver à quel endroit je pouvais mettre ma petite touche personnelle à ce projet.

J'ai donc décidé de réaliser un projet personnel, qui me permettrait de mettre en pratique les connaissances acquises durant ce cours. J'ai bien conscience que ce n'était pas totalement l'objectif de cette partie projet, mais je ne me voyais pas faire autrement. Ayant envie de réaliser un projet personnel web depuis un moment, je me suis dit que c'était l'occasion de le faire. Voici comment est né GuessGeo.

## Présentation du projet

GuessGeo est un jeu de géographie. Le but est de trouver le pays correspondant à la capitale affichée.
Il y a 10 questions avec des pays aléatoires par partie. Le score est affiché durant, età la fin de la partie.
J'ai choisi Angular pour réaliser ce projet car c'est un framework que j'ai déjà utilisé avec le tp sur Pokemon et dont j'ai apprécié l'utilisation de component avec une séparation du typescript, du html et du css. En parlant du tp Pokemon, je me suis inspiré de celui-ci pour la structure de mon projet.

## Structure du projet

Le projet est basé sur Angular. Il est composé :
- de 2 components : 
  - input-user : pour la saisie de la réponse de l'utilisateur avec la liste des capitales possibles  qui s'actualise en fonction de la saisie de l'utilisateur et qui utilise un filtre (pipe).
  - quiz : pour l'affichage de la question, du score et du bouton pour passer à la question suivante et le bouton pour recommencer une partie.

- d'un service : 
   Celui-ci utilise l'API REST de http://api.geonames.org pour récupérer le nom des pays et des capitales en **français**. Il est important de noter que pour l'utiliser il faut créer un compte qui doit être vérifier et que dans l'url de la requête il faut mettre son nom d'utilisateur à la place de "username". Ayant mis le mien par défaut et créé pour l'occasion, il ne devrait pas y avoir de problème pour l'utiliser.

- d'un model :
  Ce model est dans country.ts. Il permet de récupérer les données de l'API REST et d'en créer un objet.


## Lancement du projet

Utiliser la commande `ng serve` pour lancer le projet. Puis se rendre sur `http://localhost:4200/`. 

