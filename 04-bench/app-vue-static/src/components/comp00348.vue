<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01041B, calcu01050B, calcu00912A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu01041B(seed) - calcu01050B(seed) + calcu00912A(seed));
</script>

<template>
  <div class="blk">comp00348: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(68 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(248 50% 50%);
  display: inline-block;
}
</style>
