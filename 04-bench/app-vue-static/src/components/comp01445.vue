<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01118B, calcu00017B, calcu01058B, calcu01039B, calcu00527A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu01118B(seed) - calcu00017B(seed) + calcu01058B(seed) - calcu01039B(seed) + calcu00527A(seed));
</script>

<template>
  <div class="blk">comp01445: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(198 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(18 50% 50%);
  display: inline-block;
}
</style>
