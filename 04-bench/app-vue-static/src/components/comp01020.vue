<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01200B, calcu00885A, calcu00859A, calcu01158A, calcu01444B } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu01200B(seed) - calcu00885A(seed) + calcu00859A(seed) - calcu01158A(seed) + calcu01444B(seed));
</script>

<template>
  <div class="blk">comp01020: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(145 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(325 50% 50%);
  display: inline-block;
}
</style>
