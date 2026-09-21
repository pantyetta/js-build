<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00139A, calcu00761A, calcu00644A, calcu00695B } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00139A(seed) - calcu00761A(seed) + calcu00644A(seed) - calcu00695B(seed));
</script>

<template>
  <div class="blk">comp01268: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(19 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(199 50% 50%);
  display: inline-block;
}
</style>
