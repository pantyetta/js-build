<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01066A, calcu01148B, calcu00216A } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu01066A(seed) - calcu01148B(seed) + calcu00216A(seed));
</script>

<template>
  <div class="blk">comp00170: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(59 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(239 50% 50%);
  display: inline-block;
}
</style>
