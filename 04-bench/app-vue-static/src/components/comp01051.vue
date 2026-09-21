<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00940B, calcu01451A, calcu01112A } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu00940B(seed) - calcu01451A(seed) + calcu01112A(seed));
</script>

<template>
  <div class="blk">comp01051: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(98 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(278 50% 50%);
  display: inline-block;
}
</style>
