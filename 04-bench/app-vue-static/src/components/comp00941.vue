<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01329A, calcu01108B, calcu01115B, calcu01194A } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu01329A(seed) - calcu01108B(seed) + calcu01115B(seed) - calcu01194A(seed));
</script>

<template>
  <div class="blk">comp00941: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(115 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(295 50% 50%);
  display: inline-block;
}
</style>
