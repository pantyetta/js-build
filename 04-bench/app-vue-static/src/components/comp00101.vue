<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00004A, calcu00464A, calcu00987A } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00004A(seed) - calcu00464A(seed) + calcu00987A(seed));
</script>

<template>
  <div class="blk">comp00101: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(132 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(312 50% 50%);
  display: inline-block;
}
</style>
