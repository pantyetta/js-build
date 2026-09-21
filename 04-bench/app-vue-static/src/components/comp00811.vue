<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01084B, calcu00653B, calcu01108B, calcu00489B, calcu00004A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu01084B(seed) - calcu00653B(seed) + calcu01108B(seed) - calcu00489B(seed) + calcu00004A(seed));
</script>

<template>
  <div class="blk">comp00811: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(19 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(199 50% 50%);
  display: inline-block;
}
</style>
