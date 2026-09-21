<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01396B, calcu01075B, calcu00728A, calcu01141B, calcu00957B } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu01396B(seed) - calcu01075B(seed) + calcu00728A(seed) - calcu01141B(seed) + calcu00957B(seed));
</script>

<template>
  <div class="blk">comp01716: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(351 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(171 50% 50%);
  display: inline-block;
}
</style>
