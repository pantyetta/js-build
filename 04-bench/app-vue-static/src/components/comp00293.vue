<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00952B, calcu01418A, calcu01149A } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00952B(seed) - calcu01418A(seed) + calcu01149A(seed));
</script>

<template>
  <div class="blk">comp00293: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(229 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(49 50% 50%);
  display: inline-block;
}
</style>
