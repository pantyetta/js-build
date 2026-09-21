<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00856A, calcu00130A, calcu00917B, calcu01081B, calcu00509B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu00856A(seed) - calcu00130A(seed) + calcu00917B(seed) - calcu01081B(seed) + calcu00509B(seed));
</script>

<template>
  <div class="blk">comp00837: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(12 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(192 50% 50%);
  display: inline-block;
}
</style>
