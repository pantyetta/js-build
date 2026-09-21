<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01252A, calcu01148B, calcu01246B, calcu00986A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu01252A(seed) - calcu01148B(seed) + calcu01246B(seed) - calcu00986A(seed));
</script>

<template>
  <div class="blk">comp00631: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(259 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(79 50% 50%);
  display: inline-block;
}
</style>
