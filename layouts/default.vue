<template>
  <div>
    <Nav />
    <Nuxt />
  </div>
</template>

<style>
html {
  /* font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif; */
  font-family: ABeeZee, Oswald, Kosugi;
  color: #4f4f4f;
  font-size: 12px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.h1 {
  font-family: ABeeZee;
  font-style: italic;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
}
.h1sub {
  font-family: ABeeZee;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
}
.h2 {
  background: #4f4f4f;
  color: white;
  border-radius: 0px 20px 20px 20px;
  padding: 8px 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
}
.h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
}
div {
  border-color: #e0e0e0;
}
hr {
  width: 210px;
  border-color: #e0e0e0;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
