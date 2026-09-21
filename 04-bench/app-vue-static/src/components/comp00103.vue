<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00041B, calcu00098B, calcu01457A } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu00041B(seed) - calcu00098B(seed) + calcu01457A(seed));
</script>

<template>
  <div class="blk">comp00103: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(302 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(122 50% 50%);
  display: inline-block;
}
</style>
