<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01099B, calcu01582A, calcu00162A, calcu00669A } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu01099B(seed) - calcu01582A(seed) + calcu00162A(seed) - calcu00669A(seed));
</script>

<template>
  <div class="blk">comp01967: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(33 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(213 50% 50%);
  display: inline-block;
}
</style>
