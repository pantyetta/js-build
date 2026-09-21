<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01333A, calcu00137A, calcu01313B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu01333A(seed) - calcu00137A(seed) + calcu01313B(seed));
</script>

<template>
  <div class="blk">comp01348: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(81 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(261 50% 50%);
  display: inline-block;
}
</style>
