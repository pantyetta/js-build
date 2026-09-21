<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00167A, calcu01553B, calcu01061B } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00167A(seed) - calcu01553B(seed) + calcu01061B(seed));
</script>

<template>
  <div class="blk">comp00961: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(224 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(44 50% 50%);
  display: inline-block;
}
</style>
