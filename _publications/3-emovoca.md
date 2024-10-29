---
title: "EmoVOCA: Speech-Driven Emotional 3D Talking Heads"
collection: publications
permalink: /publication/emovoca-2
excerpt: 'We present EmoVOCA, a novel dataset that can be used to train a model to generate emotional 3D talking heads. The proposed method is capable of generating emotional 3D talking heads based on a speech track, an intensity label, an emotion label, and an actor to animate'
date: 2025-03-19
venue: 'IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)'
paperurl: 'https://arxiv.org/pdf/2403.12886'

---

The domain of 3D talking head generation has witnessed significant progress in recent years. A notable challenge in this field consists
in blending speech-related motions with expression dynamics, which is primarily caused by the lack of comprehensive 3D datasets that combine diversity in spoken sentences with a variety of facial expressions.
Whereas literature works attempted to exploit 2D video data and parametric 3D models as a workaround, these still show limitations when
jointly modeling the two motions. 
In this work, we address this problem from a different perspective, and propose an innovative data-driven technique that we used for creating a synthetic dataset, called EmoVOCA, obtained by combining a collection of inexpressive 3D talking heads and
a set of 3D expressive sequences. 
To demonstrate the advantages of this approach, and the quality of the dataset, we then designed and trained an
emotional 3D talking head generator that accepts a 3D face, an audio file, an emotion label, and an intensity value as inputs, and learns to animate
the audio-synchronized lip movements with expressive traits of the face.
Comprehensive experiments, both quantitative and qualitative, using our
data and generator evidence superior ability in synthesizing convincing
animations, when compared with the best performing methods in the
literature. Our code and pre-trained model will be made available.
