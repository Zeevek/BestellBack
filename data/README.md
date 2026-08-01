# Dossier `data/` — BestellBack

C'est ici que se range le **fichier de sauvegarde** de l'application
(`Sauvegarde-ALaTentation-….json`), à charger via l'onglet **Sauvegarde → Restaurer**.

---

## ⚠️ À lire avant de déposer le fichier ici

Le fichier de sauvegarde contient les **données personnelles des clients** :
noms, adresses postales, numéros de téléphone, et l'historique de leurs achats
(plus de 3 000 clients et 9 900 commandes).

**Ces données ne doivent pas se retrouver sur un dépôt GitHub public.**
Un dépôt public est lisible et téléchargeable par n'importe qui, et un fichier
poussé une fois reste dans l'historique du dépôt même après suppression.
Publier ces informations serait une violation du RGPD, avec un vrai risque
pour la clientèle (démarchage, usurpation) et pour la pâtisserie.

### Les trois façons de faire, de la plus sûre à la moins sûre

**1. Recommandé — garder la sauvegarde hors du dépôt**
L'application est publiée seule sur GitHub Pages ; le fichier de sauvegarde reste
sur l'ordinateur de la boutique et sur une clé USB. On le charge à la main la
première fois sur chaque appareil. C'est le fonctionnement prévu par défaut :
le fichier `.gitignore` empêche déjà l'envoi accidentel des `.json` de ce dossier.

**2. Acceptable — dépôt privé**
Si vous voulez que la sauvegarde suive le dépôt, mettez le dépôt en **privé**
(*Settings → General → Danger Zone → Change visibility*). Attention : GitHub Pages
sur un dépôt privé demande un compte payant (GitHub Pro).

**3. À éviter — dépôt public avec les données**
Ne faites pas ça, même « juste pour tester ». Il n'existe pas de moyen simple
d'effacer complètement un fichier de l'historique une fois envoyé.

---

## Charger la sauvegarde dans l'application

1. Ouvrir l'application, onglet **Sauvegarde**.
2. Cliquer sur **Restaurer une sauvegarde**.
3. Choisir le fichier `Sauvegarde-ALaTentation-….json`.
4. Confirmer : les données existantes sont remplacées par celles du fichier.

## Faire une sauvegarde

Onglet **Sauvegarde → Exporter**. Un fichier daté est téléchargé
(par exemple `Sauvegarde-ALaTentation-2026-06-28-19-30.json`).

**À faire chaque soir**, et à copier sur une clé USB ou un disque externe.
Les données ne vivent que sur l'appareil : sans sauvegarde, une panne = tout est perdu.
