## Benchmarking blogs with interactive components

I test three different frameworks are tested: [SvelteKit+MDSveX](https://sveltekit-mdsvex-benchmark.netlify.app/), [Astro](https://astro-benchmark.netlify.app/), and [Iles](https://iles-benchmark.netlify.app/). Three increasingly long blogposts containing a single interactive Counter component are included. The Counter component is written with Preact in Astro and Preact in Iles. 


| Page  | Word count | # DOM elements | uncompressed HTML (KB) | gzipped HTML (KB) |
|-------|------------|----------------|------------------------|-------------------|
| post1 | 8.8k       | 1k             | 78                     | 28                |
| post2 | 23k        | 2.5k           | 200                    | 78                |
| post3 | 71k        | 7.5k           | 600                    | 240               |


Using Webpagetest I ran a Lighthouse benchmark thrice for each framework on `post1` and `post3`. 

### `post1` results

| Framework        | Total JS uncompressed (KB) | Total JS gzipped (KB) | LH Run 1                                                 | LH Run 2                                                 | LH Run 3                                                 |
|------------------|----------------------------|-----------------------|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|
| SvelteKit+MDSveX | 290                        | 100                   | [99](https://webpagetest.org/result/220204_BiDc88_D8J/)  | [99](https://webpagetest.org/result/220204_BiDcHE_D7Y/)  | [99](https://webpagetest.org/result/220204_AiDcYS_F2A/)  |
| Astro            | 12                         | 6                     | [99](https://webpagetest.org/result/220204_AiDcHS_F3H/)  | [100](https://webpagetest.org/result/220204_AiDcWV_F55/) | [100](https://webpagetest.org/result/220204_AiDcE7_F3A/) |
| Iles             | 14                         | 6                    | [100](https://webpagetest.org/result/220217_AiDcQ5_N3D/) | [100](https://webpagetest.org/result/220217_AiDcC0_N3F/) | [100](https://webpagetest.org/result/220217_AiDcPP_N3G/) |


### `post3` results

| Framework        | Total JS uncompressed (KB) | Total JS gzipped (KB) | LH Run 1                                                | LH Run 2                                                | LH Run 3                                                |
|------------------|----------------------------|-----------------------|---------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------|
| SvelteKit+MDSveX | 2175                       | 780                   | [45](https://webpagetest.org/result/220204_AiDcHZ_E87/) | [53](https://webpagetest.org/result/220204_AiDcWZ_E7J/) | [54](https://webpagetest.org/result/220204_BiDc7A_CFJ/) |
| Astro            | 12                          | 6                    | [73](https://webpagetest.org/result/220204_AiDcRP_EN0/) | [80](https://webpagetest.org/result/220204_AiDc3E_EM7/) | [84](https://webpagetest.org/result/220204_AiDcZR_EMQ/) |
| Iles             | 14                         | 6                    | [77](https://webpagetest.org/result/220217_BiDcXA_KHG/) | [80](https://webpagetest.org/result/220217_BiDcV2_KHD/) | [83](https://webpagetest.org/result/220217_BiDc1F_KHF/) |


## Notes

`Total Blocking Time` and `Time to Interactive` are the only metrics which suffer with scale for SvelteKit in comparison to the others. For an interactive blog, this might not be relevant since we assume a reader would start reading the post before clicking anything. And, anyway, this performance degradation only becomes appreciable at *very* long post lengths. This performance issue could be resolved using [partial hydration](https://github.com/sveltejs/kit/issues/1390), like the other two frameworks.