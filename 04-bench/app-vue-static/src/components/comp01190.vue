<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00076B, calcu01031A, calcu00800A } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00076B(seed) - calcu01031A(seed) + calcu00800A(seed));
</script>

<template>
  <div class="blk">comp01190: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(344 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(164 50% 50%);
  display: inline-block;
}
</style>
