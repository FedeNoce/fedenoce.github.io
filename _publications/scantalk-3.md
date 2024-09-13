---
title: "ScanTalk: 3D Talking Heads from Unregistered Scans"
collection: publications
permalink: /publication/scantalk-3
excerpt: 'In this work, we present ScanTalk, a novel framework capable of animating 3D faces in arbitrary topologies including scanned data.'
date: 2024-03-19
venue: 'European Conference on Computer Vision (ECCV)'
pageurl: 'https://fedenoce.github.io/scantalk/'
paperurl: 'https://arxiv.org/pdf/2403.10942'
---

Speech-driven 3D talking heads generation has emerged as a significant area of interest among researchers, presenting numerous
challenges. Existing methods are constrained by animating faces with fixed topologies, wherein point-wise correspondence is established, and
the number and order of points remains consistent across all identities the model can animate.
In this work, we present ScanTalk, a novel framework capable of animating 3D faces in arbitrary topologies including scanned data. Our approach relies on the DiffusionNet architecture to overcome the fixed topology constraint, offering promising avenues
for more flexible and realistic 3D animations. 
By leveraging the power of DiffusionNet, ScanTalk not only adapts to diverse facial structures but also maintains fidelity when dealing with scanned data, thereby enhancing the authenticity and versatility of generated 3D talking heads.
Through comprehensive comparisons with state-of-the-art methods, we validate the efficacy of our approach, demonstrating its capacity to generate realistic talking heads comparable to existing techniques. 
While our primary objective is to develop a generic method free from topological
constraints, all state-of-the-art methodologies are bound by such limitations. Code for reproducing our results, and the pre-trained model can be found in the [project page](https://fedenoce.github.io/scantalk/).