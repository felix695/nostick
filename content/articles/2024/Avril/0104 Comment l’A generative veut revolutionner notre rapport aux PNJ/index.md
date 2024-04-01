+++
title = "Comment l’IA générative veut révolutionner notre rapport aux PNJ"
date = 2024-04-01T15:00:00+01:00
draft = false
author = "Félix"
tags = ["XXL"]
+++ 

![Une image montrant un NPC dans une démo technique de NVIDIA](demonvidia.jpg "Image : NVIDIA")

**Vous n’avez sans doute pas échappé au phénomène ChatGPT, le chatbot d’OpenAI qui peut répondre à toutes vos questions les plus pointues de manière naturelle (« Corrige mon code », « Génère-moi un haïku », « inflammation de la prostate : que faire ? », etc). Eh bien les éditeurs non plus, et certains petits coquins voient en l’IA générative le futur des personnages non-joueurs dans les jeux vidéo. Où en sont les travaux, et est-ce vraiment intéressant ? Voyons ça ensemble.**

L’intégration des IA peut faire rêver : imaginez que le vendeur d’une supérette de *GTA VI* ait un équivalent de ChatGPT dans le crâne. Sur le papier, l’immersion serait accrue avec des discussions faisant l’impasse sur les arbres de dialogues traditionnels et leurs différents choix. On pourrait alors directement demander au marchand comment ça va, comment il s’est retrouvé à bosser ici ou encore ce qu’il a fait aujourd’hui. La réponse étant générée en temps réel par l’IA, elle offrirait ainsi un dialogue plus crédible et détaillé que les 2 lignes préenregistrées « Qu’est-ce qu’il vous faut ? » et « À la prochaine » dont on a pris l’habitude jusqu’à présent.

De grands noms de la tech travaillent sur cette technologie. Quelques mois après la sortie de ChatGPT, Nvidia et [Convai](https://www.convai.com) ont [présenté une démo](https://www.youtube.com/watch?v=nAEQdF3JAJo) montrant un joueur tailler une bavette avec un PNJ vendeur de ramens dans un monde cyberpunk. La discussion n’était pas très intéressante, le personnage répondant par des phrases courtes et ayant quelques problèmes de mémoire d’après [les premiers testeurs](https://www.convai.com). Si cela tournait vite en rond, la démo avait le mérite de montrer le potentiel de la technologie. 

{{< youtube AlDpWt6cOeY >}} 

Depuis, Convai a bien revu sa technologie. *[Aftermatch](https://aftermath.site/ai-npcs-nvidia-unity-ubisoft-convai-inworld)* a récemment pu jouer avec une nouvelle version construite en partenariat avec Unity dans laquelle le joueur doit fuir en compagnie d’un PNJ dans un environnement cyberpunk. Les personnages sont visiblement plus crédibles, ne se contentant pas de reformuler les données d’une fiche de personnages. L’illusion est cependant vite brisée par des limitations techniques, et un allié pourra par exemple vous dire qu’il est d’accord pour vous escorter… avant de rester figé, étant donné qu’il n’a pas été programmé pour cela.

De son côté, NVIDIA a présenté [une seconde démo](https://www.youtube.com/watch?v=uryeFhnNzEs) mélangeant réactions scriptées et IA qui n’a que moyennement convaincu le journaliste d’*Aftermatch* l’ayant essayé. Ubisoft est aussi sur l’affaire avec [ses NEO NPC](https://news.ubisoft.com/en-us/article/5qXdxhshJBXoanFZApdG3L/how-ubisofts-new-generative-ai-prototype-changes-the-narrative-for-npcs?isSso=true&refreshStatus=noLoginData), qui semblent un cran au-dessus : les personnages sont un poil plus cohérents, pouvant même reconnaître ce qu’ils voient. C’est loin d’être parfait selon [les premiers retours](https://www.theverge.com/2024/3/19/24105748/nvidia-neo-npc-prototypes-gdc-2024), et la technologie est encore bien trop limitée pour être implémentée dans un projet.

Intégrer de telle technologie implique énormément de tests pour s’assurer que tout fonctionne et que les PNJ répondent librement tout en restant dans le contexte. Il faut anticiper toutes les questions et autres actions envisagées par le joueur, ce qui demande énormément de travail pour ne pas briser l’immersion ou le déroulement d’une scène. Les IA comme ChatGPT ont l’habitude d’halluciner et d’affirmer n’importe quoi de manière crédible : un PNJ mal programmé pourrait par exemple inventer des personnages qui n’existent pas, créer de faux éléments de l’univers ou encore faire « semblant » de comprendre ce qu’il voit. Autant de couacs qui pourraient rendre confus les joueurs, pas forcément conscients de ce qui se passe en coulisse. Autrement dit, l’IA simplifie une tâche… mais apporte de nouvelles contraintes.

![Une image montrant un NPC dans une démo technique d’Ubisoft](PNJUbi.jpg "Image : Ubisoft.")

Toutes les démos vues jusqu’à présent sont encore assez bancales techniquement, avec un décalage avant les réponses ou des bégaiements occasionnels. On peut se demander comment tout cela sera intégré dans les jeux, sachant que faire tourner un petit modèle de langage nécessite une bonne puissance (sans parler du jeu à côté). L’industrie est à fond dans l’IA et va optimiser ses puces dans les années à venir, mais il reste de gros progrès à faire. Une des démos de NVIDIA était basée sur le cloud, un compromis permettant de délester la charge sur la machine, mais qui va empêcher de jouer hors-ligne.

Évidemment, ce genre de technologie pose tout un tas de questions. Elle va certainement avoir des impacts sur des emplois de scénaristes et autres doubleurs. Convai affirme que ses robots ont besoin d’énormément de travail pour fonctionner correctement, par exemple en ajoutant des garde-fous ou en les faisant réagir selon une histoire générale. Reste que ce n’est pas du tout le même métier. L’IA semble bien parti pour s’imposer dans l’industrie d’une manière ou d’une autre, et Ubisoft a déjà annoncé [un équivalent de ChatGPT](https://news.ubisoft.com/en-us/article/7Cm07zbBGy4Xml6WgYi25d/the-convergence-of-ai-and-creativity-introducing-ghostwriter) pour aider ses auteurs à rédiger les petites lignes de dialogue lues par les NPC de ses jeux.

![Une image montrant du jeu Verbal Verdict.](verbalverdict.jpg "Le jeu Verbal Verdict.")

L’intérêt d’une telle technologie est encore à prouver, mais elle trouvera sans doute sa place dans des projets de plus petite envergure. Si vous voulez en avoir un avant-goût, il est d’ores et déjà possible d’essayer *[Verbal Verdict](https://store.steampowered.com/app/2778780/Verbal_Verdict/)*, qui base tout son gameplay sur les modèles de langages : il faut résoudre une enquête en posant des questions à plusieurs suspects. Le résultat est intéressant, même s’il faut un plutôt bon ordinateur pour le faire tourner (la démo fait 8 Go et demande 6 Go de VRAM).

{{< chat 0104LLMetJV >}} 