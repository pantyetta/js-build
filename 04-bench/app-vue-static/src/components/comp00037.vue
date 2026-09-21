<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01259A, calcu00495A, calcu01016A, calcu01262B, calcu01509B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu01259A(seed) - calcu00495A(seed) + calcu01016A(seed) - calcu01262B(seed) + calcu01509B(seed));
</script>

<template>
  <div class="blk">comp00037: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(328 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(148 50% 50%);
  display: inline-block;
}
</style>
