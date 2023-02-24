<template>
  <!-- String Interpolation:
    This is one way of showing data in template.
  Class "app" adds bg-pink as defined in styles-->
  <div class="app">
    Hello {{ name }}
  </div>
  <!-- Directive: v-text
    This is another way of showing data in the template using directive "v-text" -->
  <div v-text="name"></div>
  <!-- uses string interpolation to display the value of the "country" data property. -->
  <div>{{ country }}</div>
  <!-- uses the "v-html" directive to display the value of the "country" data property as HTML content. 
  In this case, the HTML content is bold text "From India" wrapped in the "b" tag.-->
  <div v-html="country"></div>
</template>

<script>
export default {
  // Each component should have a name. First letter should be capital.
  name: 'App',
  //This data is similar useState(), we just maintain our components state using useState()
  //So here we'll maintain local state of data.
  data(){
    return{
      name: 'Neeluu',
      country: '<b>From India</b>'
    }
  }
}
</script>

<style>
  .app{
    background-color: pink;
  }
</style>
