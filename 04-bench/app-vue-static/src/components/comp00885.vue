<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01402A, calcu00564B, calcu00438A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu01402A(seed) - calcu00564B(seed) + calcu00438A(seed));
</script>

<template>
  <div class="blk">comp00885: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(190 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(10 50% 50%);
  display: inline-block;
}
</style>
