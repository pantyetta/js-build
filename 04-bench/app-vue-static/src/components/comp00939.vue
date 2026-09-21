<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01296B, calcu01501B, calcu01465B, calcu01197B, calcu01105B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu01296B(seed) - calcu01501B(seed) + calcu01465B(seed) - calcu01197B(seed) + calcu01105B(seed));
</script>

<template>
  <div class="blk">comp00939: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(49 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(229 50% 50%);
  display: inline-block;
}
</style>
