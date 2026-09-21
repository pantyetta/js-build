<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01023B, calcu01459B, calcu00165B, calcu00395B } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu01023B(seed) - calcu01459B(seed) + calcu00165B(seed) - calcu00395B(seed));
</script>

<template>
  <div class="blk">comp00123: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(73 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(253 50% 50%);
  display: inline-block;
}
</style>
