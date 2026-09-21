<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00402A, calcu01355A, calcu00668A } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu00402A(seed) - calcu01355A(seed) + calcu00668A(seed));
</script>

<template>
  <div class="blk">comp00824: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(335 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(155 50% 50%);
  display: inline-block;
}
</style>
