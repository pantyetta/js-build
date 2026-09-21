<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01496B, calcu01367A, calcu01540B, calcu01255B } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu01496B(seed) - calcu01367A(seed) + calcu01540B(seed) - calcu01255B(seed));
</script>

<template>
  <div class="blk">comp00726: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(125 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(305 50% 50%);
  display: inline-block;
}
</style>
