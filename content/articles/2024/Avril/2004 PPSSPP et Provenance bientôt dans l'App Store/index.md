+++
title = "PPSSPP et Provenance bientôt dans l'App Store, mais pas DolphiniOS"
date = 2024-04-20T16:47:32+01:00
draft = false
author = "Mickael"
tags = ["Actu"]
+++ 

![DolphiniOS](F-ZeroGX.jpg "Pas de F-Zero GX sur iPhone (à moins de le vouloir vraiment)")

Après avoir bêtement refusé les émulateurs sur l'App Store pendant des années, Apple a fini par les autoriser, sous la pression européenne. Les utilisateurs d'iPhone et d'iPad peuvent donc maintenant profiter de l'excellent Delta, qui émule de vieilles consoles Nintendo (NES, SNS, Game Boy…) de manière très élégante et efficace ([lire notre mode d'emploi](https://nostick.fr/articles/2024/avril/1904-comment-installer-et-utiliser-delta/)).

Maintenant que la porte est ouverte, d'autres émulateurs vont s'y engouffrer : il y a deux bonnes nouvelles, et une mauvaise. PPSSPP, l'émulateur PSP ultime, pourrait bien débarquer dans quelques semaines ou mois : le créateur de l'application, Henrik Rydgård, a en effet [annoncé](https://www.ppsspp.org/news/apple-announcement-comment/) qu'il avait l'intention de la lancer sur l'App Store pour peu qu'Apple éclaircisse la situation concernant les ROMs — ce qui a été fait, puisque Delta permet d'enregistrer et de lancer des ROMs, peu importe leur provenance.

![Soul Calibur](soulcalibur.jpg "Ce bon vieux Soul Calibur dans PPSSPP")


La deuxième bonne nouvelle, c'est que l'équipe de Provenance [travaille](https://www.imore.com/iphone/exclusive-iphone-emulator-provenance-following-delta-onto-the-app-store-with-sega-and-playstation-support-in-tow) elle aussi sur une version pour l'App Store. Cet émulateur à tout faire — de la NES à la PS1, en passant par les consoles de Sega et la Neo-Geo Pocket — est même aux portes de la boutique d'Apple, à en croire Joseph Mattiello, le responsable du développement.

![Provenance](Provenance.jpg "L'émulateur Provenance.")

En revanche, et c'est un crève-cœur, l'équipe d'OatmealDome en charge de DolphiniOS a [annoncé](https://oatmealdome.me/blog/why-dolphin-isnt-coming-to-the-app-store/) que l'émulateur GameCube et Wii ne serait pas soumis à l'App Store. La raison est technique : Apple n'autorise la compilation Just-in-Time (JIT) que pour Safari et les navigateurs tiers. Les autres applications n'y ont pas droit, et les émulateurs non plus…

Cet outil est pourtant indispensable pour accélérer la traduction des instructions PowerPC (l'architecture des processeurs des deux consoles Nintendo) vers ARM (l'architecture des puces Ax de l'iPhone). Il est toujours possible d'utiliser un « interpréteur », mais les résultats sont tout simplement catastrophiques comme le montre ces deux vidéos :

{{< youtube aM_jIDCSMcc >}} 

Sans JIT, avec un interpréteur. Personne ne veut jouer avec ça.

{{< youtube QTg-q1s_awY >}} 

Avec JIT, tout de suite, ça va mieux. Ces deux vidéos ont été tournées avec un iPhone 15 Pro Max, le top du top d'Apple.

Tout cela est bien malheureux, et s'il existe une solution alternative pour installer DolphiniOS, et même Provenance sur votre iPhone en passant par AltStore, la procédure est plus complexe que de simplement donner une source à la boutique. DolphiniOS nécessite ainsi l'activation JIT, ce qui passe par AltServer et [pas mal de bidouilles](https://faq.altstore.io/how-to-use-altstore/altjit). PPSSPP peut aussi être installé dès à présent sur un iPhone avec AltStore, mais il faudra aussi en passer par la version « sideloading » de la boutique avec AltServer ([voici comment faire](https://suyogya.link/installing-sidestore-and-ppsspp-on-ios/)).
