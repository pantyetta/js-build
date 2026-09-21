<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00285B, calcu01027A, calcu01513B, calcu00283A } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu00285B(seed) - calcu01027A(seed) + calcu01513B(seed) - calcu00283A(seed));
</script>

<template>
  <div class="blk">comp01206: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(70 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(250 50% 50%);
  display: inline-block;
}
</style>
