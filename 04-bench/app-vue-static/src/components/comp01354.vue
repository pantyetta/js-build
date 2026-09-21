<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00580B, calcu01378A, calcu00791B, calcu01313B } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00580B(seed) - calcu01378A(seed) + calcu00791B(seed) - calcu01313B(seed));
</script>

<template>
  <div class="blk">comp01354: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(289 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(109 50% 50%);
  display: inline-block;
}
</style>
