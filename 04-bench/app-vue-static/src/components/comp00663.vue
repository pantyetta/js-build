<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00080A, calcu01554A, calcu00764B, calcu00055B } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00080A(seed) - calcu01554A(seed) + calcu00764B(seed) - calcu00055B(seed));
</script>

<template>
  <div class="blk">comp00663: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(215 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(35 50% 50%);
  display: inline-block;
}
</style>
