<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01489A, calcu01084A, calcu01485B, calcu00820B } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu01489A(seed) - calcu01084A(seed) + calcu01485B(seed) - calcu00820B(seed));
</script>

<template>
  <div class="blk">comp00378: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(133 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(313 50% 50%);
  display: inline-block;
}
</style>
