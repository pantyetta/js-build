<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00822A, calcu01276A, calcu00620B, calcu01431B } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu00822A(seed) - calcu01276A(seed) + calcu00620B(seed) - calcu01431B(seed));
</script>

<template>
  <div class="blk">comp01537: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(41 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(221 50% 50%);
  display: inline-block;
}
</style>
