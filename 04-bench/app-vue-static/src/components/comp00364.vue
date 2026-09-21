<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00107B, calcu01505B, calcu01293B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu00107B(seed) - calcu01505B(seed) + calcu01293B(seed));
</script>

<template>
  <div class="blk">comp00364: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(236 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(56 50% 50%);
  display: inline-block;
}
</style>
