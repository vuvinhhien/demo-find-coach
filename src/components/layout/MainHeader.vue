<template>
  <header>
    <nav>
      <h1><router-link to="/">Find a coach</router-link></h1>
      <ul>
        <li>
          <router-link to="/coaches">All Coaches</router-link>
        </li>
        <li>
          <router-link to="/requests">Requests</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
header {
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: #3d008d;

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 1.6rem;

      a {
        color: #fff;
      }
    }

    ul {
      list-style-type: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 1rem;

      li {
        a {
          padding: 0.75rem 1rem;
          color: #f391e3;
          border: 1px solid transparent;

          &:active,
          &:hover,
          &.router-link-active {
            border: 1px solid #f391e3;
          }
        }
      }
    }
  }
}
</style>
