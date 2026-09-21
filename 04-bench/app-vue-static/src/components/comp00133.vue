<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00372B, calcu00111A, calcu00911B, calcu00678B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu00372B(seed) - calcu00111A(seed) + calcu00911B(seed) - calcu00678B(seed));
</script>

<template>
  <div class="blk">comp00133: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(305 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(125 50% 50%);
  display: inline-block;
}
</style>
