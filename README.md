# ID-Cosmetik
*Service numérique sur l'analyse de la composition de produits cosmétiques pour réduire l'impact écologique et les dangers sanitaires lors d'achat.*

## Choix du sujet
Depuis ces dernières années, nous avons pu voir émerger des produits de beauté qui ne respectent pas les normes européennes vendues en Europe. Personnellement, nous utilisons en moyenne 5 produits cosmétiques par jour, ce qui nous a poussé à nous interroger sur l’impact écologique et sanitaire de ce que nous achetons. 

Nous avons décidé de choisir un site d’analyse de composition de produits cosmétiques (maquillage, gel douche,...) car nous aimerions aussi remettre au centre les informations factuelles plutôt que le marketing qui cachent parfois des produits nocifs pour la santé. Un service d’analyse des compositions permet également de simplifier l’accès à l’information pour les personnes ayant des allergies, et de consommer plus consciemment.
## Utilité sociale
En France, nous sommes l’un des principaux pays créateurs de cosmétiques, générant 35 Milliards d’euros par an (src : [FEBEA](https://www.febea.fr/le-secteur-cosmetique/chiffres-cles-du-marche-cosmetique)). Ainsi, comprendre quels sont les ingrédients et molécules qui vont entrer en contact avec la peau permettrait d’acheter de manière plus éclairée et alignée avec les enjeux environnementaux actuels. 

L’utilité sociale d’un site qui note et recense les produits cosmétiques est principalement son ouverture au public sur les compositions et leurs effets pour la santé, en autres en expliquant des noms d’ingrédients parfois incompréhensibles. Ce service permet de soulager la charge des clients qui n’ont plus à connaître chaque molécule et critères nécessaires pour l’achat d’un cosmétique “propre”. 

A terme, l'existence de ce genre de site permet de remettre en cause la manière de produire les cosmétiques, puisqu'une baisse d’achat sur les cosmétiques nocifs peut entraîner une remise en cause des entreprises sur leurs fabrications et encourager des produits plus responsables. Certains sites d’analyse de compositions prennent également en compte les tests sur les animaux et l’impact sur l’environnement, mais sont souvent sur différents sites où l'utilisateur doit donc scanner plusieurs fois son produit pour en connaître tous les critères. 
## Impact de la numérisation
Beaucoup de sites internet proposent des conseils sur les meilleurs produits à utiliser, que ce soit des magazines ou des sites de produits cosmétiques. Ils ne sont souvent pas développés dans l’optique de réduire leur consommation internet et poussent même à l’achat. 

De plus, avec l’utilisation croissante de l’IA dans nos prises de décisions quotidiennes, utiliser des sites d’analyse de composition pour les produits de cosmétique permettrait une réelle compréhension de ce que l’on achète. Comme les sites internet peuvent être collaboratifs cela rend humain et plus concrets que les conseils que pourraient donner une IA générative sur ce sujet. Pour la conception de notre site nous aimerions mettre en avant l’aspect collaboratif tout en permettant de prendre en compte différentes données (composition, impact environnemental, test sur les animaux) pour avoir sur un seul site de données que nous cherchons sur différents sites parfois.

Ainsi, les sites internet d’analyse de compositions de produits cosmétiques existants sont déjà plus sobres que ce que les gens utilisent pour se renseigner sur les produits à acheter (Chatbot, magazines en ligne, vidéos…).

## Scénarios d’usage et impacts
Nous formulons l’hypothèse que l’utilisateur.rice utilise l’outil principalement pendant l’achat en ligne afin de vérifier le produit ou comparer entre deux produits, ou bien l’utilisation se fait après achat pour confirmer la composition. 

Pour cette raison, nous prenons en compte le cas de scénario de consultation d’un produit mais aussi nous prenons en compte le cas de scénario de la consultation d’un ingrédient spécifique dans une démarche de recherche d'information précise (effets indésirables spécifiques à un ingrédient).

### Scénario : “Consulter la composition d’un produit”
- L’utilisateur.rice se connecte au site internet et accepté les conditions générales
- Iel rentre le produit et/ou sa composition
- Iel consulte l’impact et les explications
- Iel retourne sur la page d’accueil
  
### Scénario : “Consulter un ingrédient”
- L’utilisateur.rice se rend sur le site et consulte la liste des ingrédients
- Iel choisit un ingrédient et lit les impacts et l’explication
- Iel retourne sur la liste des ingrédients
- Iel choisit un nouvel ingrédient et lit l’ensemble de la page

## Impact de l'exécution des scénarios auprès de différents services concurrents
L'EcoIndex d'une page (de A à G) est calculé (sources : EcoIndex, Octo, GreenIT) en fonction du positionnement de cette page parmi les pages mondiales concernant :

- le nombre de requêtes lancées,
- le poids des téléchargements,
- le nombre d'éléments du document.
Nous avons choisi de comparer l'impact des scénarios sur les services de similaires à notre idée à titre de comporaison. Nous avons observés que la plupart des sites répondait à un parcours ou l'autre et peu souvent les deux.

| Service | Score (sur 100) | Classe | Détail des mesures |
| --- | ---: | :---: | --- |
| Open Beauty Facts | 49 | D 🟧 | [...](benchmark/Open_Beauty_Facts/ecoindex-environmental-statement.md) |
| Skinsort | 17 | F 🟪 | [...](benchmark/Skinsort/ecoindex-environmental-statement.md) |
| INCI Beauty | 60 | C 🟨 | [...](benchmark/INCI_Beauty/ecoindex-environmental-statement.md) |
| Conscious Bunny | 53 | D 🟧 | [...](benchmark/Conscious_Bunny/ecoindex-environmental-statement.md) |

*Tab.1 : Mesure de l'EcoIndex moyen des services concurrents (benchmark du 05/10/2026).*

Les mesures de l'impact moyen de ces services (cf. Tab.1) révèlent des classes EcoIndex très faibles pour la plupart (E ou F) et médiocres pour certains (D).

Dans le détail, les pages les plus mal classées sont celles qui incluent :

- des traqueurs en très grand nombre (pour la revente de données de consultation à des tiers),
- des publicités en grand nombre

## Modèle Economique

Comme nous l'avons vu dans la section précédente, parmi les choix de conception ayant le plus d'impact environnemental, la plupart sont directement liés au modèle économique du service. C'est pourquoi il est nécessaire à ce stade d'analyser le modèle économique des services existants et de définir notre propre modèle, permettant une conception plus frugale.

| Service | Visiteur anonyme | Abonné |
|---|---|---|
| Open Beauty Facts | Incitation au don (open source) | Incitation au don |
| Skinsort | Publicités (Annonces Google), suivi | Freemium (stop-pub, trackers personnalisés…) |
| INCI Beauty | Publicités (Annonces Google), publicités par référencement dans les recherches, suivi | **Particuliers :** freemium (stop-pub, mode hors-ligne…)<br>**Professionnels :** abonnement à l'interface INCI Pro, crédits publicitaires |
| Conscious Bunny | Publicités (Annonces Google), suivi |  |

*Tab. 2 : Offre des services de notation de produits cosmétiques.*

Les offres de service numérique des applications de notation de cosmétiques se sont harmonisées autour d'un modèle dit freemium :
- un accès gratuit à la consultation des fiches produit, financé par la publicité d'une régie tierce (en pratique, les Annonces Google) ;
- un accès sans publicité pour les abonnés rajoutant des fonctions de confort (mode hors-ligne, recherche avancée, suivi personnalisé).

INCI Beauty ajoute un côté professionnel avec un abonnement à une interface dédiée aux marques et crédits publicitaires permettant un référencement dans les résultats de recherche. Cette forme de régie intégrée est nettement plus rémunératrice qu'une régie tierce, mais elle fait du service noté un client du service notant, ce qui pose une difficulté de principe éthique.
Le seul modèle alternatif est celui d'Open Beauty Facts, totalement gratuit et sans publicité, basé sur le don et le bénévolat.

| Source possible de revenus | Montant unitaire | Quantité nécessaire pour financer un salaire ¹ |
|---|---:|---|
| Abonnement (particulier) | 15 €/an ² | 5 870 abonnés |
| Abonnement (professionnel) | 1 500 €/an ³ | 47 clients |
| Affichage d'une publicité (régie tierce) | 0,00046 € ⁴ | 154 347 826 affichages |
| Diffusion d'une publicité (régie intégrée) | 10 000 € ⁴ | 7,1 campagnes |
| Référencement payant dans les résultats | 500 €/mois ³ | 12 marques référencées |
| Don | 20 € ⁵ | 3 550 donateurs |

*Tab. 3 : Sources de revenus possibles pour un service de notation de produits*

¹ Quantités annuelles. ² Prix de l'abonnement annuel de INCI Beauty qui se situe autour de 1,50 €/mois. ³ Hypothèse, à défaut de tarifs publics. ⁴ Montants repris de l'état de l'art du cours. ⁵ Modèle associatif basé sur Open Beauty Facts.

L'étude de l'offre et les calculs nous permettent d'établir que :

- le volume d'affichages publicitaires nécessaire pour financer un seul salaire est hors de portée d'un service à faible flux utilisateurs (de l'ordre de 25 millions de visites annuelles nécéssaires)
- la régie intégrée et le référencement payant sont incomparablement plus rémunérateurs mais ils créent un conflit d'intérêt direct avec les marques évaluées 
- un modèle par abonnement paraît adapté au financement d'un service de notation mais les taux de conversion du freemium grand public se situent usuellement entre 1 et 5 % (5 870 abonnés représentent environ 295 000 utilisateurs)
- l'abonnement annuel est préférable à l'abonnement mensuel à revenu égal car la part fixe des frais de paiement représente près de 18 % d'une transaction de 1,50 €

### Solutions pour notre service : 
- **renoncer aux publicités gérées par une régie tierce**
- **renoncer au référencement payant et aux crédits publicitaires vendus aux marques**, afin de préserver l'indépendance de la notation et notre éthique
- **adopter un modèle fondé principalement sur l'abonnement annuel** (15 €/an, affiché 1,25 €/mois), la consultation des fiches et du score restant gratuite et sans publicité ; l'option payante permettrait de sauvegarder les produits scannés, d'importer des photos prises du code-barre pour analyser le produit plutôt que de rechercher le bon produit dans la barre de recherche.
- **le compléter par une incitation au don** pour ceux qui souhaitent soutenir nos projets.

## Maquette de l'interface et échantillon de données

Au vu des différents services comparés, des exigences environnementales exprimées plus haut et des scénarios retenus, nous avons défini pour notre prototype une maquette de l'interface et un échantillon de données réalistes.

Les ressources Web possédant une représentation sur notre application seront de deux types :

- la page "catalogue" des produits cosmétiques/ingrédients (avec une HTTP-URI ayant pour chemin `/`) ou plus spécifiquement la recherche que l'utilisateur.rice fait (ayant pour chemin `/?research={x}`)
- une page d'un produit ou d'un ingrédient (avec pour chemin `/produit/{id}` ou `/ingredient/{id}`).

Nous avons également pensé à faire une page account (avec un chemin `/account/{slug id}`) et une page don (avec un chemin `/don/{id-preuvedon}`).

<img width="1879" height="1261" alt="IMG_20261103_121951" src="https://github.com/user-attachments/assets/5d15c1d5-401e-46a7-8f71-8e0a47b39543" />
<img width="2183" height="1765" alt="IMG_20261103_122014" src="https://github.com/user-attachments/assets/697a54ca-860b-4080-ae6e-4d786cf3e882" />

Fig.1: Maquette de l'interface du prototype : a. page catalogue, b. type de page pour un ingrédient ou un produit.

Nous utilisons des données générées (avec `dummy-json`). Les données correspondent à la structure des concurrents à savoir pour les produits : nom, marque, score, composition (listes des ingrédients et leur note respectives) et pour les ingrédients : score et nom (voir [modèle de données](https://github.com/UTT-GL03/ID-Cosmetik/blob/main/frontend/sample_data.hbs)).

## Étape de prototypage : Données chargées de manière statique

Pour ce premier prototype (v1.0.0), nous avons implémenté les deux scénarios retenus (« Consulter la composition d'un produit » et « Consulter un ingrédient ») sur la base de la maquette (cf. Fig.1). Les données sont celles de l'échantillon généré par dummy json, chargées de manière statique avec le code de l'application.

Nous avons choisi TypeScript au lieu du JavaScript pour des raisons de maintenance du code. Les types sont effacés à la compilation et n'ont donc aucun effet sur le poids du bundle. Ils sont regroupés dans `src/types/`, séparés des composants : `donnees.ts` pour le modèle de données (produit, ingrédient, utilisateur) et `composants.ts` pour les propriétés des composants (props). De plus lors de l'intégration des données dynamiques nous pourrons modifier plus rapidement si besoin.

Pour la structure du code, nous avons suivi l'atomic design. Seules les pages accèdent aux données et les composants reçoivent tout par des propriétés typées de `src/types/`. Ce découpage nous permettra de gérer facilement de nouvelles HTTP-URI et de retrouver rapidement chaque composant.

### Page catalogue et accueil

Pour la mise en forme, nous avons retenu PicoCS. Pico met en forme les éléments HTML sémantiques sans classes à ajouter, et nous n'avons écrit que quelques règles CSS en complément (grille, cartes, pastilles de score).

Conformément à la maquette (cf. Fig.1), chaque carte du catalogue présente une image, le nom et la marque du produit et son score. Pour limiter le poids des pages, nous avons remplacé les images par des carrés vides en CSS (`aspect-ratio: 1`) : aucune image n'est téléchargée. De même, nous n'utilisons aucune police externe, et l'icône d'onglet est vide (`data:,`) pour éviter une requête vers `/favicon.ico`. Si nous ajoutons plus tard des photos de produits, nous devrons mesurer leur coût et les optimiser (format, taille, chargement différé).

Les icônes de loupe et de cœur proviennent de [NextIcons](https://www.nexticons.com) (licence MIT). Nous avons d'abord importé le paquet `@deemlol/next-icons` mais le bundler embarquait 1 900 icônes. Nous avons donc recopié les deux SVG directement dans les composants, pour un rendu identique sans le surpoids des autres icones.

À ce stade, la barre de recherche est placée selon la maquette mais n'est pas fonctionnelle : aucun état n'est encore géré.


| Mode           | EcoIndex | GES (gCO2e) | Taille du DOM | Requêtes | Taille de la page (ko) |
|----------------|:--------:|:-----------:|:-------------:|:--------:|:----------------------:|
| développement  | 68 C 🟨|  1.64 |  206   | 40  |    5491      |
| pré-production | 88 A 🟦  | 1.24  |   203   | 3  |        105     |

__Tab.4__: Évaluation de l'impact du prototype de la page catalogue.


### Pages détails de produit et ingrédient

Les fiches produit et ingrédient partagent le même gabarit. Il comporte un lien retour vers le catalogue et le nom de l'élément, puis l'image (placeholder) à gauche et, à droite, le score, la marque et la description. Une fiche produit affiche ensuite toute sa composition, et chaque ingrédient mène à sa propre fiche, qui présente son explication et ses impacts.

Le bouton cœur « ajouter à ma collection » ouvre une popin indiquant qu'il faut être connecté.

Le compte est simulé : `src/assets/utilisateur.ts` décrit un utilisateur statique (connecté, non abonné par défaut) qui conditionne l'accès à la page `/account`, réservée aux abonné·es. Il n'y a pas d'authentification réelle. Pour la même raison, l'étape d'acceptation des conditions générales prévue dans le scénario n'est pas implémentée, et le produit est choisi dans le catalogue plutôt que recherché.

| Étape du scénario                    | EcoIndex | GES (gCO2e) | Taille du DOM | Requêtes | Taille de la page (ko) |
|--------------------------------------|:--------:|:-----------:|:-------------:|:--------:|:----------------------:|
| 1. Consulter le catalogue            | 88 A 🟦  | 1.24  |   203  |  3 |       105      |
| 2. Consulter la fiche d'un produit   | 91 A 🟦  | 1.17  |  76  | 3 |  105           |
| 3. Retourner au catalogue            | 88 A 🟦  | 1.24  |   203  |  3 |       105      |

__Tab.5__: Évaluation de l'impact du scénario « Consulter la composition d'un produit » dans le prototype (pré-production).

| Étape du scénario                    | EcoIndex | GES (gCO2e) | Taille du DOM | Requêtes | Taille de la page (ko) |
|--------------------------------------|:--------:|:-----------:|:-------------:|:--------:|:----------------------:|
| 1. Consulter un ingrédient           | 95 A 🟦  |  1.11 |   39  | 3  |       105     |
| 2. Retourner au catalogue            | 88 A 🟦  | 1.24  |   203  | 3  | 105|

__Tab.6__: Évaluation de l'impact du scénario « Consulter un ingrédient » dans le prototype (pré-production).

<!-- Analyse à rédiger après les mesures. -->
