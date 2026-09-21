<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01101B, calcu01255B, calcu00114A } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu01101B(seed) - calcu01255B(seed) + calcu00114A(seed));
</script>

<template>
  <div class="blk">comp00829: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(307 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(127 50% 50%);
  display: inline-block;
}
</style>
