<template>
    <button class="h-button"
            :class="classes"
            :disabled="disabled"
            :loading="loading">
      <span v-if="loading">
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-loading"></use>
      </svg>
      </span>
      <slot></slot>
    </button>

</template>

<script lang="ts">
import {computed} from 'vue'
  export default {
    name: "Button",
    props:{
      theme:{
        type:String,
        default: 'button'
      },
      size:{
        type:String,
        default: 'normal'
      },
      level:{
        type:String,
        default: 'normal'
      },
      disabled:{
        type: Boolean,
        default: false
      },
      loading:{
        type: Boolean,
        default: false
      }
    },
    setup(props){
      const {theme,size,level} = props
      const classes = computed(()=>{
        return [`h-theme-${theme}`,`h-size-${size}`,`h-level-${level}`]
      })
      return {classes}
    }
}
</script>

<style lang="scss">
$button-height: 32px;
$background: #eeeeef;
$focus-background: #1c4793;
$color: #333;
$link-color:#3478f6;
$focus-color: #8f8f90;
$main:#2e7bfd;
$success:#78e472;
$danger:#eb4d3d;
$disabled-color: grey;

.h-button{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  box-sizing: border-box;
  white-space: nowrap;
  padding: 0.3em  1.5em;
  cursor: pointer;
  outline: none;
  color: $color;
  border-radius: 2em;
  border: 1px solid #e1e1e1;
  background: white;
  &.h-theme-button{
    &.h-level-main{
      border-color: $main;
      color:  $main;
    }
    &.h-level-success{
      border-color: $success;
      color:  $success;
    }
    &.h-level-danger{
      border-color: $danger;
      color:  $danger;
    }
  }
  &.h-theme-link{
    color: $link-color;
    background: $background;
    &:hover{
      color:#1c4793;
    }
    &.h-level-main{
      background: $main;
      color:  white;    }
    &.h-level-success{
      background: $success;
      color:  white;
    }
    &.h-level-danger{
      background: $danger;
      color:  white;    }
  }
  &.h-theme-text{
    color: #333;
    background: white;
    border: none;
    &:hover{
      color: #333;
    }
    &.h-level-main{
      color:  $main;
    }
    &.h-level-success{
      color:  $success;
    }
    &.h-level-danger{
      color:  $danger;
    }
  }
  &.h-size-big{
    font-size: 20px;
    height: 38px;
    padding: 1em  1em;
  }
  &.h-size-small{
    font-size: 13px;
    height: 20px;
    padding: 1em  1.2em;
  }
  &.h-theme-link, &.h-theme-text , &.h-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $disabled-color;
      &:hover{
        background: transparent;
      }
    }
    &.h-theme-link, &.h-theme-text , &.h-theme-button {
      &[loading]{
        >span{
          margin-right: 3px;
          .icon{
            width: 1em;
            height: 1em;
            animation: loading .8s linear infinite;
            vertical-align: middle;
          }
        }

      }
    }
    & + & {
      margin-left: 8px;
    }
    &:hover {
      background: $focus-color;
    }
  }
  @keyframes loading {
    from {transform: rotate(0)}
    to {transform: rotate(360deg)}

  }
}
</style>