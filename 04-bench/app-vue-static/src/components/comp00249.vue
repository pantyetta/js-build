<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01336B, calcu01196A, calcu01582A, calcu00893B, calcu00341B } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu01336B(seed) - calcu01196A(seed) + calcu01582A(seed) - calcu00893B(seed) + calcu00341B(seed));
</script>

<template>
  <div class="blk">comp00249: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(276 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(96 50% 50%);
  display: inline-block;
}
</style>
