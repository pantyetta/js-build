<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01011B, calcu01330A, calcu00577A, calcu01487B } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu01011B(seed) - calcu01330A(seed) + calcu00577A(seed) - calcu01487B(seed));
</script>

<template>
  <div class="blk">comp01213: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(42 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(222 50% 50%);
  display: inline-block;
}
</style>
