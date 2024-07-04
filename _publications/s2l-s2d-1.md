---
title: "Learning Landmarks Motion from Speech for Speaker-Agnostic 3D Talking Heads Generation"
collection: publications
permalink: /publication/s2l-s2d-1
excerpt: 'A novel approach for generating 3D talking heads from raw audio inputs. This method grounds on the idea that speech related
movements can be comprehensively and efficiently described by the motion of a few control points located on the movable parts of the
face, i.e., landmarks.'
date: 2023-07-26
venue: 'International Conference on Image Analisys and Processing (ICIAP)(Oral)'
paperurl: 'https://arxiv.org/pdf/2306.01415'

---

This paper presents a novel approach for generating 3D talking heads from raw audio inputs. Our method grounds on the idea that speech related movements can be comprehensively and efficiently described by the motion of a few control points located on the movable parts of the face, i.e. landmarks. 
The underlying musculoskeletal structure then allows us to learn how their motion influences the geometrical deformations of the whole face. 
The proposed method employs two distinct models to this aim: the first one learns to generate the motion of a sparse set of landmarks from the given audio. 
The second model expands such landmarks motion to a dense motion field, which is utilized to animate a given 3D mesh in neutral state. Additionally, we introduce a novel loss function, named Cosine Loss, which minimizes the angle between the generated motion vectors and the ground truth ones. 
Using landmarks in 3D talking head generation offers various advantages such as consistency, reliability, and obviating the need for manual-annotation. Our approach is designed to be identity-agnostic, enabling high-quality facial animations for any users without additional data or training. Code and models are available [here](https://github.com/FedeNoce/s2l-s2d)
