---
layout: archive
title: ""
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

[Download PDF version of my CV](/files/Federico_Nocentini_CV_New.pdf)

Experience
======
* **Flawless AI**
  * Research Scientist Intern
  * Los Angeles, California
  * November 2024 - May 2025
  * Topics of research: Multi Lingual Audio Driven Facial Animation


Education
======
* **PhD in 3D Computer Vision and Artificial Intelligence**
  * Università degli Studi di Firenze - Media Integration and Communication Center
  * Florence, Italy
  * November 2022 - Present
  * Topics of research: Deep Learning - 3D Computer Vision - 3D Talking Heads Generation

* **M.Sc in Computer Science and Engineering**
  * Università degli Studi di Firenze
  * Florence, Italy
  * February 2020 - October 2022
  * Grade: 110/110
  * Thesis: Generating Emotional 3D Talking Heads from Audio Spectrograms

* **B.Sc in Computer Science and Engineering**
  * Università degli Studi di Firenze
  * Florence, Italy
  * September 2016 - February 2020
  * Grade: 104/110
  * Thesis: Facial recognition with depth images generated from a deformable model of the face

Publications
======
<ul>
  {% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}
</ul>

Skills
======
* Framework and Tools: PyTorch, Pytorch3D, Tensorflow, Open3D, Trimesh, Numpy, Pandas, Matplotlib, OpenCV

* Programming Languages: Python, Java, C++, C, Javascript, Cuda

Languages
======
* **Italian**: Mother tongue
* **English**: Full professional proficiency

[Projects](https://github.com/FedeNoce)
======
* **Citation intent classification**
  * A model built with Pytorch for citation intent classification in scientific papers using the Scicite dataset. To leverage the connection between the structure of scientific papers and the intent of citations, we studied a multitask framework with two structural scaffolds (auxiliary tasks) related to the structure of scientific documents.

* **Outfit colors classification with CNN**
  * A CNN model built with Pytorch for outfit classification based on colors. The classes are taken from Shigenobu Kobayashi's book Color Image Scale.

* **Mean shift clustering with CUDA and OpenMP**
  * Sequential C++ and parallel CUDA and OpenMP implementations of the mean shift clustering algorithm. The execution times obtained for datasets of increasing dimension are compared to measure the speedup of the parallel versions.

* **Depth of Field and Motion Blur**
  * Implementation of Depth of Field and Motion Blur as postprocessing effects using Three.js

* **Social distancing detector**
  * A tool built with Python to monitor people's compliance to social distancing in crowded places in real-time. It uses a neural network based on Keras for people detection and OpenCV for measuring distances in various types of input video streams.

* **K-means clustering with CUDA and OpenMP**
  * Sequential Python and parallel CUDA and OpenMP implementations of the k-means clustering algorithm. The execution times obtained for datasets of increasing dimension are compared to measure the speedup of the parallel versions.
