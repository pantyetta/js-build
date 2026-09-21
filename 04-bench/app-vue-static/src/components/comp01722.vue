<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01229B, calcu01299A, calcu01045A, calcu00650B } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu01229B(seed) - calcu01299A(seed) + calcu01045A(seed) - calcu00650B(seed));
</script>

<template>
  <div class="blk">comp01722: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(58 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(238 50% 50%);
  display: inline-block;
}
</style>
