---
title: "3D Face Reconstruction Error Decomposed: A Modular Benchmark for Fair and Fast Method Evaluation"
collection: publications
permalink: /publication/5-3dface
excerpt: 'We present a toolkit for a Modularized 3D Face reconstruction
Benchmark (M3DFB), where the fundamental components of
error computation are segregated and interchangeable, allowing
one to quantify the effect of each.'
date: 2025-05-25
venue: 'IEEE conference series on Automatic Face and Gesture Recognition (FG)(Oral)'
paperurl: 'https://arxiv.org/pdf/2505.18025'

---
We introduce **M3DFB**, a modular toolkit for benchmarking 3D face reconstruction. Unlike existing monolithic tools, M3DFB separates key components of geometric error computation—such as alignment, correspondence, and a newly proposed *correction* step—allowing detailed evaluation of each. We benchmark 16 error estimators across 10 reconstruction methods on four datasets. Our findings show that the commonly used ICP-based estimator performs poorly, distorting method rankings (correlation as low as 0.41). In contrast, non-rigid alignment significantly improves accuracy (correlation > 0.90). Our correction module, combined with non-rigid warping, achieves top-tier accuracy while being 10× faster than non-rigid ICP. The open-source toolkit aims to advance 3D face reconstruction by enabling flexible and reliable error evaluation.
