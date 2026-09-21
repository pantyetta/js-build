<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00530A, calcu01520B, calcu00092A, calcu00372B } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu00530A(seed) - calcu01520B(seed) + calcu00092A(seed) - calcu00372B(seed));
</script>

<template>
  <div class="blk">comp01191: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(78 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(258 50% 50%);
  display: inline-block;
}
</style>
