<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01333A, calcu00665B, calcu01232B } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu01333A(seed) - calcu00665B(seed) + calcu01232B(seed));
</script>

<template>
  <div class="blk">comp01317: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(152 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(332 50% 50%);
  display: inline-block;
}
</style>
