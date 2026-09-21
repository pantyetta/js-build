<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00484B, calcu01024A, calcu00811A, calcu00102A, calcu00510A } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00484B(seed) - calcu01024A(seed) + calcu00811A(seed) - calcu00102A(seed) + calcu00510A(seed));
</script>

<template>
  <div class="blk">comp01036: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(13 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(193 50% 50%);
  display: inline-block;
}
</style>
