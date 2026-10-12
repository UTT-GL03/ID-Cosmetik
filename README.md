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
| Conscious Bunny | Publicités (Annonces Google), suivi | Sans objet |

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

Par conséquent, pour réduire l'impact écologique du service, nous proposons de :
- **renoncer aux publicités gérées par une régie tierce**
- **renoncer au référencement payant et aux crédits publicitaires vendus aux marques**, afin de préserver l'indépendance de la notation et notre éthique
- **adopter un modèle fondé principalement sur l'abonnement annuel** (15 €/an, affiché 1,25 €/mois), la consultation des fiches et du score restant gratuite et sans publicité ;
- **le compléter par une incitation au don** pour ceux qui souhaitent soutenir nos projets.

