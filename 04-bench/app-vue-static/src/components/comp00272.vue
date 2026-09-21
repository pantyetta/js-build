<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01350B, calcu01588A, calcu01333A } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu01350B(seed) - calcu01588A(seed) + calcu01333A(seed));
</script>

<template>
  <div class="blk">comp00272: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(27 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(207 50% 50%);
  display: inline-block;
}
</style>
