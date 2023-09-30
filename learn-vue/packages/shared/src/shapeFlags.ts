/*
 * @Author: harvey —— fxli@yuansuan.cn
 * @Date: 2023-09-27 20:51:46
 * @LastEditors: harvey fxli@yuansuan.cn
 * @LastEditTime: 2023-09-27 21:30:54
 * @Description:
 * Copyright (c) 2023 by harvey —— email: fxli@yuansuan.cn, All Rights Reserved.
 */
/* 
 
*/
/**
 * @description:    
 *  这段代码定义了一个枚举类型ShapeFlags，用于表示虚拟节点的不同标志位。
    每个标志位都是一个二进制位，通过按位左移运算符(<<)来给每个标志位赋予唯一的值。
    根据这段代码，可以得出以下含义：

      ELEMENT: 表示虚拟节点是一个普通的元素节点。

      FUNCTIONAL_COMPONENT: 表示虚拟节点是一个函数式组件。

      STATEFUL_COMPONENT: 表示虚拟节点是一个有状态的组件。

      TEXT_CHILDREN: 表示虚拟节点的子节点是纯文本。

      ARRAY_CHILDREN: 表示虚拟节点的子节点是一个数组。

      SLOTS_CHILDREN: 表示虚拟节点的子节点是插槽。

      TELEPORT: 表示虚拟节点是一个传送门。

      SUSPENSE: 表示虚拟节点是一个悬挂节点。

      COMPONENT_SHOULD_KEEP_ALIVE: 表示组件应该保持活跃状态。

      COMPONENT_KEPT_ALIVE: 表示组件已经保持活跃状态。

      COMPONENT: 表示虚拟节点是一个组件，可以是有状态的组件或者函数式组件。这个标志位是STATEFUL_COMPONENT和FUNCTIONAL_COMPONENT的按位或运算结果。
      这些标志位可以用于判断和处理不同类型的虚拟节点
 * @return {*}
 */
export const enum ShapeFlags {
  ELEMENT = 1,
  FUNCTIONAL_COMPONENT = 1 << 1,
  STATEFUL_COMPONENT = 1 << 2,
  TEXT_CHILDREN = 1 << 3,
  ARRAY_CHILDREN = 1 << 4,
  SLOTS_CHILDREN = 1 << 5,
  TELEPORT = 1 << 6,
  SUSPENSE = 1 << 7,
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,
  COMPONENT_KEPT_ALIVE = 1 << 9,
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT
}
