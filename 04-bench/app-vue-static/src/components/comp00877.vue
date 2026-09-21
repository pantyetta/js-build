<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01575A, calcu01362A, calcu01358A, calcu00516A, calcu00704B } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu01575A(seed) - calcu01362A(seed) + calcu01358A(seed) - calcu00516A(seed) + calcu00704B(seed));
</script>

<template>
  <div class="blk">comp00877: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(2 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(182 50% 50%);
  display: inline-block;
}
</style>
