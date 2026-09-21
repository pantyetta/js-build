<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00737A, calcu01445A, calcu00920A, calcu00651A } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00737A(seed) - calcu01445A(seed) + calcu00920A(seed) - calcu00651A(seed));
</script>

<template>
  <div class="blk">comp00938: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(10 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(190 50% 50%);
  display: inline-block;
}
</style>
