<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01063B, calcu00755A, calcu01121B, calcu00646A } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu01063B(seed) - calcu00755A(seed) + calcu01121B(seed) - calcu00646A(seed));
</script>

<template>
  <div class="blk">comp01215: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(222 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(42 50% 50%);
  display: inline-block;
}
</style>
