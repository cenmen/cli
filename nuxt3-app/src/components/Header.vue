<template>
  <n-menu v-model:value="activeKey" class="w-full border-solid border-b-2 border-gray-300" mode="horizontal" :options="menuOptions" />
</template>

<script setup>
import { h, ref } from 'vue';
import { NMenu, NIcon } from 'naive-ui';
import { BookOutline as BookIcon, PersonOutline as PersonIcon, WineOutline as WineIcon } from '@vicons/ionicons5';

const renderIcon = icon => () => h(NIcon, null, { default: () => h(icon) });

const activeKey = ref(null);

const menuOptions = [
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_blank',
          rel: 'noopenner noreferrer',
        },
        '测试顶部组件'
      ),
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon),
  },
  {
    label: '测试顶部组件',
    key: 'a-wild-sheep-chase',
    icon: renderIcon(PersonIcon),
    disabled: true,
  },
  {
    label: '测试顶部组件',
    key: 'dance-dance-dance',
    icon: renderIcon(WineIcon),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon(PersonIcon),
          },
          {
            label: '羊男',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon),
          },
        ],
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: '威士忌',
            key: 'whisky',
          },
        ],
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich',
          },
        ],
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes',
      },
    ],
  },
];
</script>
