<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01541A, calcu01212A, calcu01330A, calcu00364A } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu01541A(seed) - calcu01212A(seed) + calcu01330A(seed) - calcu00364A(seed));
</script>

<template>
  <div class="blk">comp00872: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(221 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(41 50% 50%);
  display: inline-block;
}
</style>
