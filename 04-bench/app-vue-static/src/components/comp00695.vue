<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01031A, calcu00666B, calcu01185B, calcu00409B } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu01031A(seed) - calcu00666B(seed) + calcu01185B(seed) - calcu00409B(seed));
</script>

<template>
  <div class="blk">comp00695: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(67 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(247 50% 50%);
  display: inline-block;
}
</style>
