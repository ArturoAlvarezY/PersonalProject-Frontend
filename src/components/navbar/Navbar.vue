<script setup>
import { ref } from "vue";

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const handleLogout = () => {
  closeModal();
};
</script>

<template>
    <nav class="navbar" id="myNav">
      <div class="container-fluid">
        <span class="navbar-text">
          <img src="../assets/leonhome.png" alt="Lyon faczoopia logo" id="lyon" />
        </span>
        <button
          class="navbar-toggler"
          type="button"
          id="navbar-toggler"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/counter">Animals</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/form">Form</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/animalsFilter">Filter</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item" id="zootopia">
              <a href="#" class="nav-link" @click="openModal">
                Log Out <img src="../assets/logout.png" id="imglogout" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  <div v-if="showModal" class="modal-overlay">
    <div class="modal-content">
      <div id="headerModal"></div>
      <h2>Are you sure you want to leave the page?</h2>
      <div class="modal-buttons">
        <router-link to="/"
          ><button class="btn btn-danger" @click="handleLogout">
            Yes
          </button></router-link
        >
        <button class="btn btn-secondary" @click="closeModal">No</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  background-color:#D4A5E6; 
  padding: 1rem; 
}

.container-fluid {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-text img {
  height: 40px;
  width: auto;
}

.navbar-toggler {
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 0.5rem;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,..."); 
  width: 30px;
  height: 30px;
  display: block;
}

.collapse.navbar-collapse {
  display: flex;
  justify-content: space-between;
}

.navbar-nav {
  list-style-type: none;
  padding-left: 0;
  display: flex;
  align-items: center;
}

.nav-item {
  margin-right: 1rem;
}

.nav-link {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  padding: 0.5rem 1rem;
  transition: color 0.2s ease-in-out;
}

.nav-link:hover {
  color: #fff;
}

.me-auto {
  margin-right: auto;
}

.ms-auto {
  margin-left: auto;
}

#zootopia .nav-link {
  display: flex;
  align-items: center;
}

#zootopia .nav-link img {
  height: 20px;
  margin-left: 0.5rem;
}

@media (max-width: 992px) {
  .navbar-collapse {
    display: none; 
  }

  .navbar-toggler[aria-expanded="true"] + .navbar-collapse {
    display: flex; 
  }

  .navbar-nav {
    flex-direction: column;
    width: 100%;
  }

  .nav-item {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 480px) {
  #navbar-toggler {
    margin-right: 25px !important;
  }
  #myNav {
    height: auto;
  }
  #zootopia {
    font-size: 20px;
  }
}
#headerModal {
  width: 100%;
  height: 40px;
  background-color: #2d3e50;
}
</style>
