<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01353A, calcu00082A, calcu00078A, calcu00169B, calcu00147A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu01353A(seed) - calcu00082A(seed) + calcu00078A(seed) - calcu00169B(seed) + calcu00147A(seed));
</script>

<template>
  <div class="blk">comp00132: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(39 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(219 50% 50%);
  display: inline-block;
}
</style>
