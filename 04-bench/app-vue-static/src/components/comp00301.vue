<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01112B, calcu01574B, calcu00829A, calcu00452A, calcu00554B } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu01112B(seed) - calcu01574B(seed) + calcu00829A(seed) - calcu00452A(seed) + calcu00554B(seed));
</script>

<template>
  <div class="blk">comp00301: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(31 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(211 50% 50%);
  display: inline-block;
}
</style>
