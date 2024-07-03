---
title: "Paper Title Number 1"
collection: publications
permalink: /publication/2009-10-01-paper-title-number-1
excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
date: 2009-10-01
venue: 'Journal 1'
slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'http://academicpages.github.io/files/paper1.pdf'
citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---

This paper presents a novel approach for generating 3D talking heads from raw audio inputs. Our method grounds on the idea that speech related movements can be comprehensively and efficiently described by the motion of a few control points located on the movable parts of the face, i.e. landmarks. 
The underlying musculoskeletal structure then allows us to learn how their motion influences the geometrical deformations of the whole face. 
The proposed method employs two distinct models to this aim: the first one learns to generate the motion of a sparse set of landmarks from the given audio. 
The second model expands such landmarks motion to a dense motion field, which is utilized to animate a given 3D mesh in neutral state. Additionally, we introduce a novel loss function, named Cosine Loss, which minimizes the angle between the generated motion vectors and the ground truth ones. 
Using landmarks in 3D talking head generation offers various advantages such as consistency, reliability, and obviating the need for manual-annotation. Our approach is designed to be identity-agnostic, enabling high-quality facial animations for any users without additional data or training. Code and models are available [here](https://github.com/FedeNoce/s2l-s2d)