<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00960A, calcu01321B, calcu00107B, calcu01362B, calcu00144B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu00960A(seed) - calcu01321B(seed) + calcu00107B(seed) - calcu01362B(seed) + calcu00144B(seed));
</script>

<template>
  <div class="blk">comp00533: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(187 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(7 50% 50%);
  display: inline-block;
}
</style>
