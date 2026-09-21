<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00305A, calcu01136A, calcu00949A, calcu00002A, calcu01493A } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00305A(seed) - calcu01136A(seed) + calcu00949A(seed) - calcu00002A(seed) + calcu01493A(seed));
</script>

<template>
  <div class="blk">comp00370: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(173 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(353 50% 50%);
  display: inline-block;
}
</style>
