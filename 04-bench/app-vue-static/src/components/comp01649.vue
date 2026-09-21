<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00585A, calcu01223A, calcu01590A, calcu00578B } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu00585A(seed) - calcu01223A(seed) + calcu01590A(seed) - calcu00578B(seed));
</script>

<template>
  <div class="blk">comp01649: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(257 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(77 50% 50%);
  display: inline-block;
}
</style>
