<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00299A, calcu00247B, calcu00541A } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00299A(seed) - calcu00247B(seed) + calcu00541A(seed));
</script>

<template>
  <div class="blk">comp01174: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(162 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(342 50% 50%);
  display: inline-block;
}
</style>
