<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01464A, calcu01332B, calcu01176B, calcu01492B, calcu01422B } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu01464A(seed) - calcu01332B(seed) + calcu01176B(seed) - calcu01492B(seed) + calcu01422B(seed));
</script>

<template>
  <div class="blk">comp00142: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(335 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(155 50% 50%);
  display: inline-block;
}
</style>
