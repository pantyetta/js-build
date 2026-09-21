<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00872A, calcu00700B, calcu01339B, calcu01534B, calcu00989A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00872A(seed) - calcu00700B(seed) + calcu01339B(seed) - calcu01534B(seed) + calcu00989A(seed));
</script>

<template>
  <div class="blk">comp00453: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(55 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(235 50% 50%);
  display: inline-block;
}
</style>
