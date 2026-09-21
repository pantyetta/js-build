<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01202B, calcu01144B, calcu01123A, calcu01576A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu01202B(seed) - calcu01144B(seed) + calcu01123A(seed) - calcu01576A(seed));
</script>

<template>
  <div class="blk">comp00230: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(298 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(118 50% 50%);
  display: inline-block;
}
</style>
