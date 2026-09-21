<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00204B, calcu00414A, calcu01037B, calcu01471A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00204B(seed) - calcu00414A(seed) + calcu01037B(seed) - calcu01471A(seed));
</script>

<template>
  <div class="blk">comp00375: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(146 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(326 50% 50%);
  display: inline-block;
}
</style>
