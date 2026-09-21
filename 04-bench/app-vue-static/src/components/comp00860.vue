<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00560A, calcu00581B, calcu00839B, calcu01313A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00560A(seed) - calcu00581B(seed) + calcu00839B(seed) - calcu01313A(seed));
</script>

<template>
  <div class="blk">comp00860: {{ total }}</div>
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
