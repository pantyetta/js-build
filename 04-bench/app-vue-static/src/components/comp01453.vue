<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01392A, calcu01433A, calcu00535B } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu01392A(seed) - calcu01433A(seed) + calcu00535B(seed));
</script>

<template>
  <div class="blk">comp01453: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(230 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(50 50% 50%);
  display: inline-block;
}
</style>
