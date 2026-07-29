---
title: "Polyglot: Multilingual Style Preserving Speech-Driven Facial Animation"
collection: publications
permalink: /publication/6-polyglot
excerpt: 'We introduce Polyglot, a single unified diffusion-based architecture for personalized multilingual speech-driven facial animation, using transcript embeddings to encode language-aware information and speaker-style embeddings to capture person-specific habits.'
date: 2026-05-29
venue: 'IEEE International Conference on Automatic Face and Gesture Recognition (FG)(Oral)'
paperurl: 'https://fedenoce.github.io/polyglot/'

---
Speech-Driven Facial Animation (SDFA) has garnered significant attention due to its applications in movies, video games, virtual reality, and digital humans. However, most existing methods are trained on single-language data, limiting their ability to generalize to multilingual real-world scenarios. Human speech is deeply shaped by language, affecting not only phonetics but also rhythm, intonation, and facial articulation. In addition, people speaking the same language can exhibit markedly different personal speaking styles. In this work, we introduce **Polyglot**, a single unified diffusion-based architecture for **personalized multilingual SDFA**. Our method uses transcript embeddings to encode language-aware information and speaker-style embeddings, extracted from reference facial motion, to capture person-specific habits. Polyglot does not rely on predefined language labels or speaker-specific IDs, enabling stronger generalization across languages and speakers. By jointly conditioning on language and style, Polyglot generates expressive facial animations that better reflect both the linguistic structure of the speech and the identity of the speaker.
