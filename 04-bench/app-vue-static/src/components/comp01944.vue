<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01279B, calcu00401B, calcu00988B, calcu01495A, calcu01074A } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu01279B(seed) - calcu00401B(seed) + calcu00988B(seed) - calcu01495A(seed) + calcu01074A(seed));
</script>

<template>
  <div class="blk">comp01944: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(53 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(233 50% 50%);
  display: inline-block;
}
</style>
