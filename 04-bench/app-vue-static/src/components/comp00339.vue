<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00216A, calcu00156A, calcu01135A } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu00216A(seed) - calcu00156A(seed) + calcu01135A(seed));
</script>

<template>
  <div class="blk">comp00339: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(353 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(173 50% 50%);
  display: inline-block;
}
</style>
