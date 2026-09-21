<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00025B, calcu01346A, calcu01076A, calcu00676B, calcu01165B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00025B(seed) - calcu01346A(seed) + calcu01076A(seed) - calcu00676B(seed) + calcu01165B(seed));
</script>

<template>
  <div class="blk">comp00500: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(77 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(257 50% 50%);
  display: inline-block;
}
</style>
