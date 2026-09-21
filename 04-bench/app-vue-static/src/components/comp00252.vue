<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00066B, calcu01104B, calcu00125B, calcu00656B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00066B(seed) - calcu01104B(seed) + calcu00125B(seed) - calcu00656B(seed));
</script>

<template>
  <div class="blk">comp00252: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(168 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(348 50% 50%);
  display: inline-block;
}
</style>
