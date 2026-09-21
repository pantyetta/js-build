<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00082A, calcu01042B, calcu00316A } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00082A(seed) - calcu01042B(seed) + calcu00316A(seed));
</script>

<template>
  <div class="blk">comp00916: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(295 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(115 50% 50%);
  display: inline-block;
}
</style>
